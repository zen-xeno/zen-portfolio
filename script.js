// menu button
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('open')
};
// slider imges
let list = document.querySelector('.slider .list');
let item = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItem = item.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItem){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active + 1 < 0){
        active = lengthItem;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 3000);
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// navbar

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('open')
};