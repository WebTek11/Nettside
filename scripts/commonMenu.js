
/* Lager og setter inn en footer. Sett inn <div id="commonFooter"></div>
der man ønsker footer */
var footer_to_insert;
var footer_container;


footer_to_insert = document.createElement("footer");
footer_to_insert.class = "footer"

/* HTML som skal settes inn, hold den mellom ``-tegnene */
footer_to_insert.innerHTML = `
<div class="footerBox">
<div class="footerRow">
  <div class="footerColumn">
    <p class="footerHeading">Adresse</p>
    <p class="footerText"><a href="https://goo.gl/maps/vqRM1G1322J2" target="_blank">Olav Tryggvasons Gate 20 <br> 7011 Trondheim</a></p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Åpningstider</p>
    <p class="footerText">mandag-lørdag<br>10:00-18:00</p>
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

/* Lager og setter inn en navbar. Sett inn <div class="navbar" id="nav"></div>
der man ønsker navbar */
var menu_to_insert;
var menu_container;

menu_to_insert = document.createElement("div");

/* HTML som skal settes inn, hold den mellom ``-tegnene */
menu_to_insert.innerHTML = `
<div class="navbarInside">
  <a href="index.html" id="logoStore"><img src="img/originals/Etikken_logo/etikken_plain.png" id="logoSmall" alt="logo"></a>
  <a id="burger" class="navIcon" href="javascript:responsiveNav()"><img src="img/icon/burger.svg" alt="icon"></a>
  <a id="cross" class="navIcon" href="javascript:responsiveNav()"><img src="img/icon/cross.svg" alt="icon"></a>
  <ul class="mainBar">
    <li id="aboutNav"><a class="links" href="about.html">OM OSS</a> <a href="about.html" class="underline"></a></li>
    <ul class="dropdown" id="valDd">
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
    <ul class="dropdown" id="prodDd">
      <li id="productsNav"><a class="links" href="products.html">PRODUKTER</a> <a href="products.html" class="underline"></a>
          <div class="dropdown-content" id="dd-c2">
            <a href="products.html#link_product1" class="links">Hjemmelaget mel</a>
            <a href="products.html#link_product2" class="links">Alt i løsvekt</a>
            <a href="products.html#link_product3" class="links">Frø og spirer</a>
            <a href="products.html#link_product4" class="links">Jackfruit</a>
          </div>
      </li>
    </ul>
    <li id="webpageNav"><a class="links" target="_blank" href="http://www.etikken.no">NETTBUTIKK</a> <a href="http://www.etikken.no" class="underline"></a></li>
    <li id="contactNav"><a class="links" href="contact.html">KONTAKT</a> <a href="contact.html" class="underline"></a></li>
  </ul>
</div>
`;

menu_container = document.getElementById("nav");
menu_container.appendChild(menu_to_insert);
var ypos = window.pageYOffset;

/* Responsiv navbar */
function responsiveNav() {
  /* Funksjonen åpner og lukker menyen */
  let i = document.getElementById("nav")
  if (i.className === "navbar") {
    i.className += "_responsive";
  }
  else {
    i.className = "navbar";
  }

  /* Skjuler footer når menyen er open */
  let f = document.getElementById("commonFooter")
  if (i.className === "navbar_responsive") {
    f.style.display = "none";
  } else {
    f.style.display = "block";
  }

  /* Skjuler innholdet når menyen er åpen */
  let c = document.querySelector(".container")
  if (i.className === "navbar_responsive") {
    c.style.display = "none";
  } else {
    c.style.display = "block";
  }

  /* Skjuler logo og åpningstider på fremsiden */
  if (document.title === "Etikken") {
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

  /* Fikser tomrom på responsiv navbar */
  let z = document.body
  if (i.className === "navbar_responsive") {
    z.style.height = "100%";
    z.style.maxHeight = "100%";
  }
  else {
    z.style.height = "auto";
    z.style.maxHeight = "auto";
  }

  let y = document.getElementById("logoSmall")
  if (i.className === "navbar_responsive") {
    y.style.display = "block";
  }
  else {
    y.style.display = "none";
  }

  /* Fikser flerfargede navbar-linker */
  let navColor = document.getElementsByClassName("links")
  document.getElementById("logoSmall").style.backgroundColor = "#CFDB42"
  if (i.className === "navbar_responsive" || document.title === "Etikken") {
    for (var p = 0; p < navColor.length; p++){
      navColor[p].style.color = "rgb(255,255,255)";
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

/* Variabler som hjelper med å tracke om vinduet går fra over/under 960px til
under/over 960px.*/
var win = window.innerWidth;
var resolutionChangeCheck = 1;

/* Sørger for at navbar fungerer når størrelsen og retning på skjermen endres.*/
function setNavBarResize() {
  let s = document.getElementById("nav")
  if (window.innerWidth <= 960 && win > 960) {
    s.className = "navbar_responsive";
    responsiveNav();
    win = window.innerWidth;
    document.getElementById("logoSmall").style.display = "none";
    resolutionChangeCheck = 1;
  }
  else if (window.innerWidth > 960 && resolutionChangeCheck){
    s.className = "navbar_responsive";
    responsiveNav();
    s.className = "navbar";
    win = window.innerWidth;
    if (win > 960) {
      document.getElementById("logoSmall").style.display = "block";
    }
    resolutionChangeCheck = 0;
  }
}

var site_names = ["Om oss","Kontakt oss","Produkter","Verdier"];
var class_names = ["aboutNav","contactNav","productsNav","valuesNav"];
currentSite()

/* Setter styling på siden du er inne på.*/
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
