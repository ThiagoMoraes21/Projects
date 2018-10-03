$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.txt').css({
    'transform' : 'translate(0px, '+ wScroll /12 +'%)'
  });
  $('#box').css({
    'transform' : 'translate('+ wScroll /30 +'%, 0px)'
  });
  $('#box2').css({
    'transform' : 'translate('+ wScroll /30 +'%, 0px)'
  });
});
