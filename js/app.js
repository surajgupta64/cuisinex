function myFunction() {
  var x = document.getElementById("navbar-link");
  if (x.className === "nav-center") {
    x.className += " responsive";
  } else {
    x.className = "nav-center";
  }
}