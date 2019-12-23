$(document).ready(function() {
  // your code
  var window = $(window);
})


function sidenavOpen() {
  document.querySelector(".side-nav").style["clip-path"] = "circle(100%)";
  document.querySelector(".side-nav").style.visibility = "visible";
  document.querySelector(".body").style.overflow = "hidden";
  $(".content-wrapper").addClass("side-block");

}
function sidenavclose() {
  document.querySelector(".side-nav").style.visibility = "hidden";
  document.querySelector(".side-nav").style["clip-path"] = "circle(0%)";
  document.querySelector(".body").style.overflow = "auto";
  $(".content-wrapper").removeClass("side-block"); 
}