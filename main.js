function product(){
  window.location = "index2.html";
  console.log("products page");
}
function contact(){
  window.location = "index3.html";
  console.log("contact page");
}
function home(){
  window.location = "index.html";
  console.log("home page");
}

window.addEventListener("scroll", function () {
  let text = document.querySelector(".floattext");
  let scrollPosition = window.scrollY;
  let switchPoint = 300; // Adjust this value as needed

  if (scrollPosition > switchPoint) {
      text.style.position = "relative";
      text.style.top = "auto";
      text.style.left = "auto";
      text.style.transform = "none";
  } else {
      text.style.position = "fixed";
      text.style.top = "50%";
      text.style.left = "50%";
      text.style.transform = "translate(-50%, -50%)";
  }
});
