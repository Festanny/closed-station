(function($) {
    marginsMain()
    checkScroll()
    heightRates()
    prevNextBtnSlide()
})(jQuery);

$(window).resize(function () {
    marginsMain()
    checkScroll()
    heightRates()
    prevNextBtnSlide()
});

// mask for phone input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, true);
    input.addEventListener("keydown", mask, false)
  });
});

let swiper = new Swiper(".reviewsSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    mousewheel: true,
    navigation: false,
    autoplay: {
        delay: 15000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
});

let swiper2 = new Swiper(".photoGallerySlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 2,
    mousewheel: true,
    navigation: false,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    breakpoints: {
        381: {
            slidesPerView: 2,
        },
    }
});

let swiper3 = new Swiper(".ratesSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".ratesSlider .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            pagination: false
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: false
        },
        600: {
            slidesPerView: 2,
            pagination: false
        },
    }
  });

$('.demoVideoSection .play').on('click', function() {
    $('#videoModal .modal-body video')[0].play()
})

$('.modal').on("click", function() {
    setTimeout(function() {
        if (!$('.modal').hasClass('show')) {
            $('#videoModal .modal-body video')[0].pause()
        }
    }, 500)
});

function marginsMain() {
    $('.bannSection .info-block .item.infoBann').css({
        'padding-left': ($('body').width()-$('.container').width())/2,
    })
    if ($('.bannSection').hasClass('containerBanner')) {
        $('.bannSection .info-block .item:not(.infoBann)').css({
            'padding-right': ($('body').width()-$('.container').width())/2,
            'display': 'flex'
        })
    }
    $('.bannBlock').css({'padding-top': $('header').height() + 40})
    $('.ptBlock').css({'padding-top': $('header').height() + 40})
    $('.ptBlockBlog').css({'margin-top': $('header').height()})
    // $('.newFormatSlider1 .swiper-wrapper').css({
    //     'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    // })
    for (let i=0;i<$('.textTitle').length;i++) {
        if ($('.textTitle').eq(i).attr('data-name')!=undefined) {
            $('.textTitle').eq(i).attr('data-name', $('.textTitle').eq(i).text())
        }
    }}

if ($('#map').length != 0) {
    let centerMap = [55.733, 37.588]
    ymaps.ready(['Panel']).then(function () {
        var map = new ymaps.Map("map", {
            center: [55.733, 37.588],
            zoom: 10,
            controls: []
        });
        // Создадим контент для меток.
        var firstOffice = 'Первый полноценный офис Яндекса появился в Москве в 2001 году. ' +
            'Тогда компания занимала небольшой корпус Вычислительного центра РАН на улице Вавилова, там работало 60 человек.';
        var secondOffice = 'Второй офис Яндекса на Самокатной улице.';
        var thirdOffice = '<a href="https://yandex.ru/company/contacts/moscow/">Главный офис Яндекса</a>' +
            '<p><img style="width: 190px;" src="img/office.jpeg"></p>' +
            '<p>В офисе на улице Льва Толстого находится штаб-квартира Яндекса, он самый большой и по размерам, ' +
            'и по численности сотрудников. Сейчас он занимает почти целый квартал между улицами Льва Толстого ' +
            'и Тимура Фрунзе. Общая площадь всех зданий — более 50 тысяч квадратных метров.</p>';
        // Создадим и добавим панель на карту.
        var panel = new ymaps.Panel();
        map.controls.add(panel, {
            float: 'left'
        });
        // Создадим коллекцию геообъектов.
        var collection = new ymaps.GeoObjectCollection(null, {
            // Запретим появление балуна.
            hasBalloon: false,
            preset: 'islands#yellowIcon'
        });
        // Добавим геообъекты в коллекцию.
        collection
            .add(new ymaps.Placemark([55.733838, 37.588100], {
                balloonContent: thirdOffice
            }))
            .add(new ymaps.Placemark([55.758240, 37.678523], {
                balloonContent: secondOffice
            }))
            .add(new ymaps.Placemark([55.693784, 37.564942], {
                balloonContent: firstOffice
            }));
        // Добавим коллекцию на карту.
        map.geoObjects.add(collection);
        // Подпишемся на событие клика по коллекции.
        collection.events.add('click', function (e) {
            // Получим ссылку на геообъект, по которому кликнул пользователь.
            var target = e.get('target');
            // Зададим контент боковой панели.
            panel.setContent(target.properties.get('balloonContent'));
            // Переместим центр карты по координатам метки с учётом заданных отступов.
            map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
        });
        collection.events.add('click', function(e) {
            var coords = e.get('target').geometry.getCoordinates();
            map.setCenter(coords, 17);
        });
    });

    // Пример реализации боковой панели на основе наследования от collection.Item.
// Боковая панель отображает информацию, которую мы ей передали.
ymaps.modules.define('Panel', [
    'util.augment',
    'collection.Item'
], function (provide, augment, item) {
    // Создаем собственный класс.
    var Panel = function (options) {
        Panel.superclass.constructor.call(this, options);
    };

    // И наследуем его от collection.Item.
    augment(Panel, item, {
        onAddToMap: function (map) {
            Panel.superclass.onAddToMap.call(this, map);
            this.getParent().getChildElement(this).then(this._onGetChildElement, this);
            // Добавим отступы на карту.
            // Отступы могут учитываться при установке текущей видимой области карты,
            // чтобы добиться наилучшего отображения данных на карте.
            map.margin.addArea({
                top: 0,
                left: 0,
                width: '250px',
                height: '100%'
            })
        },

        onRemoveFromMap: function (oldMap) {
            if (this._$control) {
                this._$control.remove();
            }
            Panel.superclass.onRemoveFromMap.call(this, oldMap);
        },

        _onGetChildElement: function (parentDomContainer) {
            // Создаем HTML-элемент с текстом.
            // По-умолчанию HTML-элемент скрыт.
            this._$control = $('<div class="customControl"><div class="content"></div><div class="closeButton"></div></div>').appendTo(parentDomContainer);
            this._$content = $('.content');
            // При клике по крестику будем скрывать панель.
            // $('.closeButton').on('click', this._onClose);

            let self = this;
            $('.closeButton').on('click', function () {
                self._onClose();
            });
        },
        _onClose: function () {
            $('.customControl').css('display', 'none');
            let map = this.getMap();
            map.setCenter(centerMap, 10);
        },
        // Метод задания контента панели.
        setContent: function (text) {
            // При задании контента будем показывать панель.
            this._$control.css('display', 'flex');
            this._$content.html(text);
        }
    });

    provide(Panel);
});





    // ymaps.ready(init);

    // function init () {
    //     var myMap = new ymaps.Map("map", {
    //             center: [53.5303, 49.3461],
    //             zoom: 12,
    //             controls: []
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    //         myPlacemark = new ymaps.Placemark([53.5403, 49.3461], {
    //             // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
    //             balloonContentHeader: "Балун метки",
    //             balloonContentBody: "Содержимое <em>балуна</em> метки",
    //             balloonContentFooter: "Подвал",
    //             hintContent: "Хинт метки",
    //         },{
    //             preset: 'islands#yellowIcon'
    //         });

    //     myMap.geoObjects.add(myPlacemark);

    //     myPlacemark.events.add('click', function(e) {
    //         var coords = e.get('target').geometry.getCoordinates();
    //         myMap.setCenter(coords, 17);
    //     });

    //     // myMap.behaviors.disable('scrollZoom');
    // }
}

