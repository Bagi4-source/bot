let tg = window.Telegram.WebApp;
tg.expand();

let images = [
    {
        id: "1",
        image: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png',
        data: '',
        like: false
    },
    {
        id: "2",
        image: 'https://avatars.mds.yandex.net/i?id=410557de4e75d41af00bb51be828290b_l-4620768-images-thumbs&n=27&h=480&w=480',
        data: '',
        like: false
    },
    {
        id: "3",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxyP-EPxLLd1DhWIGHhl-JhFJRZofodmmeU1Du2dTjMw&s',
        data: '',
        like: false
    },
    {
        id: "4",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaoJ7Z6GFOEMGi5qH3Q50yx-5HLkty7uO9rJ8yiQ&s',
        data: '',
        like: false
    },
    {
        id: "5",
        image: 'https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480',
        data: '',
        like: false
    },
    {
        id: "6",
        image: 'https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg',
        data: '',
        like: false
    },
];

function add_slide(index, len, src, text) {
    let slider = document.querySelector('.slideshow-container');
    let node = document.createElement('div');
    node.classList.add('mySlides', 'fade');
    node.innerHTML = `<div class="numbertext">${index} / ${len}</div>
            <img src="${src}">
            <div class="text">${text}</div>`;
    slider.prepend(node);
}

function generateSlider() {
    document.querySelectorAll('.mySlides').forEach((el) => {
        el.remove()
    })
    for (let i = images.length - 1; i >= 0; i--) {
        let slide = images[i];
        add_slide(parseInt(i) + 1, images.length, slide.image, slide.data);
    }
}

generateSlider();

function send_error(text) {
    let error = document.querySelector('.error');
    error.textContent = text;
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 2000);
}

function createStep2() {
    let new_images = [];
    for (let i in images) {
        let slide = images[i];
        if (slide.like) {
            slide.like = false;
            new_images.push(slide);
        }
    }
    images = new_images;
    generateSlider();
    slideIndex = 1;
    showSlides(1);
    document.querySelector('#task').textContent = 'Выберете 5 наиболее понравившихся картинок';
    document.querySelector('.finish > button').setAttribute('onclick', 'step3()');
}

function step2() {
    let count = 0;
    for (let i in images) {
        let slide = images[i];
        count += slide.like ? 1 : 0;
    }
    if (count < 5) {
        return send_error('Выберете больше 4 картинок');
    } else
        createStep2();
}

function clearImage(id) {
    document.querySelectorAll('.image').forEach((e) => {
        if (e.dataset.id && e.dataset.id === id) {
            e.style.backgroundImage = '';
            e.dataset.id = '';
            e.querySelector('.placeholder').style.display = 'block';
        }
    });
}

function createStep3() {
    let new_images = [];
    for (let i in images) {
        let slide = images[i];
        if (slide.like) {
            slide.like = false;
            new_images.push(slide);
        }
    }
    images = new_images;
    generateSlider();
    slideIndex = 1;
    showSlides(1);
    document.querySelector('#task').innerHTML = 'Разложите картинки от 1 до 5<br>(5 - нравится больше, 1 - меньше)<br>Для выбора кликайте по плиткам';
    document.querySelector('.finish > button').setAttribute('onclick', 'finish()');

    document.querySelector('.likes').remove();
    document.querySelector('.images').classList.remove('hide');
    document.querySelectorAll('.image').forEach((el) => {
        el.addEventListener('click', () => {
            clearImage(images[slideIndex - 1].id);
            el.querySelector('.placeholder').style.display = 'none';
            el.dataset.id = images[slideIndex - 1].id;
            el.style.backgroundImage = `url('${images[slideIndex - 1].image}')`;
            el.style.backgroundRepeat = 'no-repeat';
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center center';
        })
    })
}

function step3() {
    let count = 0;
    for (let i in images) {
        let slide = images[i];
        count += slide.like ? 1 : 0;
    }
    if (count !== 5) {
        return send_error('Выберете только 5 картинок');
    } else
        createStep3();
}

function finish() {
    let results = []
    document.querySelectorAll('.image').forEach((el) => {
        if (results.indexOf(el.dataset.id) !== -1)
            return send_error('Картинки не должны повторяться')
        else
            results.push(el.dataset.id);
    })
    if (results.length === 5) {
        tg.sendData(JSON.stringify(results));
        tg.close();
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function like(status) {
    document.querySelectorAll('.likes > button').forEach((el) => {
        el.classList.remove('active');
    })
    let element = document.querySelector(status ? '#like' : '#dislike');
    element.classList.add('active');
    images[slideIndex - 1].like = status;
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    like(images[slideIndex - 1].like);
}
