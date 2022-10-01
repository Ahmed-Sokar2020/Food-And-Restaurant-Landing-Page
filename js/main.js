
// let allButtons = document.querySelectorAll('.menu .list .btn');
// let img = document.querySelector('.row img');

// allButtons[0].addEventListener('click', function() {
//     allButtons[0].classList.add('active');
//     allButtons[1].classList.remove('active');
//     allButtons[2].classList.remove('active');
//     allButtons[3].classList.remove('active');
//     img.src = allButtons[0].getAttribute('data-src')
// })

// allButtons[1].addEventListener('click', function() {
//     allButtons[1].classList.add('active');
//     allButtons[0].classList.remove('active');
//     allButtons[2].classList.remove('active');
//     allButtons[3].classList.remove('active');

//     img.src = allButtons[1].getAttribute('data-src')
// })

// allButtons[2].addEventListener('click', function() {
//     allButtons[2].classList.add('active');
//     allButtons[0].classList.remove('active');
//     allButtons[1].classList.remove('active');
//     allButtons[3].classList.remove('active');
    
//     img.src = allButtons[2].getAttribute('data-src')
// })

// allButtons[3].addEventListener('click', function() {
//     allButtons[3].classList.add('active');
//     allButtons[0].classList.remove('active');
//     allButtons[1].classList.remove('active');
//     allButtons[2].classList.remove('active');

//     img.src = allButtons[3].getAttribute('data-src')
// })


// scroll To Top Button
let upButton = document.querySelector('.up');

window.onscroll = function() {
    this.scrollY >= 4000 ? upButton.classList.add('show') : upButton.classList.remove('show');
}

upButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

///////////////////////////////////////////////////////////
// Switch between Dark Mode and Light Mode

// Variables
let moon = document.querySelector('label svg.moon');
let sun = document.querySelector('label svg.sun');

// Events
moon.addEventListener('click', changeModeToDark);

sun.addEventListener('click', changeModeToLight);

// Functions
function changeModeToDark() {
    document.body.classList.add('dark');
}

function changeModeToLight() {
    document.body.classList.remove('dark');
}

//////////////////////////////////////////////////////////////
// menu-bar icon and navbar in small screens

// Variables
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// Events
menuBar.addEventListener('click', function () {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');

    window.onscroll = function() {
        menuBar.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    }
})




