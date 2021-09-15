
(function ($) {
    nicdarkthemes = {
        init: function() {

            this.all_slider();
            this.general_open();
            

        },

        all_slider: function() {
            console.log('test');
            setTimeout(function(){
                var swiper = new Swiper(".home-hiro-slider .mySwiper", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 1000,
                    loop: true,
                    autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                    },
                    pagination: {
                          el: ".home-hiro-slider .swiper-pagination",
                          clickable: true,
                      },
                });
                var swiper = new Swiper(".features-box-slider .mySwiper", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 1000,
                    loop: true,
                    navigation: {
                      nextEl: ".features-box-slider .swiper-button-next",
                      prevEl: ".features-box-slider .swiper-button-prev",
                    },
                    pagination: {
                      el: ".features-box-slider .swiper-pagination",
                      clickable: true,
                  },
                });
                var swiper = new Swiper(".review-slider .mySwiper", {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    speed: 1000,
                    loop: true,
                    autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                    },
                    pagination: {
                      el: ".review-slider .swiper-pagination",
                      clickable: true,
                    },
                  breakpoints: {
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                      },
                    },
                });

        },1000);
    },
    general_open: function() {
       $("body").on('click', '.toggle-menu, .toggle-close', function () {
        $(".main-menu").toggleClass('menu-open');
        $(this).toggleClass('menu-active');
        $('body').toggleClass('menu-open');
    });
    $(window).scroll(function() {
     if ($(this).scrollTop() > 50){  
        $('header').addClass("header-sticky");
      }
      else{
        $('header').removeClass("header-sticky");
      }
    });


}

};
nicdarkthemes.init();

})(jQuery);






