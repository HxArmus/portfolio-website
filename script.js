// Initialize particles.js
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00D1CD"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00D1CD",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        
        // Typewriter effect
        const text = "Computer Science undergrad blending technical skills with creative design. I build Android apps with 30% fewer crashes and design interfaces that users love. When not coding, you'll find me writing poetry or analyzing cybersecurity trends.";
        const typedText = document.getElementById('typed-text');
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typedText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        // Start animations when section is in view
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        aboutObserver.observe(document.querySelector('.about'));
        
        // 3D avatar rotation on mouse move
        const avatar = document.querySelector('spline-viewer');
        document.addEventListener('mousemove', (e) => {
            if (!avatar) return;
            
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            avatar.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Animate timeline items on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
        
        // Expand/collapse cards on click
        const timelineCards = document.querySelectorAll('.timeline-card');
        
        timelineCards.forEach(card => {
            card.addEventListener('click', () => {
                // Close all other open cards
                timelineCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
                
                // Toggle current card
                card.classList.toggle('active');
            });
        });
        
        // Optional: Auto-expand first item
        if (timelineCards.length > 0) {
            timelineCards[0].classList.add('active');
        }
        
        // 3D tilt effect for experience cards
        const cards = document.querySelectorAll('.experience-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                
                const centerX = card.offsetWidth / 2;
                const centerY = card.offsetHeight / 2;
                
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                card.style.transform = `
                    translateY(-10px)
                    rotateX(${angleX}deg)
                    rotateY(${angleY}deg)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
            });
        });
        
        // Create floating particles
        function createParticles() {
            const colors = ['#00D1CD', '#0A2463', '#FF3E41'];
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.background = color;
                particle.style.animation = `
                    float ${duration}s ease-in-out ${delay}s infinite
                `;
                
                document.body.appendChild(particle);
            }
        }
        
        createParticles();
        
        // Create floating particles for project showcase
        function createProjectParticles() {
            const container = document.querySelector('.project-showcase');
            const colors = ['#00D1CD', '#0A2463', '#FF3E41'];
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 8 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const delay = Math.random() * 5;
                const duration = Math.random() * 20 + 10;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.background = color;
                particle.style.opacity = Math.random() * 0.4 + 0.1;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                particle.style.zIndex = '-1';
                
                container.appendChild(particle);
            }
        }
        
        createProjectParticles();
        
        // Lazy load GIFs when card is hovered
        const projectTiles = document.querySelectorAll('.project-tile');
        
        projectTiles.forEach(tile => {
            const gif = tile.querySelector('.dynamic-preview');
            if (gif) {
                const gifSrc = gif.getAttribute('src');
                gif.removeAttribute('src'); // Prevent initial loading
                
                tile.addEventListener('mouseenter', () => {
                    if (!gif.getAttribute('src')) {
                        gif.setAttribute('src', gifSrc);
                    }
                });
            }
        });
        
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
        
        // Animate progress bars
        document.addEventListener('DOMContentLoaded', () => {
            // Get all progress bars
            const progressBars = document.querySelectorAll('.progress-fill');
            
            // Animate each progress bar
            progressBars.forEach(bar => {
                const targetWidth = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent.replace('%', '');
                const duration = 1500; // 1.5 seconds
                const startTime = performance.now();
                
                function animate(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const width = progress * targetWidth;
                    bar.style.width = width + '%';
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                
                requestAnimationFrame(animate);
            });
            
            // Create radar chart for soft skills
            const radarCtx = document.getElementById('radarChart').getContext('2d');
            const radarChart = new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: [
                        'Communication', 
                        'Teamwork', 
                        'Problem Solving', 
                        'Leadership', 
                        'Adaptability', 
                        'Creativity',
                        'Time Management',
                        'Critical Thinking'
                    ],
                    datasets: [
                        {
                            label: 'Current Skills',
                            data: [85, 90, 88, 75, 82, 78, 80, 85],
                            backgroundColor: 'rgba(0, 209, 205, 0.3)',
                            borderColor: 'rgba(0, 209, 205, 0.8)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(0, 209, 205, 1)',
                            pointRadius: 4
                        },
                        {
                            label: 'Target Goals',
                            data: [90, 95, 95, 85, 90, 85, 90, 90],
                            backgroundColor: 'rgba(255, 62, 65, 0.3)',
                            borderColor: 'rgba(255, 62, 65, 0.8)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(255, 62, 65, 1)',
                            pointRadius: 4,
                            borderDash: [5, 5]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: {
                                display: true,
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            ticks: {
                                stepSize: 20,
                                backdropColor: 'transparent'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            pointLabels: {
                                font: {
                                    size: 12
                                },
                                color: '#F8F8FF'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    },
                    elements: {
                        line: {
                            tension: 0.1
                        }
                    }
                }
            });
            
            // Add hover effects to skill cards
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-8px)';
                    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
                });
            });
        });