// Selects the item clicked

var list = document.querySelectorAll('#list li');
var list2 = document.querySelectorAll('#list2 li');

for(var i = 0; i < list.length; i ++){
  list[i].addEventListener("click", function(){
    this.className = "current";
  });

  list2[i].addEventListener("click", function(){
    this.className = "current2";
  });
}


// How to mark only the current item?
