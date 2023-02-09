// href
$("body").on('click', '[href*="#"]', function (e) {
    let mobile = 0
    if ($('body').width() <= 580) {
        mobile = 30
    }
	let fixed_offset = $('header nav').height() + mobile;
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
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

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({
                opacity: 1
            }).fadeIn('slow').css('display', 'flex');
        }
    } else {
        $('#upbutton').stop(true, false).fadeOut('fast');
    }
});
$('#upbutton').click(function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500);
});

function marginsMain() {
    // $('main').css({'padding-top': $('header').height() + 40})
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
}

(function($) {
    $(window).scroll(function () {
        $(window).scrollTop() > 0 ? $('header').addClass('fixed') : $('header').removeClass('fixed');
    })
    $( window ).resize(function() {
        marginsMain()
    });
    marginsMain()
})(jQuery);

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