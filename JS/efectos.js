// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.opacity = 0.5;
  }
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    document.getElementById("Texto_Principal").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    document.getElementById("Texto_Principal").style.transition = "box-shadow 2s";
  }
  else {
    document.getElementById("navbar").style.opacity = 1;
    document.getElementById("Texto_Principal").style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.2)";
  }
}
