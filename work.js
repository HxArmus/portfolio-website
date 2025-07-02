// 3D tilt effect
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