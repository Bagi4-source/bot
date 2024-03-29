let tg = window.Telegram.WebApp;
tg.expand();

let showed = [];

function add_showed(n) {
    if (showed.indexOf(n) === -1) {
        showed.push(n);
    }
}

get_images();

function add_slide(index, len, src, text) {
    let slider = document.querySelector('.slideshow-container');
    let node = document.createElement('div');
    node.classList.add('mySlides', 'fade');
    node.innerHTML = `<div class="numbertext">${index} / ${len}</div>
            <a href="${src}" data-fancybox data-caption="${text}">
                <img class="slider-image" src="${src}" loading="lazy"/>
            </a>`;
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
    document.querySelector('#indicator').classList.remove('hide');
    images = new_images;
    generateSlider();
    slideIndex = 1;
    showSlides(1);
    document.querySelector('#task').textContent = 'Выберите 5 наиболее понравившихся картинок';
    document.querySelector('.finish > button').setAttribute('onclick', 'step3()');
}

function step2() {
    let count = 0;
    for (let i in images) {
        let slide = images[i];
        count += slide.like ? 1 : 0;
    }
    if (showed.length !== 49)
        return send_error('Посмотрите все картинки!');
    if (count < 5)
        return send_error('Выберите больше 4 картинок!');
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
    document.querySelector('#indicator').classList.add('hide');
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
    document.querySelector('#task').innerHTML = 'Разложите картинки от 1 до 5<br>(1 - нравится больше, 5 - меньше)<br>Для выбора кликайте по плиткам';
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
        return send_error('Выберите только 5 картинок!');
    } else
        createStep3();
}

function finish() {
    let results = []
    document.querySelectorAll('.image').forEach((el) => {
        if (results.indexOf(el.dataset.id) !== -1)
            return send_error('Картинки не должны повторяться!')
        else
            results.push(el.dataset.id);
    })
    for (let i in results) {
        if (!results[i])
            return send_error('Нужно заполнить все номера!')
    }
    if (results.length === 5) {
        tg.sendData(JSON.stringify(results));
        tg.close();
    }
}

let slideIndex = 1;
showSlides(slideIndex);
add_showed(slideIndex);

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
    let count = 0;
    for (let i in images) {
        if (images[i].like)
            count += 1;
    }
    document.querySelector('#indicator').innerText = `${count} / 5`;
    if (count === 5) {
        document.querySelector('#indicator').style.backgroundColor = "#a3ff70";
        document.querySelector('#indicator').style.color = "#000";
    } else {
        document.querySelector('#indicator').style.backgroundColor = "#ff5959";
        document.querySelector('#indicator').style.color = "#fff";
    }

}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex -= 1
        return
    }
    if (n < 1) {
        slideIndex += 1
        return;
    }
    add_showed(slideIndex);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    like(images[slideIndex - 1].like);
}
