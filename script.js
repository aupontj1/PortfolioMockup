let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

let typed = new Typed('.multiple', {
    strings: ['Front-End Development', 'Web Design', 'Web Technologies'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});