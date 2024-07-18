document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Function to add active class to nav links
    const addActiveClass = (link) => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    };
  
    // Add click event to nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        addActiveClass(this);
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 56,
          behavior: 'smooth'
        });
      });
    });
  
    // Add scroll event to window
    window.addEventListener('scroll', function() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
  