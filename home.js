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

// Scroll vers les sections correspondantes
function scrollToElement(elementSelector, instance){
    instance=0;
    //select all elements that match the selector
    const elements= document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behavior: "smooth" });
    }
}

const link1=document.getElementById("link1");
const link2=document.getElementById("link2");
const link3=document.getElementById("link3");
const link4=document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.destinations');
});

link2.addEventListener('click', () => {
    scrollToElement('.cult');
});

link3.addEventListener('click', () => {
    scrollToElement('.gast');
});

link4.addEventListener('click', () => {
    scrollToElement('.activity');
});

/* ════════════════════
       7. NAVIGATION DESTINATIONS
       Flèches + points + scroll horizontal
    ════════════════════ */
    const showcase = document.getElementById('cards');
    const cards    = showcase.querySelectorAll('.city-card');
    const btnPrev  = document.getElementById('destPrev');
    const btnNext  = document.getElementById('destNext');
    const dots     = document.querySelectorAll('.dest-dot');
    const counter  = document.getElementById('destCounter');

    let currentIdx = 0;
    const TOTAL = cards.length;

    // Fait défiler vers la carte à l'index donné
    function scrollToCard(idx) {
      idx = Math.max(0, Math.min(TOTAL - 1, idx)); // Borne l'index
      currentIdx = idx;

      // Calcul du scroll horizontal cible
      const card    = cards[idx];
      const cardW   = card.offsetWidth + 20; // + gap
      const scrollX = idx * cardW;

      // Défilement fluide
      showcase.scrollTo({ left: scrollX, behavior: 'smooth' });

      // Mise à jour des points (active/inactive)
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));

      // Mise à jour du compteur "01 / 06"
      counter.textContent =
        String(idx + 1).padStart(2, '0') + ' / ' +
        String(TOTAL).padStart(2, '0');
    }

    // Clic flèche droite
    btnNext.addEventListener('click', () => scrollToCard(currentIdx + 1));
    // Clic flèche gauche
    btnPrev.addEventListener('click', () => scrollToCard(currentIdx - 1));

    // Clic sur un point
    dots.forEach(d => {
      d.addEventListener('click', () => scrollToCard(parseInt(d.dataset.idx)));
    });

    // Synchronisation du point actif lors du scroll manuel
    showcase.addEventListener('scroll', () => {
      const card  = cards[0];
      const cardW = card.offsetWidth + 20;
      const idx   = Math.round(showcase.scrollLeft / cardW);
      if (idx !== currentIdx) {
        currentIdx = idx;
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        counter.textContent =
          String(idx + 1).padStart(2, '0') + ' / ' +
          String(TOTAL).padStart(2, '0');
      }
    });

    // Navigation clavier (flèches gauche/droite)
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') scrollToCard(currentIdx + 1);
      if (e.key === 'ArrowLeft')  scrollToCard(currentIdx - 1);
    });


