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
    transformSlide()
});

window.onload = function() {
    transformSlide()
 };

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").mask("+7 (h99) 999-99-99");

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
      nextEl: ".ratesSlider .swiper-button-next",
      prevEl: ".ratesSlider .swiper-button-prev",
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
new Swiper(".areaSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".areaSlider .swiper-button-next",
      prevEl: ".areaSlider .swiper-button-prev",
    },
    pagination: {
        el: ".areaSlider .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            pagination: false
        },
    }
});
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
        touchEventsTarget: 'wrapper',
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
    for (let i=0;i<$('.textTitle').length;i++) {
        if ($('.textTitle').eq(i).attr('data-name')!=undefined) {
            $('.textTitle').eq(i).attr('data-name', $('.textTitle').eq(i).text())
        }
    }
    if ($('body').width() > 599) {
        $('.mapBlock .addressMapBtn').css({
            'top': `${$('.mapBlock .info-block').height()+40}px`
        })
    }
}


if ($('#map').length != 0) {
    let centerMap = [55.733, 37.588]
    ymaps.ready(['Panel']).then(function () {
        var map = new ymaps.Map("map", {
            center: [55.733, 37.588],
            zoom: 10,
            controls: []
        });
        // Создадим контент для меток.
        var offices = [
            `<div class="gallery backGrid backGridBlack">
                <div class="img">
                    <img src="img/points/29101c4b4ff9149742891cb56a6375f2.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/69aa09f545522c21f8b84a66c8898017.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/a2f65b55cd05ff572ed1c92fd2f54b74.png" class="minimized">
                </div>
            </div>
            <div class="addressBlock">
                <div class="icon"><img src="img/details/position.svg"></div>
                <div class="address-floor">
                    <div class="address">ул. Ворошилова, 55а</div>
                    <div class="floor">2 этаж</div>
                </div>
            </div>`,
            `<div class="gallery backGrid backGridBlack">
                <div class="img">
                    <img src="img/points/29101c4b4ff9149742891cb56a6375f2.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/69aa09f545522c21f8b84a66c8898017.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/a2f65b55cd05ff572ed1c92fd2f54b74.png" class="minimized">
                </div>
            </div>
            <div class="addressBlock">
                <div class="icon"><img src="img/details/position.svg"></div>
                <div class="address-floor">
                    <div class="address">ул. Ворошилова, 55а</div>
                    <div class="floor">2 этаж</div>
                </div>
            </div>`,
            `<div class="gallery backGrid backGridBlack">
                <div class="img">
                    <img src="img/points/29101c4b4ff9149742891cb56a6375f2.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/69aa09f545522c21f8b84a66c8898017.png" class="minimized">
                </div>
                <div class="img">
                    <img src="img/points/a2f65b55cd05ff572ed1c92fd2f54b74.png" class="minimized">
                </div>
            </div>
            <div class="addressBlock">
                <div class="icon"><img src="img/details/position.svg"></div>
                <div class="address-floor">
                    <div class="address">ул. Ворошилова, 55а</div>
                    <div class="floor">2 этаж</div>
                </div>
            </div>`,
        ];
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
        collection.add(new ymaps.Placemark([55.758240, 37.668523], {
            balloonContent: offices[2],
        }))
        .add(new ymaps.Placemark([55.758240, 37.678523], {
            balloonContent: offices[1],
        }))
        .add(new ymaps.Placemark([55.758240, 37.658523], {
            balloonContent: offices[0]
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
            $('.ymaps-2-1-79-controls-pane').css({
                'top': 'auto',
                'bottom': `${$('.customControl').height()+60}px`,
            })
            if (coords) {
                $('.addressMapBtn .item_address').each(function () {
                    let coordsNew = coords.join(", "),
                        str = $(this).attr('data-coordinates'),
                        nums = str.split(',').map(num => parseFloat(num.replace(/(\.\d*?[1-9])0+$/, "$1"))),
                        newStr = nums.join(', ');
                    if (newStr.indexOf(coordsNew) > -1) {
                        $(this).addClass('active')
                    } else {
                        $(this).removeClass('active')
                    }
                })
            } else {
                $('.addressMapBtn .item_address').each(function () {
                    $(this).removeClass('active')
                })
            }
        });
        $('.addressMapBtn .item_address').on('click', function() {
            var string = $(this).attr('data-coordinates');
            var coords = string.split(',');
            coords = coords.map(function(x) { return parseFloat(x); });
            map.setCenter(coords, 17);
            $('.customControl').css('display', 'none');
        })
    });

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
                width: '260px',
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
            this._$control = $(`
                <div class="customControl">
                    <div class="content"></div>
                    <div class="closeButton"></div>
                </div>
            `).appendTo(parentDomContainer);
            this._$content = $('.content');
            let self = this;
            $('.closeButton').on('click', function () {
                self._onClose();
            });
        },
        _onClose: function () {
            $('.customControl').css('display', 'none');
            $('.addressMapBtn .item_address').removeClass('active');
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
}
$('.addressMapBtn .item_address').on('click', function() {
    let content = $('.addressMapBtn .item_address'),
        block = $(this)
    content.removeClass('active')
    if (!block.hasClass('active')) {
        block.addClass('active')
    }
})

// Просмотр изображения
$(function () {
    $(document).on('click', '.minimized', function() {
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
function checkScroll() {
    marginsMain();
}
$(window).scroll(function () {
    if (!$('html').hasClass('has-scroll-smooth')) {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({
                    opacity: 1
                }).fadeIn('slow').css('display', 'flex');
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast');
        }
    }
})
$('#upbutton').click(function () {
    if (!$('html').hasClass('has-scroll-smooth')) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    }
});

function transformSlide() {
    for (let i = 1; i <= 4; i++) {
        if ($(`.newFormatSlider${i}`) != 0) {
            if ($('body').width() > 599) {
                if ($(`.newFormatSlider${i} .swiper-slide:first-of-type`).hasClass('swiper-slide-active')) {
                    console.log(111);
                    $(`.newFormatSlider${i} .swiper-wrapper`).css({
                        'transform': `translate3d(${(($('body').width() - $('.container').width()) / 2)}px,0,0)`
                    });
                }
            } else {
                $(`.newFormatSlider${i}`).css({'padding': '0 25px'})
            }
        }
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

$('.checkField').on('click', function(el) {
    el.preventDefault();
    checkField(el)
})
function checkField(el) {
    let field = $(el.target).parents('form').find('input, textarea, select')

    for (let i=0;i<field.length;i++) {
        if ($(field[i]).val()!=null) {
            if ($(field[i]).val()!='') {
                if ($(field[i]).attr('type')=='phone' || $(field[i]).hasClass('phone') || $(field[i]).attr('id')=='phone' || $(field[i]).attr('name')=='phone') {
                    if ($(field[i]).val().length < 17) {
                        $(field[i]).addClass('error')
                    } else {
                        $(field[i]).removeClass('error')
                    }
                } else {
                    $(field[i]).removeClass('error')
                }
            } else {
                $(field[i]).addClass('error')
            }
        } else {
            $(field[i]).addClass('error')
        }
        
    }
    if ($(el.target).parents('form').find('.error').length==0) {
        sendAjax(field)
    } else {
        alert('Не заполнены поля, либо заполнены некорректно')
    }
}
function sendAjax(dataForm) {
    let obj = {}
    console.log(dataForm);
    alert('Запрос Ajax')
}