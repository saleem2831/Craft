$(document).ready(function(){

     /* ============================================
                        Project Slider
         ============================================ */

         $('.project-list').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
          arrows:false,
          autoplaySpeed: 2000,

          responsive: [
          {

            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },

           {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },

          ]
        });


       /* ============================================
                      Testimonial Slider
          ============================================ */

          $('.testimonial-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows:true,

             responsive: [
             {
              breakpoint: 1023,
              settings: {
                arrows:false
              }
            },
          ]
          });

       /* ============================================
                      Client logo slider
         ============================================ */

         $('.clientlogo-slider').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows:false,
          autoplay: false,
          autoplaySpeed: 2000,

          responsive: [
          {

            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },

          {
            breakpoint: 430,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          ]
        });

       /* ============================================
                      Blog Slider
          ============================================ */

          $('.blog-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,

            responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            ]
          });

           /* ============================================
                     Related Blog Slider
          ============================================ */

          $('.related-blog-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,

            responsive: [
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            ]
          });

       /* ============================================
                  Instagram Post Slider
         ============================================ */

         $('.insta-post-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 2000,

          responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
          ]
        });

        /* ============================================
                      Blog Image slider
         ============================================ */
        $('.blog-image-slider').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          dots: false,
          arrows: true,
        });

});

 /* ============================================
          Sticky Header
    ============================================ */

          $(window).scroll(function() {
            var sticky = $('#po_header'),
            scroll = $(window).scrollTop();

            if (scroll >= 40) { 
              sticky.addClass('sticky'); }
              else { 
               sticky.removeClass('sticky');

             }
           });


 /* ============================================
          Page Loader
    ============================================ */

          jQuery(window).on("load", function() {
            jQuery(".loader").hide();
            jQuery("#overlayer").hide();
          });


 /* ============================================
          Toggler Menu
    ============================================ */

        jQuery(document).on("click", function(event){
          if(jQuery(event.target).closest(".navbar-toggler").length){
            jQuery(".navbar-collapse").toggleClass("show");
            jQuery(".navbar-toggler").toggleClass("collapsed");
          } else if(!jQuery(event.target).closest(".navbar-nav").length){
            jQuery(".navbar-collapse").removeClass("show");
            jQuery(".navbar-toggler").addClass("collapsed");

          }
        });

        jQuery(document).on('click', '.navbar-toggler', function(){
          jQuery(".navbar-toggler").toggleClass("collapsed");
          jQuery(".navbar-collapse").toggleClass("show");

        });

  /* ============================================
          Nav Menu Click Close Menubar
    ============================================ */

        jQuery(document).on("click", '#main_nav li', function() {
            jQuery(".navbar-collapse").removeClass("show");
            jQuery(".navbar-toggler").addClass("collapsed");
        });

/* ================================================
              Iframe Video
  ================================================*/

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            width: '100%',
            videoId: '4p-4Q8CTG00',
            playerVars: { 'autoplay': 1, 'playsinline': 1, 'loop':1, 'playlist': '4p-4Q8CTG00', 'controls':0 },
            events: {
              'onReady': onPlayerReady
            }
          });
        }

        function onPlayerReady(event) {
            event.target.mute();
            event.target.playVideo();
        }

/* ================================================
             Scroll bottom to top
  ================================================*/

      $(document).ready(function(){
          $(".scroll-top").click(function() {
              $("html, body").animate({ 
                  scrollTop: 0 
              }, 100);
              return false;
          });
      });

/* ================================================
             Number Counter
  ================================================*/

    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  /* ============================================
          Search Toggle
    ============================================ */

const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");
  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});

  /* ============================================
          Project detail popup
    ============================================ */

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})