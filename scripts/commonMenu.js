var site_names = ["Om oss","Kontakt oss","Produkter","Verdier"];
var class_names = ["aboutNav","contactNav","productsNav","valuesNav"];

// This block creates and inserts a footer
// Insert <div id="commonFooter"></div> wherever you want a footer
var footer_to_insert;
var footer_container;


footer_to_insert = document.createElement("footer");
footer_to_insert.class = "footer"

// This is the pure HTML to be inserted. Keep it within the ``;
footer_to_insert.innerHTML = `
<div class="footerBox">
<div class="footerRow">
  <div class="footerColumn">
    <p class="footerHeading">Adresse</p>
    <p class="footerText"><a href="https://goo.gl/maps/vqRM1G1322J2" target="_blank">Olav Tryggvasons Gate 20 <br> 7011 Trondheim</a></p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Åpningstider</p>
    <p class="footerText">10:00-18:00<br>Mandag-Lørdag</p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Kontakt</p>
    <p class="footerText"><a class="footerText" href="tel:+4794836609">+47 948 36 609</a><br>
    <a class="footerText" href="mailto:post@etikken.no">post@etikken.no</a></p>
  </div>
</div>
    <div class="socialIcons">
      <a href="https://twitter.com/etikken">
      <img src="img/icon/twitter.svg" alt="twitter" height="40"></a>

      <a id="footerIconCenter" href="https://www.facebook.com/etikken/">
      <img src="img/icon/facebook.svg" alt="facebook" height="40"></a>

      <a href="https://www.instagram.com/etikken/">
      <img src="img/icon/instagram_color.svg" alt="instagram" height="40"></a>
    </div>
</div>
`;

footer_container = document.getElementById("commonFooter");
footer_container.appendChild(footer_to_insert);

// This block creates and inserts a navbar
// Insert <div class="navbar" id="nav"></div> wherever you want a navbar
var menu_to_insert;
var menu_container;

menu_to_insert = document.createElement("div");

// This is the pure HTML to be inserted. Keep it within the ``;
menu_to_insert.innerHTML = `
<div class="navbarInside">
  <a href="index.html" id="logoStore"><img src="img/originals/Etikken_logo/EtikkenPlain.png" id="logoSmall" alt="logo"></a>
  <a id="burger" class="navIcon" href="javascript:void(0);" onclick="responsiveNav()"><img src="img/icon/burger.svg" alt="icon"></a>
  <a id="cross" class="navIcon" href="javascript:void(0);" onclick="responsiveNav()"><img src="img/icon/cross.svg" alt="icon"></a>
  <ul class="mainBar">
    <li id="aboutNav"><a class="links" href="about.html">OM OSS</a> <a href="about.html" class="underline"></a></li>
    <ul class="dropdown">
      <li id="valuesNav"><a class="links" href="values.html">VÅRE VERDIER</a> <a href="values.html" class="underline"></a>
          <div class="dropdown-content" id="dd-c">
            <a href="values.html#link_verdi1" class="links">Økologisk bærekraft</a>
            <a href="values.html#link_verdi2" class="links">Rettferdig handel</a>
            <a href="values.html#link_verdi3" class="links">Dyrevelferd</a>
            <a href="values.html#link_verdi4" class="links">Helse</a>
            <a href="values.html#link_verdi5" class="links">Tilgjengelighet</a>
          </div>
      </li>
    </ul>
    <li id="productsNav"><a class="links" href="products.html">PRODUKTER</a> <a href="products.html" class="underline"></a></li>
    <li id="webpageNav"><a class="links" target="_blank" href="http://www.etikken.no">NETTBUTIKK</a> <a href="http://www.etikken.no" class="underline"></a></li>
    <li id="contactNav"><a class="links" href="contact.html">KONTAKT</a> <a href="contact.html" class="underline"></a></li>
  </ul>
</div>
`;

