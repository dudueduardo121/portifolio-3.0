/* menu show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/* nav link ative */
const navlink = document.querySelectorAll('.nav_link')

function linkAction(){
    /* active link */
    navlink.forEach(i => i.classList.remove('active'))
    this.classList.add('active')

    /* remove menu mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(i => i.addEventListener('click', linkAction))


/* scroll aos */
AOS.init();