// Просмотр изображения
$(function () {
    $('.minimized').click(function (event) {
        let i_path = $(this).attr('src')
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#overlay, #magnify').fadeIn('fast').css({'display': 'flex'});
    });
    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});







// gsap.registerPlugin(ScrollTrigger);

//         const pageContainer = document.querySelector(".contMain");

//         const scroller = new LocomotiveScroll({
//             el: pageContainer,
//             smooth: true
//         });

//         // scroller.on("scroll", ScrollTrigger.update);
//         scroller.on("scroll", function() {
//             checkScroll()
//         });









        // ScrollTrigger.scrollerProxy(pageContainer, {
        // scrollTop(value) {
        //     return arguments.length
        //     ? scroller.scrollTo(value, 0, 0)
        //     : scroller.scroll.instance.scroll.y;
        // },
        // getBoundingClientRect() {
        //     return {
        //     left: 0,
        //     top: 0,
        //     width: window.innerWidth,
        //     height: window.innerHeight
        //     };
        // },
        // pinType: pageContainer.style.transform ? "transform" : "fixed"
        // });

        ////////////////////////////////////
        ////////////////////////////////////
        // window.addEventListener("load", function () {
        // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        // let pinWrap = document.querySelector(".pin-wrap");
        // let pinWrapWidth = pinWrap.offsetWidth;
        // let horizontalScrollLength = pinWrapWidth - window.innerWidth;

        // // Pinning and horizontal scrolling

        // gsap.to(".pin-wrap", {
        //     scrollTrigger: {
        //     scroller: pageContainer, //locomotive-scroll
        //     scrub: true,
        //     // trigger: "#sectionPin",
        //     pin: true,
        //     // anticipatePin: 1,
        //     // start: "top top",
        //     // end: pinWrapWidth
        //     },
        //     x: -horizontalScrollLength,
        //     ease: "none"
        // });

        // // ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

        // ScrollTrigger.refresh();
        // });



function heightRates() {
    let countLi = $('.ratesSection .info-block .item.title-desc .desc ul li'),
        countSlide = $('.ratesSection .info-block .item .swiper-slide')
    for (let i=0;i<countLi.length;i++) {
        heightLiSlide(countLi[i].offsetHeight, i)
    }
    function heightLiSlide(hpx, num) {
        for (let j=0; j<countSlide.length; j++) {
            $($('.ratesSection .info-block .swiper-slide')[j]).find('.detailed ul li').eq(num).height(hpx)
        }
    }
}


const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});
// scroll.on("scroll", function() {
//     checkScroll()
// });
scroll.on("call", (value, way, obj) => {
    if (value === "toggleBackToTop") {
        if (way === "enter") {
            $('#upbutton').stop(true, false).fadeOut('fast');
            $('header').removeClass('fixed')
        } else {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({
                    opacity: 1
                }).fadeIn('slow').css('display', 'flex');
            }
            $('header').addClass('fixed')
        }
    }
});
function checkScroll() {
    marginsMain();
}

