function testFunction() {
  console.log('Function responding!')
  document.querySelector('#animated-bar').classList.toggle('original-state');
  document.querySelector('#animated-bar').classList.toggle('final-state');
}

function loadBar() {
  changeSize();
  // Removing the 'Get App' text
  var getApp = document.getElementById("load-container");
  var text = document.getElementById("p1");
  getApp.removeChild(text);

  document.querySelector('#load-animation').classList.toggle('final-position');
}

function changeSize() {
  document.querySelector('#load-container').classList.toggle('change-size');
}
