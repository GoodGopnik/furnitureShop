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
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 2,
    prevArrow: false,
    nextArrow: "<img src='../images/block4/Line.png' class='prev' alt=''>",
  });

  $('.block5').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow: "<img src='../images/block5/Line-left.png' class='block5_prev' alt=''>",
    nextArrow: "<img src='../images/block5/Line-right.png' class='block5_next' alt=''>",
  });