menu_container = document.getElementById("nav");
menu_container.appendChild(menu_to_insert);
var ypos = window.pageYOffset;
// Responsive navbar
function responsiveNav() {
  // Opens and closes the menu
  let i = document.getElementById("nav")
  if (i.className === "navbar") {
    i.className += "_responsive";
  }
  else {
    i.className = "navbar";
  }

  // Hides the footer when the menu is open
  let f = document.getElementById("commonFooter")
  if (i.className === "navbar_responsive") {
    f.style.display = "none";
  } else {
    f.style.display = "block";
  }
  // Hides the content when the menu is open
  let c = document.querySelector(".container")
  if (i.className === "navbar_responsive") {
    c.style.display = "none";
  } else {
    c.style.display = "block";
  }
  // Hides Logo Front Page, only on front page
  if (document.getElementById("logo")) {
    let g = document.getElementById("logo")
    if (i.className === "navbar_responsive") {
      g.style.display = "none";
      document.getElementById('frontImg').style.opacity = "0.7";
      document.getElementById('opening').style.display = "none";
    }
    else {
      g.style.display = "block";
      document.getElementById('frontImg').style.opacity = "1";
      document.getElementById('opening').style.display = "block";
    }
  }
  // Fixes empty spacing on resposive nav
  let z = document.body
  if (i.className === "navbar_responsive") {
    z.style.height = "100%";
  }
  else {
    z.style.height = "auto";
  }

  let y = document.getElementById("logoSmall")
  if (i.className === "navbar_responsive") {
    y.style.display = "block";
  }
  else {
    y.style.display = "none";
  }
  /* Fixes mixcolored navbarlinks*/
  let navColor = document.getElementsByClassName("links")
  document.getElementById("logoSmall").style.backgroundColor = "#CFDB42"
  if (i.className === "navbar_responsive" || document.title === "Etikken") {
    for (var p = 0; p < navColor.length; p++){
      navColor[p].style.color = "white";
    }
    if (document.title === "Etikken" && i.className === "navbar") {
      document.getElementById("logoSmall").style.backgroundColor = "rgba(255,255,255,0)"
    }
  }
  else {
    for (var p = 0; p < navColor.length; p++) {
      navColor[p].style.color = "#CFDB42";
      navColor[p].style.textShadow = "none";
    }
  }
  /* Setter stil på menyelementer til hvilken side du er på*/
  currentSite()
}

/* Makes navbar work with resizing of screen. Changing orientation on iPad for example*/
var win = window.innerWidth;

function setNavBarResize() {
  let s = document.getElementById("nav")
  if (window.innerWidth <= 960 && win > 960) {
    s.className = "navbar_responsive";
    responsiveNav();
    win = window.innerWidth;
    document.getElementById("logoSmall").style.display = "none";
  }
  else {
    s.className = "navbar_responsive";
    responsiveNav();
    s.className = "navbar";
    document.getElementById("logoSmall").style.display = "block";
    win = window.innerWidth;
  }
}

var hh = window.innerHeight*1.2;

function setImageHeight() {
  var img = document.getElementsByClassName("backImg");
  img[0].style.height = hh+'px';
  if (document.getElementById("centerLogo")) {
    document.getElementById("centerLogo").style.height = hh+'px';
  }
}

document.onresize = setImageHeight;

currentSite()

function currentSite() {
  for (var i = 0; i < site_names.length; i++) {
    if (site_names[i] === document.title) {
      var block = document.getElementById(class_names[i]);
      var underline = block.getElementsByClassName("underline");
      underline[0].style.transition = "none";
      underline[0].style.width = "calc(100% - 40px)";
      var link = block.getElementsByClassName("links")
      link[0].style.transition = "none";
      if (window.innerWidth > 960) {
        link[0].style.color = "rgb(76,142,57)";
      }
      else {
        link[0].style.color = "rgb(207,219,66)";
      }
    }
  }
}
