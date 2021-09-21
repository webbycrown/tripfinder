
(function ($) {
    nicdarkthemes = {
        init: function() {

            this.all_slider();
            this.general_open();
            

        },

        all_slider: function() {
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
                $('.features-box-slider .mySwiper').each(function (index) {
                 var slider_this = $(this);
                slider_this.parent().parent().find(".swiper-button-next").addClass('features-swiper-button-next-'+index);
                 slider_this.parent().parent().find(".swiper-button-prev").addClass('features-swiper-button-prev-'+index);
                 slider_this.parent().parent().find(".swiper-pagination").addClass('features-swiper-pagination-'+index);
                  var feature_mySwiper = new Swiper($(this)[0],{
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 1000,
                    loop: true,
                    navigation: {
                      nextEl: '.features-swiper-button-next-'+index,
                      prevEl: '.features-swiper-button-prev-'+index,
                    },
                    pagination: {
                      el: '.features-swiper-pagination-'+index,
                      clickable: true,
                    },
                  });
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
           if ($(this).scrollTop() > 0){  
            $('header').addClass("header-sticky");
        }
        else{
            $('header').removeClass("header-sticky");
        }
    });
         $("body").on('click','.ant-btn-default',function(){
            $('.popup_container').toggleClass('hidden');
        });

         jQuery(document).on('click','.popup_container_btns .room-info .decBtn',function(){
            var type = jQuery(this).parents('.room-info').attr('data-type');
            var value = jQuery(this).siblings('.qnt-input').val();
            value--;
            if( value < 0 ){
                value = 0;
            }
            jQuery(this).siblings('.qnt-input').val(value);

            if( value == 0 ){
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-number').text('');
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-hidden').val('');
            }else{
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-number').text(': '+value);
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-hidden').val(value);
            }            
        });



          /* jQuery('.popup_container_btns').mouseup(function(e) 
           {
            console.log('asas');
            var container = $(".popup_container_btns ");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.addClass('hidden');
            }else{
                container.removeClass('hidden');
            }
        });*/
        $(document).mouseup(function(e) 
        {
            var container = $(".popup_container_btns ");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.addClass('hidden');
            }else{
                container.removeClass('hidden');
            }
        });

        jQuery(document).on('click','.popup_container_btns .room-info .incBtn',function(){
            var type = jQuery(this).parents('.room-info').attr('data-type');
            var value = jQuery(this).siblings('.qnt-input').val();
            value++;  
            jQuery(this).siblings('.qnt-input').val(value);

            if( value == 0 ){
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-number').text('');
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-hidden').val('');
            }else{
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-number').text(': '+value);
                jQuery('.quantity-room-wrap .ant-btn .'+type+'-hidden').val(value);
            }  

        });

    

    }

};
nicdarkthemes.init();

})(jQuery);






