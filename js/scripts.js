//business logic
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  slideIndex += n;
  showDivs()
}

function showDivs() {

  var n = slideIndex;
    // alert(n)  ;
    if(n==='' || n==='0' || n==="undefined")
    n=1;
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//user interface
$(document).ready(function() {
  $("button#rw2").submit(function(event) {
    event.preventDefault();
  });
});
