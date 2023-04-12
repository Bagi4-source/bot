from django.db import models
from datetime import date


class TimeMixin(models.Model):
    create_time = models.DateTimeField(auto_now_add=True, verbose_name='Время создания')
    update_time = models.DateTimeField(auto_now=True, verbose_name='Время обновления')

    class Meta:
        abstract = True


class User(TimeMixin):
    telegram_id = models.IntegerField(verbose_name='ID телеграм', default=-1, unique=True)
    name = models.CharField(verbose_name='Имя пользователя', max_length=60)
    subscription_end = models.DateField(verbose_name='Дата окончания подписки', default=date.today)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class Request(TimeMixin):
    telegram_id = models.IntegerField(verbose_name='ID телеграм', default=-1)
    amount = models.IntegerField(verbose_name='Сумма')
    status = models.BooleanField(verbose_name='Статус заявки', default=False)

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def user_link(self):
        return self.telegram_id
