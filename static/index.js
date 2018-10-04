navbarChange()

document.onscroll = function() {navbarChange()};

function navbarChange() {
  var scrollTop = window.pageYOffset;

  if (scrollTop < 500) {
    var trans = scrollTop/500;
    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,'+trans+')';
    document.getElementById('nav').style.boxShadow = 'none';
    document.getElementById('nav').style.boxShadow = '0px 1px 10px white';
  }
  else {
    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,1)';
  }
  if (scrollTop > 500) {
    document.getElementById('nav').style.boxShadow = '0px 2px 2px grey';
  }
  var navLinks = document.getElementsByClassName('links');
  if (scrollTop < 200) {
    const redOri = 19;
    const greenOri = 14;
    const blueOri = 72;

    var a = scrollTop/200;

    var redNew = 100 - redOri * a;
    var greenNew = 100 - greenOri * a;
    var blueNew = 100 - blueOri * a;

    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'rgb('+redNew+'%,'+greenNew+'%,'+blueNew+'%)';
    }
  }
  else {
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'rgb(81%,86%,26%)';
    }
  }
}
