products = document.querySelectorAll('a.product')
products.forEach( product => {
    new Swiper(product.querySelector('div.swiper'), {
        slidesPerView: 1,
        spaceBetween: 1,
        direction: 'vertical',
        autoHeight: true,
        pagination: {
            el: product.querySelector('div.swiper-pagination'),
            clickable: true
        }
    })
})

populars = document.querySelectorAll('div.tab_content > div.swiper')
populars.forEach( popular => {
    new Swiper( popular, {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            prevEl: popular.querySelector('div.swiper-navigation div.arrow:first-child'),
            nextEl: popular.querySelector('div.swiper-navigation div.arrow:last-child'),
        },
        breakpoints: {
            960: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    })
})

new Swiper('section.main div.swiper.main', {
    slidesPerView: 1,
    navigation: {
        prevEl: document.querySelector('section.main div.swiper div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.main div.swiper div.swiper-navigation div.arrow:last-child'),
    },
    pagination: {
        el: document.querySelector('section.main div.swiper div.swiper-pagination'),
        clickable: true
    }
})

new Swiper('section.reviews div.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        prevEl: document.querySelector('section.reviews div.swiper div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.reviews div.swiper div.swiper-navigation div.arrow:last-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
})

new Swiper('section.main div.swiper.article', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    navigation: {
        prevEl: document.querySelector('section.main div.swiper.article + div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.main div.swiper.article + div.swiper-navigation div.arrow:last-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})

new Swiper('section.additional div.swiper.products', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    navigation: {
        prevEl: document.querySelector('section.additional div.swiper.products div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.additional div.swiper.products div.swiper-navigation div.arrow:last-child'),
    },
    breakpoints: {
        960: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
})

// Скрыть / Показать пароль
let showPassword = (element) => {
    element.classList.toggle('active')
    input = element.previousElementSibling
    input.type == 'password' ? input.type = 'text' : input.type ='password'
}