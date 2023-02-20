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
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    mousewheel: true,
    navigation: false,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
});

let swiper3 = new Swiper(".ratesSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
            'display': 'block'
        })
    }
    $('.bannSection .bannBlock').css({'padding-top': $('header').height() + 40})
    $('.ptBlock').css({'padding-top': $('header').height() + 40})
    $('.ptBlockBlog').css({'margin-top': $('header').height()})
    $('.newFormatSlider .swiper-wrapper').css({
        'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    })
}

if ($('#map').length != 0) {
    ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [53.5303, 49.3461],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([53.5403, 49.3461], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Балун метки",
            balloonContentBody: "Содержимое <em>балуна</em> метки",
            balloonContentFooter: "Подвал",
            hintContent: "Хинт метки",
        },{
            preset: 'islands#yellowIcon'
        });

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.events.add('click', function(e) {
        var coords = e.get('target').geometry.getCoordinates();
        myMap.setCenter(coords, 17);
    });

    // myMap.behaviors.disable('scrollZoom');
    }
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

new Swiper(".newFormatSlider", {
    slidesPerView: 5,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
new Swiper(".newFormatSlider2", {
    slidesPerView: 5,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next.scripted",
        prevEl: ".swiper-button-prev.scripted",
    },
});
new Swiper(".newFormatSlider3", {
    slidesPerView: 5,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".newFormatSlider3 .swiper-button-next",
        prevEl: ".newFormatSlider3 .swiper-button-prev",
    },
});
new Swiper(".newFormatSlider4", {
    slidesPerView: 5,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".newFormatSlider4 .swiper-button-next",
        prevEl: ".newFormatSlider4 .swiper-button-prev",
    },
});

setTimeout(function () {
    translateXSlide()
    translateXSlide2()
    translateXSlide3()
    translateXSlide4()
    prevNextBtnSlide()
}, 100)
function translateXSlide() {
    $('.newFormatSlider .swiper-wrapper').css({
        'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    })
}
$('.newFormatSlider .swiper-button-prev').on('click', function() {
    if ($('.newFormatSlider .swiper-slide:first-of-type').hasClass('swiper-slide-active')) {
        translateXSlide()
    }
})
function translateXSlide2() {
    $('.newFormatSlider2 .swiper-wrapper').css({
        'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    })
}
$('.newFormatSlider2 .swiper-button-prev').on('click', function() {
    if ($('.newFormatSlider2 .swiper-slide:first-of-type').hasClass('swiper-slide-active')) {
        translateXSlide2()
    }
})
function translateXSlide3() {
    $('.newFormatSlider3 .swiper-wrapper').css({
        'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    })
}
$('.newFormatSlider3 .swiper-button-prev').on('click', function() {
    if ($('.newFormatSlider3 .swiper-slide:first-of-type').hasClass('swiper-slide-active')) {
        translateXSlide3()
    }
})
function translateXSlide4() {
    $('.newFormatSlider4 .swiper-wrapper').css({
        'transform': `translate3d(${ ($('body').width()-$('.container').width())/2 }px,0,0)`
    })
}
$('.newFormatSlider4 .swiper-button-prev').on('click', function() {
    if ($('.newFormatSlider4 .swiper-slide:first-of-type').hasClass('swiper-slide-active')) {
        translateXSlide4()
    }
})
function prevNextBtnSlide() {
    $('.newFormatSlider .swiper-button-prev.btn').css({
        'left': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider .swiper-button-next.btn').css({
        'right': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider2 .swiper-button-prev.btn').css({
        'left': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider2 .swiper-button-next.btn').css({
        'right': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider3 .swiper-button-prev.btn').css({
        'left': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider3 .swiper-button-next.btn').css({
        'right': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider4 .swiper-button-prev.btn').css({
        'left': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
    $('.newFormatSlider4 .swiper-button-next.btn').css({
        'right': `${ (($('body').width()-$('.container').width())/2)-100 }px`
    })
}