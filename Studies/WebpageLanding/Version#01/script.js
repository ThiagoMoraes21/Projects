var banerTop = document.getElementById('baner').offsetTop;
var icon = document.getElementById('arrow');
var scrolledAnchor = true;
var menuActive = false;

//  Altera entre mostra ou esconder o conteúdo do menu
function barActions() {
  document.querySelector('#menu').classList.toggle('showMenu');
  document.querySelector('#blackBg').classList.toggle('showBlackBg');
  menuActive = !menuActive;
}

//  Muda a direção da seta de acordo com a posição da janela em relação ao documento
function arrowActions() {
  if(menuActive) {
    barActions();

  } else if(scrolledAnchor) {
    //  Link da seta aponta para o ranking section, caso esteja na main page
    document.getElementById('menuArrow').href = "#baner";
    icon.className = 'fa fa-arrow-down';

  } else {
    //  Caso esteja na ranking section, troca o link para apontar para a main page
    document.getElementById('menuArrow').href = "#headerAnchor";
    icon.className = 'fa fa-arrow-down open';
  }
}

//  Monitora se o usuário rolou a pag sem usar o Link da seta e altera o estatus do icone
//  de acordo com a posição atual, em seguida chama a função que controla as ações da seta
window.onscroll = function(){
  if (document.body.scrollTop > (banerTop / 1.4) || document.documentElement.scrollTop > (banerTop / 1.4)) {
    scrolledAnchor = false;
    arrowActions();
  } else {
    scrolledAnchor = true;
    arrowActions();
  }

  // Scrolling parallax
  var headerTitle = document.getElementById('titleHeader');
  console.log(headerTitle.style.top);
  headerTitle.style.top = -(window.pageYOffset + 100) + '%';

};


//  Muda a scala do background e apresenta o titulo do header(efeito fade-in)
window.onload = function() {
    document.getElementById('picture').classList.toggle('zoom');
    document.getElementById('picture').classList.toggle('zooming');

    setTimeout(function(){
      document.getElementById('t1').classList.toggle('hiddeTitle');
      document.getElementById('t1').classList.toggle('showTitle');

      setTimeout(function(){
        document.getElementById('t2').classList.toggle('hiddeTitle');
        document.getElementById('t2').classList.toggle('showTitle');
      }, 500);
    }, 1000);
}
