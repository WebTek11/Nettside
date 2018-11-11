/* Kontrollerer at noe kode på reskalering bare gjøres når vinduet går fra å
være under 960 px til over 960 */
var wind = window.innerWidth;

navbarChange()
setBoxHeight()
controlFunc()

document.onscroll = controlFunc;

/* Function som gjør at navbarChange og imageParallax ikke kjøres på vinduer
under 960 px. Setter styles for elementer på mobiler som trenger dette */
function controlFunc() {
  wind = window.innerWidth;
  if (window.innerWidth > 960){
    navbarChange()
    imageParallax()}

  else {
    document.getElementById('nav').style.backgroundColor = 'rgba(255,255,255,0)';
    document.getElementById('nav').style.boxShadow = 'none';
    document.getElementById('centerLogo').style.top = '0';
    document.getElementById('imageBox').style.top = '-83px';
    document.getElementById('opening').style.display = "block";

    /* Gjemmer Åpningstiderboksen når du har scrollet nedover siden, slik at den ikke
    dukker opp i mellomrommet mellom tekstboksene og footeren. Gjemmer boksen også
    når hamburgermenyen er åpen */
    if (window.scrollY > 350) {
      document.getElementById('opening').style.display = "none";
    }
    else if (document.getElementsByClassName("navbar_responsive").length > 0) {
      document.getElementById('opening').style.display = "none";
    }
  }
}

/* Lar forsidebildet bevege seg sammen med scrolling slik at det blir en
parallaxeffekt */
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

/* Setter høyde for boksene på forsiden slik at høyden blir lik høyden til
vinduet minus navbar (ned til 460px og opp til 1000px hvor en høyde i stedet fastsettes) */
function setBoxHeight() {
  if (window.innerWidth > 960 && wind > 960){
    var wh = window.innerHeight - 83;
    var boxes = document.getElementsByClassName('boxContainer');
    if (wh <= 460){
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = '460px';
      }
    }
    else if (wh > 1000){
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = '1000px';
      }
    }
    else {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = wh+'px';
      }
    }
  }
  else {
    wind = window.innerWidth;
  }
}

/* Endrer fargene til navbarelementer */
function navbarChange() {
  if (window.innerWidth > 960) {
    var wh = window.innerHeight;
    var whHalf = wh/2;
    var scrollTop = window.pageYOffset;
    var navLinks = document.getElementsByClassName('links');

    /* Styling mellom havlparten av fremsidebildet er scrollet forbi, til hele bildet
    er scrollet forbi. */
    if (scrollTop > whHalf && scrollTop < wh) {
      /* Variabler som avhenger av scrolleavstand og deretter styrer fargeendring*/
      var a = (scrollTop - whHalf) / whHalf;
      var b = a * 0.5 + 0.5;
      var c = 70 * a + 185;

      /* Endrer styling av navbar og endrer den fra transparent til hvit */
      document.getElementById('nav').style.backgroundColor = 'rgba(255,255,255,'+a+')';
      document.getElementById("dd-c").style.backgroundColor = 'rgba('+c+','+c+','+c+','+b+')';
      document.getElementById("dd-c2").style.backgroundColor = 'rgba('+c+','+c+','+c+','+b+')';
      document.getElementById('nav').style.boxShadow = 'none';
      document.getElementById('nav').style.boxShadow = '0 1px 10px rgb(255,255,255)';
      document.getElementById('logoSmall').style.backgroundColor = 'rgba(81%,86%,26%,'+a+')';

      /* Kalkulerer ny farge og skygge for tekst. Verdier i prosent for farge og
      fra 1 til 0 for skygge. */
      var redNew = 100 - 19 * a;
      var greenNew = 100 - 14 * a;
      var blueNew = 100 - 74 * a;
      var shadowNew = 1 - 2 * a;
      if (scrollTop >= 0.75*wh) {
        shadowNew = 0;
      }

      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'rgb('+redNew+'%,'+greenNew+'%,'+blueNew+'%)';
        navLinks[i].style.textShadow = '0px 0px '+shadowNew+'px #a2a2a2';
      }
    }

    /* Styling når man har scrollet forbi forsidebildet */
    else if (scrollTop >= wh) {
      document.getElementById('nav').style.backgroundColor = 'rgba(255,255,255,1)';
      document.getElementById('nav').style.boxShadow = '0px 2px 2px rgb(128,128,128)';
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'rgb(81%,86%,26%)';
        navLinks[i].style.textShadow = '0px 0px 0px #a2a2a2';
      }
      document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%)'
      document.getElementById("dd-c").style.backgroundColor = 'rgba(255,255,255,1)';
      document.getElementById("dd-c2").style.backgroundColor = 'rgba(255,255,255,1)';

    }

    /* Standard styling for navbar ved ingen scrolling (toppen av siden) */
    else {
      for (i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'rgb(255,255,255)';
        navLinks[i].style.textShadow = '0px 0px 1px #a2a2a2';
      }
      document.getElementById('nav').style.boxShadow = '0px 0px 10px rgb(255,255,255)';
      document.getElementById('nav').style.backgroundColor = 'rgba(255,255,255,0)';
      document.getElementById('logoSmall').style.backgroundColor = 'rgba(81%,86%,26%,0)';
      document.getElementById("dd-c").style.backgroundColor = 'rgba(185,185,185,0.5)';
      document.getElementById("dd-c2").style.backgroundColor = 'rgba(185,185,185,0.5)';
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
  /* Starter ordet på ny dersom backspace eller esc blir trykket */
  else if (x == 27 || x == 8) {
    word = '';
  }
}

function colorChange() {
  /* Hentet kode for tilfeldig farge fra Chris Coyier
  ved https://css-tricks.com/snippets/javascript/random-hex-color/ */
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('logo').style.backgroundColor = '#'+randomColor;
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('opening').style.backgroundColor = '#'+randomColor;
}
