$("#about-me-btn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#navbar").offset().top
    },
    2000
  );
});

window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
