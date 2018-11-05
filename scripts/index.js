/* Controlles that some code on resize only is done when window goes from being under 960 to over 960.*/
var wind = window.innerWidth;

navbarChange()
setBoxHeight()
controlFunc()

document.onscroll = controlFunc;

/* Function that tells navbarChange and imageParallax not to run on window < 960.
sets styles for elements on mobile that need this.*/
function controlFunc() {
  wind = window.innerWidth;
  if (window.innerWidth > 960){
    navbarChange()
    imageParallax()}
  else if (window.pageYOffset > window.innerHeight/2) {
    document.getElementById('opening').style.display = "none";
  }
  else {
    document.getElementById('nav').style.backgroundColor = 'rgba(255,255,255,0)';
    document.getElementById('nav').style.boxShadow = 'none';
    document.getElementById('centerLogo').style.top = '0';
    document.getElementById('imageBox').style.top = '-83px';
    document.getElementById('opening').style.display = "block";
  }
}

/* Makes front page image move together with scrolling, making a parallax effect.*/
function imageParallax() {
    var scrollTop = window.pageYOffset;
    if (scrollTop < window.innerHeight) {
    var t = scrollTop * (0.4) - 83;
    document.getElementById('imageBox').style.top = t+'px';
    var wh = window.innerHeight;
    var logoPos = -wh - t - 83;
    document.getElementById('centerLogo').style.top = logoPos+'px';
    }
}

/* Sets height for the boxes on the front page such that their height is equal
to the height of the window minus the navbar.*/
function setBoxHeight() {
  if (window.innerWidth > 960 && wind > 960){
    var wh = window.innerHeight - 83;
    var boxes = document.getElementsByClassName('boxContainer');
    var images = document.getElementsByClassName('imgSmall');
    if (wh <= 460){
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = '460px';
      }
      for (var i = 0; i < images.length; i++) {
        images[i].style.height = '330px';
      }
    }
    else {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = wh+'px';
      }
      for (var i = 0; i < images.length; i++) {
        images[i].style.height = '80%';
      }
    }
  }
  else {
    wind = window.innerWidth;
  }
}

/* Changes the navbars colors smoothly.*/
function navbarChange() {
  if (window.innerWidth > 960) {
    var wh = window.innerHeight;
    var whHalf = wh/2;
    var scrollTop = window.pageYOffset;
    var navLinks = document.getElementsByClassName('links');

    if (scrollTop > whHalf && scrollTop < wh) {
      var a = (scrollTop - whHalf)/whHalf;
      var b = a*0.5+0.5;

      /* Change the styling of the navbar and make it go from transparent to white.*/
      document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,'+a+')';
      document.getElementById("dd-c").style.backgroundColor = 'rgb(255,255,255,'+b+')';
      document.getElementById('nav').style.boxShadow = 'none';
      document.getElementById('nav').style.boxShadow = '0 1px 10px white';
      document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%,'+a+')';

      /* Calculate the new color and shadow for the text*/
      var redNew = 100 - 19 * a;
      var greenNew = 100 - 14 * a;
      var blueNew = 100 - 72 * a;
      var shadowNew = 1 - 2 * a;
      if (scrollTop >= 0.75*wh) {
        shadowNew = 0;
      }

      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'rgb('+redNew+'%,'+greenNew+'%,'+blueNew+'%)';
        navLinks[i].style.textShadow = '0px 0px '+shadowNew+'px #a2a2a2';
      }
    }
    /* Styling when scrolled passed front image.*/
    else if (scrollTop >= wh) {
      document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,1)';
      document.getElementById('nav').style.boxShadow = '0px 2px 2px grey';
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'rgb(81%,86%,26%)';
        navLinks[i].style.textShadow = '0px 0px 0px #a2a2a2';
      }
      document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%)'
      document.getElementById("dd-c").style.backgroundColor = 'rgb(255,255,255,1)';

    }
    /* Default styling for the navbar on no scroll (top of screen).*/
    else {
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'white';
        navLinks[i].style.textShadow = '0px 0px 1px #a2a2a2';
      }
      document.getElementById('nav').style.boxShadow = '0px 0px 10px white';
      document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,0)';
      document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%,0)';
      document.getElementById("dd-c").style.backgroundColor = 'rgb(255,255,255,0.5)';
    }
  }
}

var word = '';

function disco(event) {
  var x = event.keyCode;
  var y = String.fromCharCode(x);
  word = word + y;
  if (word === "DISCO" || word === "ETIKKEN") {
    word = '';
    var hei = setInterval(colorChange, 150);
  }
  else if (x == 28 || x == 8) {
    word = '';
  }
}

function colorChange() {
  /* Hentet kode for tilfeldig farge fra Chris Coyier ved https://css-tricks.com/snippets/javascript/random-hex-color/*/
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('logo').style.backgroundColor = '#'+randomColor;
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('opening').style.backgroundColor = '#'+randomColor;
}
