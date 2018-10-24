function imgexpand(name) {
    document.getElementById("imgexpand").style.display = "block";
    var pics = document.getElementsByClassName('original');
    for (var i = 0; i < pics.length; i++) {
      if (i==name) {
        pics[i].style.display="block";
      }
      else {
        pics[i].style.display="none";
      }
    }
}


function imageclose() {
  document.getElementById("imgexpand").style.display = "none";
  var pics = document.getElementsByClassName('original');
  for (var i = 0; i < pics.length; i++) {
    pics[i].style.display="none";
  }

}
