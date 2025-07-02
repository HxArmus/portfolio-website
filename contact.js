// Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        const themeText = themeToggle.querySelector('span');
        const html = document.documentElement;

        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
                themeText.textContent = 'Light Mode';
            } else {
                themeIcon.className = 'fas fa-moon';
                themeText.textContent = 'Dark Mode';
            }
        }

        // Form Validation
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Reset all errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error', 'success');
            });

            // Validate each field
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                name.parentElement.classList.add('error');
                isValid = false;
            } else {
                name.parentElement.classList.add('success');
            }

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.parentElement.classList.add('error');
                isValid = false;
            } else {
                email.parentElement.classList.add('success');
            }

            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                subject.parentElement.classList.add('error');
                isValid = false;
            } else {
                subject.parentElement.classList.add('success');
            }

            const message = document.getElementById('message');
            if (!message.value.trim()) {
                message.parentElement.classList.add('error');
                isValid = false;
            } else {
                message.parentElement.classList.add('success');
            }

            if (isValid) {
                // Simulate form submission
                setTimeout(() => {
                    contactForm.reset();
                    successMessage.style.display = 'block';
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                    
                    // Reset success states
                    document.querySelectorAll('.form-group').forEach(group => {
                        group.classList.remove('success');
                    });
                }, 1000);
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate contact cards on scroll
        const contactCards = document.querySelectorAll('.contact-card');
        
        const animateCards = () => {
            contactCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        };
        
        // Run animation when section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCards();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(document.querySelector('.contact-section'));