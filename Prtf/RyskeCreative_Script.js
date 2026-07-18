const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navigation-bar-mobile');
const close = document.getElementById('close');

hamburger.addEventListener('click', function(){
    navBar.style.display = "block";
});

close.addEventListener('click', function() {
    navBar.style.display = "none";
});
