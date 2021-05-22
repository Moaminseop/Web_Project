window.addEventListener("load", function(){
    let prevButton = document.getElementById('prevButton');
    let nextButton = document.getElementById('nextButton');
    let booklist = document.querySelector('.booklist');

    prevButton.addEventListener('click', function(e){
        
        booklist.insertBefore(booklist.lastChild, booklist.firstChild);
        
    })

    nextButton.addEventListener('click', function(e){
        
        booklist.insertBefore(booklist.firstChild, booklist.lastChild);
        
    })

  }, false);