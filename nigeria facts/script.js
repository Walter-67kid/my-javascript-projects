// Nigerian Fact File - JavaScript
// Adding some interactivity to the page

document.addEventListener('DOMContentLoaded', function() {
    // Add animation to fact cards when they come into view
    const cards = document.querySelectorAll('.fact-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add click effect to cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    console.log('🇳🇬 Nigerian Fact File loaded successfully!');
});
