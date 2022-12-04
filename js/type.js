window.onscroll = function() {scrolledPage()};

function scrolledPage() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function toggleMap() {
  
  var map = document.getElementById("toggleMap");
 
  if (map.style.display === "none") {
    map.style.display = "block";
  } else {
    map.style.display = "none";
  } 
}

function hideDiv(){

  var hideDiv = document.getElementById("hide")
  
  if (hideDiv.style.display === "none") {
    hideDiv.style.display = "block";
  } else {
    hideDiv.style.display = "none";
  }

}

