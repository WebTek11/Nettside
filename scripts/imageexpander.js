var curImg = 0;
var pics = document.getElementsByClassName('original');

function imgexpand(name) {
  if (window.innerWidth > 960) {
    var num = name + 1;
    var hei = num.toString();
    var picName = document.getElementById("original"+hei).getAttribute("data-src")
    document.getElementById("original"+hei).setAttribute("src",picName)
    curImg = name;
    document.getElementById("imgexpand").style.display = "block";
    for (var i = 0; i < pics.length; i++) {
      if (i==name) {
        pics[i].style.display="block";
      }
      else {
        pics[i].style.display="none";
      }
    }
  }
  else {
    document.getElementById("imgexpand").style.display = "none";
  }
}

function imageclose() {
  document.getElementById("imgexpand").style.display = "none";
  for (var i = 0; i < pics.length; i++) {
    pics[i].style.display="none";
  }
}

function imageNext(value) {
  var numPics = pics.length;
  var newVal = curImg + value;
  if (newVal === numPics) {
    newVal = 0;
  }
  else if (newVal === -1) {
    newVal = numPics - 1;
  }
  curImg = newVal;
  imgexpand(curImg)
}