const swiperSettings = [
    {
        el: ".newFormatSlider1",
        navigation: {
            nextEl: ".newFormatSlider1 .swiper-button-next",
            prevEl: ".newFormatSlider1 .swiper-button-prev",
        },
        pagination: {
            el: ".newFormatSlider1 .swiper-pagination",
            clickable: true,
        },
    },
    {
        el: ".newFormatSlider2",
        navigation: {
            nextEl: ".swiper-button-next.scripted",
            prevEl: ".swiper-button-prev.scripted",
        },
        pagination: {
            el: ".newFormatSlider2 .swiper-pagination",
            clickable: true,
        },
    },
    {
        el: ".newFormatSlider3",
        navigation: {
            nextEl: ".newFormatSlider3 .swiper-button-next",
            prevEl: ".newFormatSlider3 .swiper-button-prev",
        },
        pagination: {
            el: ".newFormatSlider3 .swiper-pagination",
            clickable: true,
        },
    },
    {
        el: ".newFormatSlider4",
        navigation: {
            nextEl: ".newFormatSlider4 .swiper-button-next",
            prevEl: ".newFormatSlider4 .swiper-button-prev",
        },
        pagination: {
            el: ".newFormatSlider4 .swiper-pagination",
            clickable: true,
        },
    },
];
swiperSettings.forEach((swiper) => {
    new Swiper(swiper.el, {
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesProgress: true,
        navigation: swiper.navigation,
        pagination: swiper.pagination,
        breakpoints: {
            1381: {
                slidesPerView: 5,
                pagination: false
            },
            1100: {
                slidesPerView: 4,
                pagination: false
            },
            850: {
                slidesPerView: 3,
                pagination: false
            },
            600: {
                slidesPerView: 2,
                pagination: false
            },
        }
    });
});

for (let i = 1; i <= 4; i++) {
    if ($('body').width() > 599) {
        $(`.newFormatSlider${i}`).css({'padding': '0'})
        $(`.newFormatSlider${i} .swiper-wrapper`).css({
            'transform': `translate3d(${(($('body').width() - $('.container').width()) / 2)}px,0,0)`
        });
        $(`.newFormatSlider${i} .swiper-button-prev`).on('click', function() {
        if ($(`.newFormatSlider${i} .swiper-slide:first-of-type`).hasClass('swiper-slide-active')) {
            $(`.newFormatSlider${i} .swiper-wrapper`).css({
                'transform': `translate3d(${(($('body').width() - $('.container').width()) / 2)}px,0,0)`
            });
        }
        });
    } else {
        $(`.newFormatSlider${i}`).css({'padding': '0 25px'})
    }
}
function prevNextBtnSlide() {
    for (let i = 1; i <= 4; i++) {
        if ($('body').width() > 1680) {
            $(`.newFormatSlider${i} .swiper-button-prev.btn`).css({
                'left': `${(($('body').width() - $('.container').width()) / 2) - 100}px`
              });
              $(`.newFormatSlider${i} .swiper-button-next.btn`).css({
                'right': `${(($('body').width() - $('.container').width()) / 2) - 100}px`
              });
        } else if ($('body').width() > 900 && $('body').width() <= 1680) {
            $(`.newFormatSlider${i} .swiper-button-prev.btn`).css({
                'left': `${(($('body').width() - $('.container').width()) / 2) - 35}px`
              });
              $(`.newFormatSlider${i} .swiper-button-next.btn`).css({
                'right': `${(($('body').width() - $('.container').width()) / 2) - 35}px`
              });
        } else if ($('body').width() > 599 && $('body').width() <= 900) {
            $(`.newFormatSlider${i} .swiper-button-prev.btn`).css({
                'left': `${(($('body').width() - $('.container').width()) / 2)}px`
              });
              $(`.newFormatSlider${i} .swiper-button-next.btn`).css({
                'right': `${(($('body').width() - $('.container').width()) / 2)}px`
              });
        }
    }
}

$('.modal.reviewModal .rating-mini > span').on('click', function() {
    let num = $(this).attr('data-rating'),
        content = $(this).parents('.rating-mini').children('span')
    content.removeClass('active')
    for (let i=0;i<content.length;i++) {
        if (i <= num-1) {
            content.eq(i).addClass('active')
        }
    } 
})

$('.offcanvas#mobMenu .offcanvas-body ul li a.openSub').on('click', function() {
    $(this).parent('li').toggleClass('active')
})

$('.questCatalogSection .title-filter .filter-name input').on('input', function() {
    let temp = $(this).val()
    if (temp) {
        $('.questCatalogBlock .info-block .item').each(function () {
            if ($(this).attr('data-search').toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                $(this).removeClass('d-none')
            } else {
                $(this).addClass('d-none')
            }
        })
    } else {
        $('.questCatalogBlock .info-block .item').each(function () {
            $(this).removeClass('d-none')
        })
    }
})