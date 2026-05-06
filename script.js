/* ════════════════════
   ZELIJ BACKGROUND ANIMATION
════════════════════ */
function createZelijParticles() {
    const container = document.getElementById('zelij-bg');
    if (!container) return;
    
    const particleTypes = [
        'zelij-star',
        'zelij-star-small',
        'zelij-hexagon',
        'zelij-diamond',
        'zelij-square'
    ];
    
    // Créer 30-50 particules animées
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('zelij-particle');
        
        // Ajouter un type de forme aléatoire
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.innerHTML = `<div class="${randomType}"></div>`;
        
        // Positionner aléatoirement
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Durée et délai aléatoires pour plus de variété
        const duration = 15 + Math.random() * 15;
        const delay = Math.random() * 10;
        
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        // Couleur avec transparence
        particle.style.filter = `hue-rotate(${Math.random() * 30}deg)`;
        
        container.appendChild(particle);
    }
}

// Initialiser les particules au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createZelijParticles);
} else {
    createZelijParticles();
}