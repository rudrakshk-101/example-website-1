upscrol=document.querySelector('.upscrol');
var elmnt = document.getElementById("wholec");

var x=250;
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;    
    if(scrollPosition>1100)
    {
        upscrol.classList.add('upclicked')
    }
    else{
        upscrol.classList.remove('upclicked')
    }
    });

    // upscrol.addEventListener('click' function()
    // {

    // })