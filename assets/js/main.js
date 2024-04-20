/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Download CV

document.getElementById("downloadCvBtn").addEventListener("click", function(event) {
    // Prevent the default behavior of clicking on the link
    event.preventDefault();

    // URL of the file to download
    var fileUrl = "assets/img/curriculmVitae.pdf";

    // Creating an anchor element
    var downloadAnchor = document.createElement("a");
    downloadAnchor.href = fileUrl;

    // Set the download attribute to instruct the browser to download the file instead of opening it
    downloadAnchor.setAttribute("download", "");

    // Set the target="_blank" attribute to open the download in a new window/tab
    downloadAnchor.setAttribute("target", "_blank");

    // Add the anchor element to the body of the document
    document.body.appendChild(downloadAnchor);

    // Simulates clicking on anchor element to start downloading
    downloadAnchor.click();

    // Remove the anchor element from the document after a short delay to ensure downloading
    setTimeout(function() {
        document.body.removeChild(downloadAnchor);
    }, 500);
});
