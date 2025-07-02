// Animate progress bars with Framer Motion
        document.addEventListener('DOMContentLoaded', () => {
            // Get all progress bars
            const progressBars = document.querySelectorAll('.progress-bar');
            
            // Animate each progress bar
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-level');
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
                            backgroundColor: 'rgba(52, 152, 219, 0.3)',
                            borderColor: 'rgba(52, 152, 219, 0.8)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                            pointRadius: 4
                        },
                        {
                            label: 'Target Goals',
                            data: [90, 95, 95, 85, 90, 85, 90, 90],
                            backgroundColor: 'rgba(231, 76, 60, 0.3)',
                            borderColor: 'rgba(231, 76, 60, 0.8)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(231, 76, 60, 1)',
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
                                color: 'rgba(0, 0, 0, 0.1)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            ticks: {
                                stepSize: 20,
                                backdropColor: 'transparent'
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            },
                            pointLabels: {
                                font: {
                                    size: 12
                                }
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