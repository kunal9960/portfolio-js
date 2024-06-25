function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const contactSection = document.getElementById('contact');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight * 0.92) {
        contactSection.classList.add('triggered');
    } else {
        contactSection.classList.remove('triggered');
    }
}

checkScroll();

document.addEventListener('scroll', checkScroll);

window.addEventListener('scroll', checkScroll);
checkScroll();

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateProjectCards() {
    const projectCards = document.querySelectorAll('.projects .color-container');
    projectCards.forEach(card => {
        card.classList.add('fade-up');
    });
}

function handleProjectsScroll() {
    const projectsSection = document.getElementById('projects');
    if (isElementInViewport(projectsSection)) {
        animateProjectCards();
        window.removeEventListener('scroll', handleProjectsScroll);
    }
}

window.addEventListener('scroll', handleProjectsScroll);

handleProjectsScroll();

function showProjects(category) {
    const projectSections = document.querySelectorAll('.projects');
    projectSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    const navLinks = document.querySelectorAll('.project1 a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const clickedLink = document.querySelector('.project1 a[href="#projects"][onclick="showProjects(\'' + category + '\')"]');
    if (clickedLink) {
        clickedLink.classList.add('active');
    }

    animateProjectCards();
}

document.addEventListener('DOMContentLoaded', function() {
    showProjects('python');
    const pythonLink = document.querySelector('.project1 a[href="#projects"][onclick="showProjects(\'python\')"]');
    if (pythonLink) {
        pythonLink.classList.add('active');
    }
});
