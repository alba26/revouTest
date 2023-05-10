var myApple = 30;
var yourApple = 50;

var firstNavigation = document.getElementById("titleLabel");
var submitButton = document.getElementById("submitButton");


console.log(firstNavigation.textContent);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var ageValue = document.getElementById("ageInput").value
    var fnameValue = document.getElementById("fnameInput").value
    var lnameValue = document.getElementById("lnameInput").value
    ageValidation(parseInt(ageValue))
    
})

function ageValidation(age) {
    if (age > 99) {
        alert("Lebih dari 99 tahun")
    } else {
        alert("Kurang dari 99 tahun")
    }
} 

function updateUI(fname,lname,age) {
    var fnameOutput = document.getElementById("fnameOutput")
    fnameOutput.textContent = fname
    var lnameOutput = document.getElementById("lnameOutput")
    lnameOutput.textContent = lname
    var ageOutput = document.getElementById("ageOutput")
    ageOutput.textContent = age
}


var slideIndex = 1;
setInterval(function() {
    // plusDivs(1);
  }, 1000);
  
function plusDivs(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    // index = 2
    const imgList = document.getElementsByClassName("slider");
    var i;
    if (index > imgList.length) { slideIndex = 1; }
    if (index < 1) { slideIndex = imgList.length; }
    for (i = 0; i < imgList.length; i++) {
      imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
  }