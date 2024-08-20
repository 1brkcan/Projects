const body = document.querySelector('body');

document.addEventListener('scroll', () =>{

    let adaptedScrollHeight = 0;

    window.scrollY < 0 ? adaptedScrollHeight = 0 : 
    (window.scrollY > 255 ? adaptedScrollHeight = 255 :
        adaptedScrollHeight = window.scrollY
    );

    body.style.background = `rgb(
    ${adaptedScrollHeight},
    ${adaptedScrollHeight},
    ${adaptedScrollHeight})`;

});



