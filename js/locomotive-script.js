gsap.registerPlugin(ScrollTrigger);

var locomotive = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1.0,
    getDirection: true,
})

locomotive.on('scroll', () => {
    ScrollTrigger.update();
});

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
      return arguments.length
        ? locomotive.scrollTo(value, 0, 0)
        : locomotive.scroll.instance.scroll.y;
      },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector('[data-scroll-container]').style.transform
      ? 'transform'
      : 'fixed',
});

ScrollTrigger.defaults({
    scroller: '[data-scroll-container]',
});

ScrollTrigger.addEventListener('refresh', () => locomotive.update());

ScrollTrigger.refresh();

const stopScrollClasses = ['mapMain', 'swiper-wrapper'];
const stopScrollElements = document.querySelectorAll(stopScrollClasses.map(className => `.${className}`).join(', '));
stopScrollElements.forEach(element => {
    element.addEventListener('mouseenter', () => locomotive.stop());
    element.addEventListener('mouseleave', () => locomotive.start());
});

locomotive.on("call", (value, way, obj) => {
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