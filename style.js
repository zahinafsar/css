	var navbtn=document.querySelector('.navbtn');
	navbtn.addEventListener("click", navtaggle);
    var nav = document.querySelector('.nav');
   if (innerWidth<500) {
    nav.style.transform = "translateX(" + (outerWidth) + "px)";
    }
function navtaggle() {
    if (nav.style.transform == "translateX(" + (outerWidth) + "px)") {
    nav.style.transform = "translateX(0px)";
    }else{
    var b = outerWidth;
    nav.style.transform = "translateX(" + (b) + "px)";
    }
}