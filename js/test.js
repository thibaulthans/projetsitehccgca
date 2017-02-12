




function testScroll(ev){
  var elmt = document.querySelector(".navbar-default");
    if(window.pageYOffset<100){
      elmt.style.paddingTop="5px";
      elmt.style.paddingBottom="5px";
    }
    if(window.pageYOffset>100){
      elmt.style.paddingTop="0px";
      elmt.style.paddingBottom="0px";
    }
    if(window.pageYOffset>200){
      elmt.style.display="none";
    }
    if(window.pageYOffset<200){
      elmt.style.display="block";
    }
    document.querySelector(".navbar-default").style.WebkitTransition = "all 0.9s"; // Code for Safari 3.1 to 6.0
    document.getElementById(".navbar-default").style.transition = "all 0.9s";

}
window.onscroll=testScroll
