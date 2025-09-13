// NAV
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

// SHOW MENU 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
// HIDE MENU
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

const navLinks = document.querySelectorAll(".nav-link")
function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLinks.forEach(link => link.addEventListener('click', linkAction))


// HEADER SHADOW
function shadowHeader() {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader)

// EMAIL

const contactForm = document.getElementById("contact-form")
const contactMessage = document.getElementById("content-message")

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_hyps4bc', 'template_u63fonm', contactForm, '3glgPU4Q6tWdWv6sY')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

// SCROLL TO TOP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('.section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionID = current.getAttribute('id')
        const sectionsClass = document.querySelectorAll('.nav-menu a[href*=' + sectionID + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.forEach(link => link.classList.add('active-link'))
        } else {
            sectionsClass.forEach(link => link.classList.remove('active-link'))
        }
    })
}

window.addEventListener('scroll', scrollActive)
// CHANGE THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ANIMATIONS
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true    //for animation repeat
});

sr.reveal(`.home-prefil, .about-image, .contact-mail, .section-title-2`, { origin: 'right' })
sr.reveal(`.home-name, .home-info, .about-container, .section-title-1, .about-info, .contact-social, .contact-data`, { origin: 'left' })
sr.reveal(`.education-card, .services-card, .project-card`, { interval: 100 })

