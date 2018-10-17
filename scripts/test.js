function responsiveNav() {
  let i = document.getElementById("nav")
  if (i.className === "navbar") {
    i.className += "_responsive";
  }
  else {
    i.className = "navbar"
  }
}
