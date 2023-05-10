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
    // ageValidation(parseInt(ageValue))
    nameValidation(fnameValue, lnameValue)
    updateUI(fnameValue,lnameValue,ageValue)
})

function nameValidation(fname, lname) {
    if (fname != "" && lname != "") {
        alert("Nama tidak kosong")
    } else {
        alert("Nama kosong")
    }
}

function ageValidation(age) {
    if (age > 99) {
       alert("Lebih dari 99 tahun")
    } else {
        console.log("Kurang dari 99 tahun")
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