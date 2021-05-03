window.addEventListener("load", function(){
  const transition_el = document.querySelectorAll('.transition');

  setTimeout(function(){
    transition_el[0].classList.remove('isActive');
  }, 300);

  setTimeout(function(){
    transition_el[0].classList.remove('isActive-1');
  }, 300);

  setTimeout(function(){
    transition_el[1].classList.remove('isActive-2');
  }, 300);

}, false);
