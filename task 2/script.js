var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.5);
        }, 500);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});

function myFunction1() {
    var x = document.getElementById('myDIV1');
    var y = document.getElementById('myDIV2');
    var z = document.getElementById('myDIV3');
    console.log("2018 is clicked");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
    }
    
  }
  function myFunction2() {
    var x = document.getElementById('myDIV1');
    var y = document.getElementById('myDIV2');
    var z = document.getElementById('myDIV3');
    console.log("2016 is clicked");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
    } else {
      y.style.display = "none";
    }
    
  }
  function myFunction3() {
    var x = document.getElementById('myDIV1');
    var y = document.getElementById('myDIV2');
    var z = document.getElementById('myDIV3');
    console.log("2012 is clicked");
    if (z.style.display === "none") {
      z.style.display = "block";
      y.style.display = "none";
      x.style.display = "none";
    } else {
      z.style.display = "none";
    }
    
  }
