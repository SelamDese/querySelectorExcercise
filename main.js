// Use JavaScript to obtain a reference to the first section with the 
// class of article_header and change its text with the textContent property to 
// "Welcome to the {insert your name here} blog"

let headerEl = document.querySelector('.article__header');
headerEl.textContent = "Welcome to the Selam blog" ;

// Use JavaScript to obtain a reference to all article__header elements
//  and change their classList property value to article__header important.

let headerE2 = document.querySelectorAll('.article__header');
for(let i=0 ; i<headerE2.length ; i++){
headerE2[i].classList.add('article__header' , 'important');}

// Obtain a reference the element with a class of dashed and remove it.

let dashedE1 = document.querySelector('.dashed');
dashedE1.classList.remove('dashed');

// Obtain a reference the element with a class of article_footer and 
// add the class of goldenrod it.
let footerE1 = document.querySelector('.article__footer');
footerE1.classList.add('goldenrod');
debugger