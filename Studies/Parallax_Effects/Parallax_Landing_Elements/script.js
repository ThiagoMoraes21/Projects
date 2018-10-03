$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px,'+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px,'+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  // Animates each card individually by adding a class to them
  if(wScroll > $('#ImgContainer').offset().top - ($(window).height() / 1.2)) {
    $('#ImgContainer figure').each(function(i){
      setTimeout(function(){
        $('#ImgContainer figure').eq(i).addClass('showing');
      }, 150 * (i + 1));
    });
  }

});
