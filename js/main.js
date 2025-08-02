
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add active class to current section and close mobile menu when item clicked
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) { // Only for mobile view
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
});
  // // Select all nav links
  // const navLinks = document.querySelectorAll('.nav-link');

  // // Add click event to update active class
  // navLinks.forEach(link => {
  //   link.addEventListener('click', () => {
  //     // Remove active class from all links
  //     navLinks.forEach(nav => nav.classList.remove('active'));

  //     // Add active class to the clicked link
  //     link.classList.add('active');
  //   });
  // });

  document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      projects.forEach(project => {
        if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
          project.style.display = 'flex';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});

  // // Add scroll reveal animations
  //       document.addEventListener('DOMContentLoaded', function() {
  //           // Create more floating elements dynamically
  //           const floatingContainer = document.querySelector('.floating-elements');
  //           for (let i = 0; i < 5; i++) {
  //               const element = document.createElement('div');
  //               element.className = 'floating-element';
  //               const size = Math.random() * 150 + 50;
  //               element.style.width = `${size}px`;
  //               element.style.height = `${size}px`;
  //               element.style.top = `${Math.random() * 100}%`;
  //               element.style.left = `${Math.random() * 100}%`;
  //               element.style.animationDuration = `${Math.random() * 15 + 10}s`;
  //               element.style.animationDelay = `${Math.random() * 5}s`;
  //               floatingContainer.appendChild(element);
  //           }
            
  //           // Smooth scroll for anchor links
  //           document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //               anchor.addEventListener('click', function(e) {
  //                   e.preventDefault();
  //                   document.querySelector(this.getAttribute('href')).scrollIntoView({
  //                       behavior: 'smooth'
  //                   });
  //               });
  //           });
  //       });