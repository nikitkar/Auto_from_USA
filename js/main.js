$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 740,
            settings:{
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 530,
           settings:{
               slidesToShow: 1,
           }
        }
    ]
    })
});


function scrollNav() {
    $('.button__scroll').click(function(){
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 500);
      return false;
    });
  }
scrollNav();