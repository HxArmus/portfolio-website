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
        