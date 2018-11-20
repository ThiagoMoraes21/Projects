// Mark the choseen item
var list = document.querySelectorAll('#list li');
var list2 = document.querySelectorAll('#list2 li');

for(var i = 0; i < list.length; i ++){
  list[i].addEventListener("click", function(){
    // mark the selected item
    this.classList.toggle("current");
    unmark(list, this);
  });

  list2[i].addEventListener("click", function(){
    // mark the selected item
    this.className = "current2";
    unmark(list2, this);
  });
}

// check if there is another item marked, if yes, unmark
function unmark(el, marked){
  for(var j = 0; j < el.length; j++){
    if(el[j].className === "current" && el[j] != marked){
      el[j].classList.remove("current");

    } else if(el[j].className === "current2" && el[j] != marked){
      el[j].classList.remove("current2");
    }
  }
}
