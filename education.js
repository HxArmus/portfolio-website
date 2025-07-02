// Animate timeline items on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            observer.observe(item);
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