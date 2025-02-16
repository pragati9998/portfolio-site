// Projects Data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with React and Node.js",
        image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        github: "#",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A weather forecasting application with interactive maps",
        image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
        github: "#",
        demo: "#"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media performance tracking",
        image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
        github: "#",
        demo: "#"
    },
    {
        title: "Fitness Tracker",
        description: "A fitness tracking app with workout planning features",
        image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
        github: "#",
        demo: "#"
    },
    {
        title: "Recipe Finder",
        description: "Recipe search and meal planning application",
        image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
        github: "#",
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

// Form Validation and Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (data.name.length < 2) {
        alert('Name must be at least 2 characters long');
        return;
    }

    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address');
        return;
    }

    if (data.message.length < 10) {
        alert('Message must be at least 10 characters long');
        return;
    }

    // Here you would typically send the form data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

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
