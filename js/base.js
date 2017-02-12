
/** buton télécharger **/

function l(ev){
document.querySelector("html").classList.add('jsun');

var fileInput1  = document.querySelector( "#input-fileun" ),
    button1    = document.querySelector( "#input-file-triggerun" ),
    the_return1 = document.querySelector("#file-returnun");

button1.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput1.focus();
    }
});
button1.addEventListener( "click", function( event ) {
   fileInput1.focus();
   return false;
});
fileInput1.addEventListener( "change", function( event ) {
    the_return1.innerHTML = this.value;
});

document.querySelector("html").classList.add('jsdeux');

var fileInput2  = document.querySelector( "#input-filedeux" ),
    button2     = document.querySelector( "#input-file-triggerdeux" ),
    the_return2 = document.querySelector("#file-returndeux");

button2.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput2.focus();
    }
});
button2.addEventListener( "click", function( event ) {
   fileInput2.focus();
   return false;
});
fileInput2.addEventListener( "change", function( event ) {
    the_return2.innerHTML = this.value;
});

}






function testScroll(ev){
  var elmt = document.querySelector(".navbar-default");
    if(window.pageYOffset<100){
      elmt.style.paddingTop="7px";
      elmt.style.paddingBottom="7px";
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
    document.querySelector(".navbar-default").style.WebkitTransition = "all 0.7s"; // Code for Safari 3.1 to 6.0
    document.getElementById(".navbar-default").style.transition = "all 0.7s";

}
window.onscroll=testScroll
