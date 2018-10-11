// This block creates and inserts a footer
// Insert <div id="commonFooter"></div> wherever you want a footer
var footer_to_insert;
var footer_container;

footer_to_insert = document.createElement("footer");
footer_to_insert.class = "footer"

// This is the pure HTML to be inserted. Keep it within the ``;
footer_to_insert.innerHTML = `
<div class="footerRow">
  <div class="footerColumn">
    <p class="footerHeading">Adresse:</p>
    <a class="footerText" href="https://goo.gl/maps/vqRM1G1322J2">Olav Tryggvasons Gate 20, 7011 Trondheim</a>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Åpningstider:</p>
    <p class="footerText">10:00-18:00, mandag-lørdag</p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Kontakt:</p>
    <p class="footerText"><a class="footerText" href="tel:+4794836609">+47 948 36 609</a> /
    <a class="footerText" href="mailto:epost@midlertidig.no">epost@midlertidig.no</a></p>
  </div>

  <div class="footerColumn">
    <div class="socialIcons">
      <a href="https://www.facebook.com/etikken/">
      <img src="img/facebook.svg" alt="facebook" height="36"></a>

      <a href="https://www.instagram.com/etikken/">
      <img src="img/instagram.png" alt="instagram" height="36"></a>

      <a href="http://www.etikken.no/nettbutikk">
      <img src="img/etikken.png" alt="etikken" height="36"></a>
    </div>
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
    <a href="index.html"><img src="img/desktop/EtikkenPlain.png" id="logoSmall" alt="logo"></a>
  <ul class="mainBar">
    <li id="aboutNav"><a class="links" href="#about">OM OSS</a> <div class="underline"></div></li>
    <li id="valuesNav"><a class="links" href="#values">VÅRE VERDIER</a> <div class="underline"></div></li>
    <li id="productsNav"><a class="links" href="#products">PRODUKTER</a> <div class="underline"></div></li>
    <li id="webpageNav"><a class="links" target="_blank" href="http://www.etikken.no">NETTBUTIKK</a> <div class="underline"></div></li>
    <li id="contactNav"><a class="links" href="contact.html">KONTAKT</a> <div class="underline"></div></li>
  </ul>
  </div>
`;

menu_container = document.getElementById("nav");
menu_container.appendChild(menu_to_insert);
