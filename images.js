let images_source = [
    "https://avatars.mds.yandex.net/i?id=3255c46bc7ecf108753e1da21cc7282afb9c5baf-4615702-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=076e101b5b134230e7cd68b75628844bea2577a9-8449287-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=5f71d182084704966698ccefd3769d0b50b08bcb-8497046-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=ad4babfd45bb3a4afc5d53c0517882a28f6dc24d-7904189-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=f7226dcceea831dccd0719eea4fe3d36edf50ca0-9038954-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=bc8c71f28d7555842358430d1ee0b8cdfc37edf9-9243502-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=a6cfb8d44ecc7b5f80fa35a6d8cfb6acc2ac4347-8287805-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=7af37fb25fe864f5ab5d1eae4a2adbcebafe2f0b-9094507-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=97c57a9a1f1ee71674254758c679a76d3a345a87-9234023-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=65e1b854855b3e42efac4220a6028d7dc390fa38-9230228-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=6fdd4479842b959a279daf908b75147dfa656284-9227708-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=783769f87c4f0f177bc1397bc917ab9f571c8932-4810024-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=560d1ab6d1a38907ad66a3124cfb7dbdf1920731-9056011-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=520695fc8b98e0b074fcba9283f6b67b34fefa92-8978567-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=ee3cfbcc8940cbe3273b1b5a634aec5c5321c40f-9150989-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=f998b4559f481e3ba35d71bcda59cc66f86c79b2-7629177-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=dc7756acca43d04aed712e74a3b33ff9e971c2b7-8437558-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c2c9ab86b4513700c14e4e66445ec2b87b6a112a-8829620-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=7a46f12d54d0dfb0f887aeaf7be0f129-5243789-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=f513b453df370c7fc56a8875d533ae44-5283232-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=95a821e5f9b3bce44e7a47661ff9a1e8-4884844-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=96ff8c945d31e23f404b09ba3a03aaad-5307923-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=9f3917b74c0b06b31e4f523747000c81-5229604-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=55ec01f759d4abd7306ce0c9e8b4943d-4718654-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=0b49f6051432ded7ba9b084fb9198513-4718654-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=e6add9becd8f7e55beb001ae83d6df72-5205235-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=b558d2102cd57fa22420bd33c530d676-5253600-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=ac37e44812695910087c1cf4141f0597-4576632-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=0b413a61a4d8468978f0afd61650b5ad-4696956-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=271685d4864b090bacd818d136f7f827-4253977-images-taas-consumers&n=11&ref=rq",
    "https://avatars.mds.yandex.net/i?id=26b858b5a93f9ba2a0431539632f6b38f6f46f38-8975527-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=cc8fc6dbceb87ffa908da3cfe6e0d866d3a42a59-8978567-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=53e3f540258b42804ca66b1ad7d3d622b7c565cf-8903262-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=013d23aa3415131e4708c155734ee4965c432dba-8223678-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=f312dac872b52d21eab14c5698941a3a42be2b0c-9182174-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=925a45ab61cae18bd1e803537262ecb446088e82-9137926-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=4b771789632babef0fbf305a117765c4cbe3faf6-8710632-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=7599f23aa033aa46ad6c38a592dc644646de16ab-4724533-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=53348bbea3d66beb4e0554a06ea0c876a183dbce-9185064-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c73fd66930c757ab5ffc46c3af52ec428ad210d8-9221695-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=f03a17e09bf098143e8c9f9cca30792c6ce262a5-9228595-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=25cbe784e746f985e77258c57926dd831090eb93-9164755-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=f2334cd6421c04f4f72f3d64c8234098c79727df-9266026-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=085a54ee06c9c47ba433c2b4eb7409bdc23c599c-7548535-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c1479f61eea5d95cf883681c9abb3c3d662754ef-8497406-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=85da98241b7eb2837ed2344c6c6360042ca71190-8318113-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=544ed54036b253582628a4bcfd0b6ecb3ef0ef9a-9106994-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=115449e55e7e203466331103992c453fdf9364ec-8498118-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=4246b7d8b1d6b4c406a3ecd0ad382056a1e2ca3b-9067403-images-thumbs&n=13",
];
let captions = [
    'Альпийские горы',
    'Букет Роз',
    'Вино Испании',
    'Восход, Начало движения',
    'Гавань',
    'Глубина Души',
    'Горное озеро',
    'Деревенский пейзаж',
    'Дом рыбака',
    'Живое море',
    'Зимний букет',
    'Золотое поле',
    'Золотые рыбы',
    'Зрелые плоды',
    'Умеренность чувств',
    'Корабли',
    'Кот и хозяйка',
    'Крыши',
    'Лесная поляна',
    'Лошадь и водопад',
    'Мексиканский залив',
    'Мир женщины',
    'Морской берег',
    'Навстречу судьбе',
    'Настроение',
    'Одинокий парус',
    'Отражение осени',
    'Париж',
    'Первый снег',
    'Петербургские зонтики',
    'Подводный Мир',
    'Подсолнухи на столе',
    'Поезд в горах',
    'Полет попугая над джунглями',
    'Подсолнухи на даче',
    'Пустыня',
    'Роза и Янтарь',
    'Ромашки в поле',
    'Сияющая Роза',
    'Солнечная Дорожка',
    'Старая Мельница',
    'Старый Замок',
    'Теплый Вечер',
    'Течение Времени',
    'Цветы в Стеклянной Вазе',
    'Цветы и водопад',
    'Энергия Исаакиевского Собора',
    'Южный город',
    'Незнакомка'
]

let images = [];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function get_images() {
    for (let i in captions) {
        images.push({
            id: (parseInt(i) + 1).toString(),
            image: `test_images/${i}.jpg`,
            data: captions[i],
            like: false
        });
    }
    shuffle(images);
}


