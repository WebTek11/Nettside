navbarChange()

document.onscroll = function() {navbarChange(), imageParallax()};

function imageParallax() {
  var scrollTop = window.pageYOffset;
  if (scrollTop < window.innerHeight) {
  var t = scrollTop * (0.4) - 70;
  document.getElementById('frontImg').style.top = t+'px';
  }
}

function navbarChange() {
  var wh = window.innerHeight - 70;
  var whHalf = wh/2;
  var scrollTop = window.pageYOffset;

  var navLinks = document.getElementsByClassName('links');
  if (scrollTop > whHalf && scrollTop < wh) {

    var a = (scrollTop - whHalf)/whHalf;

    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,'+a+')';
    document.getElementById('nav').style.boxShadow = 'none';
    document.getElementById('nav').style.boxShadow = '0px 1px 10px white';

    const redOri = 19;
    const greenOri = 14;
    const blueOri = 72;

    var redNew = 100 - redOri * a;
    var greenNew = 100 - greenOri * a;
    var blueNew = 100 - blueOri * a;

    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'rgb('+redNew+'%,'+greenNew+'%,'+blueNew+'%)';
    }
  }
  else if (scrollTop >= wh) {
    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,1)';
    document.getElementById('nav').style.boxShadow = '0px 2px 2px grey';
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'rgb(81%,86%,26%)';
    }
  }
  else {
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'white';
    }
    document.getElementById('nav').style.boxShadow = '0px 0px 10px white';
    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,0)';
  }
}
