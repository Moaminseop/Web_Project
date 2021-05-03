window.addEventListener("load", function(event){
  let content = document.getElementById('container');
  let clickCheck = false;
  const transition_el = document.querySelectorAll('.transition');

  content.addEventListener('mouseover', function(e){
    let target = e.target;
    if (target.id === "picture" || target.id === "text" || target.id === "video"){
        target.style.cursor = "pointer"
        if(!clickCheck){
          target.style.transform = "scale(1.2)"
          target.style.transition = "0.5s"
        }
    }
  });

  content.addEventListener('mouseout', function(e){
    let target = e.target;
    if(target.id === "picture" || target.id === "text" || target.id === "video"){
      if(!clickCheck){
        target.style.transform = "scale(1)"
        target.style.transition = "0.5s"
      }
    }
  });

  content.addEventListener('click', function(e){
    let target = e.target;
    if(target.id === "picture"){
      transition_el[0].classList.add('isActive-1');
      transition_el[1].classList.add('isActive-2');

      setTimeout(function(e){
        window.location.href = './picture.html'
      }, 700);

    }
    if(target.id === "text"){
      transition_el[0].classList.add('isActive');

      setTimeout(function(e){
        window.location.href = './text.html'
      }, 500);
    }

    if(target.id === "video"){
      transition_el[2].classList.add('isActive');

      setTimeout(function(e){
        window.location.href = './video.html'
      }, 500);
    }

  });

  content.addEventListener('transitionend', function(e){
    let target = e.target;
    if(target.id === "picture" || target.id === "text" || target.id === "video"){
      if(e.elapsedTime > 0.5){
        location.href = './picture.html'
      }
    }
  });

}, false);
