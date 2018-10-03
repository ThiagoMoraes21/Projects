function testFunction() {
  document.querySelector('#v_menu').classList.toggle('hide_v_menu');
  document.querySelector('#v_menu').classList.toggle('call_v_menu');
  console.log('yep called!');
  document.querySelector('#nav').classList.toggle('close_button');
  document.querySelector('#line-1').classList.toggle('lin-1');
  document.querySelector('#line-1').classList.toggle('animate1');
  document.querySelector('#line-2').classList.toggle('lin-2');
  document.querySelector('#line-2').classList.toggle('animate2');
  document.querySelector('#line-3').classList.toggle('lin-3');
  document.querySelector('#line-3').classList.toggle('animate3');
}
