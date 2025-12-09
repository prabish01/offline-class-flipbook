document.getElementById("test").addEventListener("click", () => {
  window.open("../test-selection/index.html", "_self");
});
document.getElementById("test").addEventListener("touch", () => {
  window.open("../test-selection/index.html", "_self");
});
document.getElementById("flip").addEventListener("click", () => {
  window.open("../book-selection/index.html", "_self");
});
document.getElementById("flip").addEventListener("touch", () => {
  window.open("../book-selection/index.html", "_self");
});

document.getElementById("anima").addEventListener("click", () => {
  window.open("../animation-selection/index.html", "_self");
});
document.getElementById("anima").addEventListener("touch", () => {
  window.open("../animation-selection/index.html", "_self");
});
document.getElementById("worksheet").addEventListener("click", () => {
  window.open("../worksheet-selection/index.html", "_self");
});
document.getElementById("worksheet").addEventListener("touch", () => {
  window.open("../worksheet-selection/index.html", "_self");
});
document.getElementById("ans").addEventListener("click", () => {
  window.open("../Answer Key/Answer key Bk_1.pdf");
});

function exitscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
var elem = document.getElementById("introvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("books").style.display = "none";
});
