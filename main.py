import logging
import aiohttp
from aiogram import Bot, Dispatcher, executor, types
from datetime import date, datetime

API_TOKEN = '5900125066:AAGTtraJoUzlklqfB0d21jciR7lj0EwNoSQ'

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize bot and dispatcher
bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)


def get_time(str_time):
    str_time = str_time.split('.')[0]
    return datetime.fromisoformat(str_time).strftime("%H:%M %d-%m-%Y")


@dp.message_handler(commands=['start', 'help'])
async def send_welcome(message: types.Message):
    data = {
        'telegram_id': message.from_user.id,
        'name': message.from_user.username
    }
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.post(f'http://127.0.0.1:8000/registration/', data=data) as r:
            if r.status == 201:
                print(await r.json())

    await message.answer(f"Привет, {message.from_user.username}! Мы рады тебя видеть)")


@dp.message_handler(commands=['info'])
async def echo(message: types.Message):
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get(f'http://127.0.0.1:8000/registration/',
                               params={'telegram_id': message.from_user.id}) as r:
            if r.status == 200:
                result = await r.json()
                if result:
                    result = result[0]
                    return await message.answer(
                        f"Дата окончания подписки: {result.get('subscription_end', date.today())}")
    return await message.answer("Пользователь не найден!")


@dp.message_handler(commands=['requests'])
async def echo(message: types.Message):
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get(f'http://127.0.0.1:8000/request/', params={'telegram_id': message.from_user.id}) as r:
            if r.status == 200:
                result = await r.json()
                print(result)
                if result:
                    text = "\n\n".join([
                        f"ID заявки: #{x.get('pk')}\n"
                        f"Сумма: {x.get('amount')}\n"
                        f"Статус: {'Выполнено' if x.get('status', False) else 'В обработке'}\n"
                        f"Время создания: {get_time(x.get('create_time'))}"
                        for x in result])
                    return await message.answer(text)
    return await message.answer("Заявки не найдены!")


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
