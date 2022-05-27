$(function () {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
          },
        },
      ],
  });
});

$(function () {
  $(".galary__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    dots: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
          
        },
      },
    ],
  });
});
