//this button will enable the user to get back on top of the page after scrolling

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".diamond").addEventListener("click", function() {
    document.querySelector(".top").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  if (scroll > 938) {
    document.querySelector("#diamondshape").classList.add("show");
    document.querySelector("#diamondshape").classList.remove("noshow");
  }
  if (scroll < 938) {
    document.querySelector("#diamondshape").classList.add("noshow");
    document.querySelector("#diamondshape").classList.remove("show");
  }
  console.log(scroll);
});
