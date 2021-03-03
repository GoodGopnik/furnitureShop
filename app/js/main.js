$('.variable-width').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: "<img src='../images/head/Line-left.png' class='prev' alt=''>",
    nextArrow: "<img src='../images/head/Line-right.png' class='next' alt=''>",
  });

  $('.center').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 2,
    // centerMode: true,
    // variableWidth: false,
    // // centerPadding: '100px',
    // slidesToShow: 1,
    prevArrow: false,
    nextArrow: "<img src='../images/block4/Line.png' class='prev' alt=''>",
    
    // centerMode: true,
    // infinite: false,
    // dots: true,
    // slidesToShow: 3,
  });