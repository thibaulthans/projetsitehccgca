
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
  var elmt1 = document.querySelector(".div_milieu_s");
  var elmt2 = document.querySelector(".div_a_s");
  var elmt3 = document.querySelector(".div_g_s");
  var elmt4 = document.querySelector(".style_logo_s");
  var elmt5 = document.querySelector(".navbar-brand");
    if(window.pageYOffset<10){
      elmt.style.paddingTop="10px";
      elmt.style.paddingBottom="10px";
      elmt5.style.paddingLeft="10px";
    }
    if(window.pageYOffset>10){
      elmt.style.paddingTop="0px";
      elmt.style.paddingBottom="0px";
      elmt5.style.paddingLeft="4px";
    }
    document.querySelector(".navbar-default").style.WebkitTransition = "all 0.5s";
    elmt5.style.WebkitTransition = "all 0.5s";

}
window.onscroll=testScroll
