/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/* MENU SHOW */
/* Validata if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* MENU HIDDEN */
/* Validata if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ADD BLUR TO HEADER */
const blurHeader = () => {
    const header = document.getElementById('header')
    //When the scorll is greater than 50 view port height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* EMAIL JS */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_14ewcau', 'template_fpvfnm1', '#contact-form', 'A1Tz1WdeGdscbSkF_')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            // Clear input fields
            contactForm.reset()
        }, () =>{
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)
/* SHOW SCROLL UP */
const scorllUp = () => {
    const scorllUp = document.getElementById('scroll-up')
    //When the scroll is higher the 350 viewprt height, add the show-scroll class to the a tag eith the scrollup
    this.scrollY >= 350 ? scorllUp.classList.add('show-scroll')
    : scorllUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scorllUp)

// SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
        sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)