const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = ()=> {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

//show active menu when scrolling

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services-page')

    let scrollPos = window.scrollY
    console.log(scrollPos);

    // Add highlights class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos <1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }

    else if(window.innerWidth > 960 && scrollPos <2345){
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        // homeMenu.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth <960 && scrollPos <600) || elem){
        elem.classList.remove('highlight')
    }


}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('scroll', highlightMenu);

// Close Mobile Menu when clicking on a menu Item

// const hideMobileMenu = () =>{
//     const.menuBars = document.querySelector('.is-active')
//     if(window.innerWidth)
// }