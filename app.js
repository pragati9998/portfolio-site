// Projects Data
const projects = [
    {
        title: "Real-Time Weather Insights: Interactive Data Dashboard",
        description: "A full-featured e-commerce platform built with React and Node.js",
        image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
        github: "https://github.com/pragati9998/Real-Time-Weather-Analytics-Dashboard",
        demo: "#"
    },

    {
        title: "Python-Powered Book Data Scraper",
        description: "This project is a simple web scraping application that extracts book titles and prices from Books to Scrape.",
        image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
        github: "https://github.com/pragati9998/My_scraping_project",
        demo: "#"
    }
    
];

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        const theme = prefersDarkScheme.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Generate Project Cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" class="btn secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.demo}" class="btn primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
}













// Mobile Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar Animation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(#home)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProjects();
});
