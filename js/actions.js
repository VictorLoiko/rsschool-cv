document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.navbar a').forEach( link => {
    link.onclick = (e) => {
      if (document.querySelector('.navbar .active')) {
        document.querySelector('.navbar .active').classList.remove('active');
      }
      link.classList.add("active");
      link.parentNode.classList.remove("responsive");
      // document.getElementById("header").style.top = "-45px";
    };
  })
});

// var prevScrollPos = window.pageYOffset;
// document.addEventListener("wheel", function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-45px";
//   }
//   prevScrollPos = currentScrollPos;
// });

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.navbar .dropdown').onclick = (e) => {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
});
