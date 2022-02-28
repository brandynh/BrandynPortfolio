const resumeToggle = document.querySelector('.toggle');
const bLogo = document.querySelector('.bLogo');
const menuList = document.querySelector('.menuList');

resumeToggle.addEventListener('click', () => {
    resumeToggle.classList.toggle('active')
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("card");
    if (n > x.length) {slideIndex =1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

// Nav functions for opening and closing nav menu

function openNav() {
    document.getElementById("mySideNav").style.width = "40%";
    document.getElementById("sideMenuToggle").style.display = "none";
    document.body.style.backgroundColor = "black";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("sideMenuToggle").style.display = "flex";
    document.body.style.backgroundColor = "black";
}