navbarChange()
setBoxHeight()

document.onscroll = function() {navbarChange(), imageParallax()};

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

function setBoxHeight() {
  var wh = window.innerHeight - 83;
  var boxes = document.getElementsByClassName('boxContainer');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.height = wh+'px';
  }
}


function navbarChange() {
  var wh = window.innerHeight;
  var whHalf = wh/2;
  var scrollTop = window.pageYOffset;

  var navLinks = document.getElementsByClassName('links');
  if (scrollTop > whHalf && scrollTop < wh) {

    var a = (scrollTop - whHalf)/whHalf;

    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,'+a+')';
    document.getElementById('nav').style.boxShadow = 'none';
    document.getElementById('nav').style.boxShadow = '0px 1px 10px white';

    document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%,'+a+')';

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
    document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%)'
  }
  else {
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'white';
    }
    document.getElementById('nav').style.boxShadow = '0px 0px 10px white';
    document.getElementById('nav').style.backgroundColor = 'rgb(255,255,255,0)';
    document.getElementById('logoSmall').style.backgroundColor = 'rgb(81%,86%,26%,0)';
  }
}
