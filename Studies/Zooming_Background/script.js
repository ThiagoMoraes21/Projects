
window.onload = function() {
  document.querySelector('#bg').classList.toggle('child');
  document.querySelector('#bg').classList.toggle('zooming');

  setTimeout(function(){
    document.querySelector('#title').classList.toggle('titleNone');
    document.querySelector('#title').classList.toggle('titleShow');
  }, 5000);
}


window.onscroll = function() {
  var el = document.getElementById('title');
  el.style.top = (window.pageYOffset / 2) + 'px';
}
