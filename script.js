 // html
 function copyCode(code) {
    navigator.clipboard.writeText(code);
    showNotification(`🔥 Code ${code} copié !`);
}

function handleNewsletter(e) {
    e.preventDefault();
    showNotification('🎉 Merci pour votre inscription !');
    e.target.reset();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))';
    notification.style.color = 'black';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 0 15px var(--neon-purple)';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.bonus-card').forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Ajouter dans le fichier scripts.js
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.neon-loader');
    
    // Simulation d'un temps de chargement minimal
    setTimeout(() => {
      loader.classList.add('hidden');
      
      // Retirer complètement le loader après l'animation
      setTimeout(() => {
        loader.remove();
      }, 500);
      
    }, 1000); // Ajuster ce délai selon les besoins réels
  });

  // verification
        // Animation du cercle de score
        const circle = document.querySelector('.progress-ring-circle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        const setProgress = (percent) => {
            const offset = circumference - (percent / 100 * circumference);
            circle.style.strokeDashoffset = offset;
        };

        setProgress(85); // Valeur initiale

        // 2FA Simulation
let twoFAactivated = false;

function activate2FA() {
    document.getElementById('twofaModal').style.display = 'block';
}

function verify2FA() {
    const code = document.getElementById('authCode').value;
    if(code.length === 6) {
        twoFAactivated = true;
        updateSecurityStatus();
        document.getElementById('twofaModal').style.display = 'none';
        showNotification('✅ 2FA activée avec succès');
    } else {
        showNotification('❌ Code invalide', true);
    }
}

// Malware Cleanup Simulation
function startCleanup() {
    const cleanupBtn = document.querySelector('.btn-outline');
    const progress = document.querySelector('.scan-progress');
    
    cleanupBtn.disabled = true;
    cleanupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Nettoyage...';
    
    let width = 0;
    const interval = setInterval(() => {
        width += 10;
        progress.style.width = width + '%';
        if(width >= 100) {
            clearInterval(interval);
            document.querySelector('.verification-step.critical').classList.add('completed');
            cleanupBtn.remove();
            showNotification('✅ Menace neutralisée');
            updateSecurityStatus();
        }
    }, 300);
}

// Mise à jour dynamique
function updateSecurityStatus() {
    const scoreElement = document.querySelector('.score');
    let newScore = 85;
    
    if(twoFAactivated) newScore += 10;
    if(!document.querySelector('.verification-step.critical')) newScore += 5;
    
    scoreElement.textContent = newScore + '%';
    setProgress(newScore);
}

// Gestion modale
document.querySelector('.close').onclick = () => {
    document.getElementById('twofaModal').style.display = 'none';
}

window.onclick = (e) => {
    if(e.target === document.getElementById('twofaModal')) {
        document.getElementById('twofaModal').style.display = 'none';
    }
}

  // odds
        // Graphique historique des cotes
        const ctx = document.getElementById('oddsHistoryChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['-24h', '-18h', '-12h', '-6h', 'Maintenant'],
                datasets: [{
                    label: 'Évolution des cotes',
                    data: [2.8, 2.6, 2.5, 2.45, 2.4],
                    borderColor: '#00f3ff',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Simulation données temps réel
        function updateOdds() {
            document.querySelectorAll('.odds-value').forEach(item => {
                const change = Math.random() * 0.1;
                const newValue = parseFloat(item.textContent) + (Math.random() > 0.5 ? change : -change);
                item.textContent = newValue.toFixed(2);
                
                item.classList.remove('up', 'down');
                if(newValue > parseFloat(item.textContent)) 
                    item.classList.add('up');
                else 
                    item.classList.add('down');
            });
        }
        setInterval(updateOdds, 3000);

        // Génération dynamique des données
const heatmapData = [
    { team: 'PSG', results: ['3-1', '2-2', '0-1', '4-0', '2-1'] },
    { team: 'OM', results: ['1-2', '3-0', '2-1', '1-1', '0-2'] }
];

function populateHeatmap() {
    const grid = document.querySelector('.heatmap-grid');
    
    heatmapData.forEach(team => {
        grid.innerHTML += `
            <div class="team-name">${team.team}</div>
            ${team.results.map(result => `
                <div class="match-result ${getResultClass(result)}" data-tooltip="${team.team} ${result}">
                    ${result.split('-')[0]}
                </div>
            `).join('')}
        `;
    });
}

function getResultClass(result) {
    const [home, away] = result.split('-').map(Number);
    return home > away ? 'win' : home === away ? 'draw' : 'loss';
}

// Initialisation
window.addEventListener('DOMContentLoaded', populateHeatmap);



// dynamic-tracker.js
class LiveTracker {
    constructor() {
        this.ws = new WebSocket('wss://votre-api.com/live');
        this.initWebSocket();
        this.initEventListeners();
        this.initIntersectionObserver();
    }

    initWebSocket() {
        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.processLiveData(data);
        };

        this.ws.onerror = (error) => {
            this.showError('Erreur de connexion');
        };
    }

    processLiveData(data) {
        // Mise à jour de l'interface utilisateur
        this.updateUI(data);
        
        // Animation de mise à jour
        this.animateUpdates(data);
        
        // Mise à jour des graphiques
        this.updateCharts(data);
    }

    updateUI(data) {
        // Logique de mise à jour dynamique
        data.events.forEach(event => {
            const card = this.createEventCard(event);
            this.applyEntranceAnimation(card);
            document.getElementById('mainContent').appendChild(card);
        });
    }

    createEventCard(event) {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-header">
                <span class="event-time">${event.time}</span>
                <span class="event-status ${event.status}">${event.status}</span>
            </div>
            <div class="teams">
                ${event.teams.map(team => `
                    <div class="team">
                        <img src="${team.logo}" alt="${team.name}">
                        <span>${team.name}</span>
                    </div>
                `).join('')}
            </div>
            <div class="odds-container">
                ${this.generateOddsHTML(event.odds)}
            </div>
        `;
        return card;
    }

    generateOddsHTML(odds) {
        return Object.entries(odds).map(([bookmaker, value]) => `
            <div class="odds" data-bookmaker="${bookmaker}">
                <span class="bookmaker-name">${bookmaker}</span>
                <span class="odds-value ${value.trend}">
                    ${value.current}
                    <span class="odds-change ${value.change >= 0 ? 'positive' : 'negative'}">
                        ${Math.abs(value.change)}%
                    </span>
                </span>
            </div>
        `).join('');
    }

    applyEntranceAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.4s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    }

    initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.event-card').forEach(card => {
            observer.observe(card);
        });
    }

    showError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        document.body.appendChild(errorElement);
        setTimeout(() => errorElement.remove(), 3000);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const tracker = new LiveTracker();
    
    // Simulation de données
    setInterval(() => {
        const mockData = {
            events: [/* Données de test */]
        };
        tracker.processLiveData(mockData);
    }, 5000);
});

 // contact
 function handleSubmit(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    document.getElementById('contactForm').reset();
}

   // confid
   function copyCode(code) {
    navigator.clipboard.writeText(code);
    showNotification(`🔥 Code ${code} copié !`);
}

function handleNewsletter(e) {
    e.preventDefault();
    showNotification('🎉 Merci pour votre inscription !');
    e.target.reset();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))';
    notification.style.color = 'black';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 0 15px var(--neon-purple)';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.bonus-card').forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

//condition
function copyCode(code) {
    navigator.clipboard.writeText(code);
    showNotification(`🔥 Code ${code} copié !`);
}

function handleNewsletter(e) {
    e.preventDefault();
    showNotification('🎉 Merci pour votre inscription !');
    e.target.reset();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))';
    notification.style.color = 'black';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 0 15px var(--neon-purple)';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.bonus-card').forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

        //blog
        function copyCode(code) {
            navigator.clipboard.writeText(code);
            showNotification(`🔥 Code ${code} copié !`);
        }

        function handleNewsletter(e) {
            e.preventDefault();
            showNotification('🎉 Merci pour votre inscription !');
            e.target.reset();
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.background = 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))';
            notification.style.color = 'black';
            notification.style.padding = '1rem 2rem';
            notification.style.borderRadius = '8px';
            notification.style.boxShadow = '0 0 15px var(--neon-purple)';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        window.addEventListener('scroll', () => {
            document.querySelectorAll('.bonus-card').forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if(cardTop < window.innerHeight * 0.8) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });

        // Simulation de chargement
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('.neon-loader').style.display = 'none';
            }, 1000);
        });

        // Dans le fichier scripts.js
document.getElementById('newsletterForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.newsletterEmail.value;
    const button = form.querySelector('button');
    const message = form.querySelector('.form-message');
    
    // Validation
    if (!validateEmail(email)) {
        showMessage(message, 'Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Simulation d'envoi
    button.classList.add('loading');
    message.classList.remove('visible');
    
    try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showMessage(message, '🎉 Abonnement réussi ! Merci !', 'success');
        form.reset();
    } catch (error) {
        showMessage(message, '⚠️ Erreur, veuillez réessayer', 'error');
    } finally {
        button.classList.remove('loading');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `form-message visible ${type}`;
    setTimeout(() => element.classList.remove('visible'), 3000);
}

// Intersection Observer pour l'animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = index * 0.15;
            entry.target.style.animationDelay = `${delay}s`;
            entry.target.classList.add('animate-entry');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.blog-post').forEach((post, index) => {
    post.style.animationDelay = `${index * 0.15}s`;
    observer.observe(post);
});

// Effet hover dynamique
document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('mousemove', (e) => {
        const rect = post.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        post.style.setProperty('--mouse-x', `${x}px`);
        post.style.setProperty('--mouse-y', `${y}px`);
    });
});

        // apropos
        function copyCode(code) {
            navigator.clipboard.writeText(code);
            showNotification(`🔥 Code ${code} copié !`);
        }

        function handleNewsletter(e) {
            e.preventDefault();
            showNotification('🎉 Merci pour votre inscription !');
            e.target.reset();
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.background = 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))';
            notification.style.color = 'black';
            notification.style.padding = '1rem 2rem';
            notification.style.borderRadius = '8px';
            notification.style.boxShadow = '0 0 15px var(--neon-purple)';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        window.addEventListener('scroll', () => {
            document.querySelectorAll('.bonus-card').forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if(cardTop < window.innerHeight * 0.8) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });



        // Gestion du menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});



// Corrigez le script existant
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
  
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('active');
      mobileBtn.classList.toggle('active');
    });
  
    // Fermer en cliquant hors du menu
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileBtn.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileBtn.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.neon-flicker').forEach(el => {
    setInterval(() => {
        el.style.opacity = Math.random().toFixed(1);
    }, 100);
});

document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});


// Animation au survol des champs
document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.parentNode.querySelector('i').style.color = 'var(--neon-cyan)';
    });
    
    el.addEventListener('mouseleave', () => {
        el.parentNode.querySelector('i').style.color = 'var(--neon-pink)';
    });
});

// Effet de validation du formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    
    form.classList.add('submitting');
    setTimeout(() => {
        form.classList.remove('submitting');
        showNotification('🎉 Message envoyé avec succès !');
        form.reset();
    }, 2000);
});



// script.js
function adaptLayout() {
    const viewportWidth = window.innerWidth;
    const elements = document.querySelectorAll('[data-responsive]');

    elements.forEach(el => {
        const config = JSON.parse(el.dataset.responsive);
        Object.keys(config).forEach(breakpoint => {
            if (viewportWidth <= parseInt(breakpoint)) {
                Object.assign(el.style, config[breakpoint]);
            }
        });
    });
}

// Rafraîchissement automatique
window.addEventListener('resize', adaptLayout);
window.addEventListener('orientationchange', adaptLayout);
window.addEventListener('load', adaptLayout);






if(typeof CSS.supports === 'function' && !CSS.supports('display', 'grid')) {
    window.location.href = '/unsupported-browser';
}




document.getElementById('newsletterForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.newsletterEmail.value;
    const button = form.querySelector('button');
    const message = form.querySelector('.form-message');

    if (!validateEmail(email)) {
        showMessage(message, 'Veuillez entrer une adresse email valide', 'error');
        return;
    }

    button.classList.add('loading');
    message.classList.remove('visible');

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        showMessage(message, '🎉 Abonnement réussi ! Merci !', 'success');
        form.reset();
    } catch (error) {
        showMessage(message, '⚠️ Erreur, veuillez réessayer', 'error');
    } finally {
        button.classList.remove('loading');
    }
});



document.getElementById('newsletterForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');
    const message = form.querySelector('.form-message');
  
    if (!validateEmail(emailInput.value)) {
      showMessage('Veuillez entrer un email valide', 'error');
      return;
    }
  
    button.classList.add('loading');
    message.classList.remove('visible');
  
    try {
      await fetch('https://formspree.io/f/xeogqojo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput.value })
      });
  
      showMessage('🎉 Merci pour votre inscription !', 'success');
      form.reset();
    } catch (err) {
      showMessage('❌ Une erreur est survenue. Réessayez.', 'error');
    } finally {
      button.classList.remove('loading');
    }
  
    function showMessage(text, type) {
      message.textContent = text;
      message.className = `form-message visible ${type}`;
      setTimeout(() => message.classList.remove('visible'), 4000);
    }
  
    function validateEmail(email) {
      return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
    }
  })




  // script.js
// Gestion du hover vidéo
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    
    container.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
    });
    
    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

// Chargement progressif des images
document.querySelectorAll('.bonus-image').forEach(img => {
    img.style.opacity = '0';
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(img);
});


// Ajoutez ce script
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.promo-cta');
    const closeBtn = document.querySelector('.close-cta');
  
    // Fermeture du CTA
    closeBtn.addEventListener('click', () => {
      cta.style.animation = 'slideDown 0.5s ease forwards';
      setTimeout(() => cta.remove(), 500);
      localStorage.setItem('ctaClosed', 'true');
    });
  
    // Animation de hover
    cta.addEventListener('mouseenter', () => {
      cta.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    cta.addEventListener('mouseleave', () => {
      cta.style.transform = 'translateY(0) scale(1)';
    });
  
    // Vérifier si déjà fermé
    if(!localStorage.getItem('ctaClosed')) {
      setTimeout(() => cta.style.display = 'block', 3000);
    }
  });


// ===========================
//      WOW EFFECTS (IIFE)
// ===========================
(function() {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ========== 1. PARTICLE BACKGROUND ==========
    const PARTICLE_COUNT = 900;
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--neon-cyan').trim() || '#00f3ff',
        getComputedStyle(document.documentElement).getPropertyValue('--neon-pink').trim() || '#ff00ff'
    ];

    let particleCanvas, ctx, particles = [], w, h, dpr;
    function resizeParticles() {
        w = window.innerWidth;
        h = window.innerHeight;
        dpr = window.devicePixelRatio || 1;
        particleCanvas.width = w * dpr;
        particleCanvas.height = h * dpr;
        particleCanvas.style.width = w + 'px';
        particleCanvas.style.height = h + 'px';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }
    function randomColor() {
        return colors[Math.floor(Math.random()*colors.length)];
    }
    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const angle = Math.random() * 2*Math.PI;
            const speed = 0.15 + Math.random() * 0.25;
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: 1 + Math.random(),
                color: randomColor(),
                alpha: 0.12 + Math.random()*0.17,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed
            });
        }
    }
    function animateParticles() {
        if (prefersReducedMotion) return;
        ctx.clearRect(0,0,w,h);
        for (let i=0; i<particles.length; i++) {
            const p = particles[i];
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8 + Math.random()*8;
            ctx.fill();
            ctx.shadowBlur = 0;
            p.x += p.dx;
            p.y += p.dy;
            // Recycle out-of-bounds
            if (p.x < -10 || p.x > w+10 || p.y < -10 || p.y > h+10) {
                p.x = Math.random()*w;
                p.y = Math.random()*h;
            }
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(animateParticles);
    }
    if (!prefersReducedMotion) {
        particleCanvas = document.createElement('canvas');
        particleCanvas.className = 'wow-particles-bg';
        particleCanvas.style.position = 'fixed';
        particleCanvas.style.left = '0'; particleCanvas.style.top = '0'; particleCanvas.style.width = '100vw'; particleCanvas.style.height = '100vh';
        particleCanvas.style.zIndex = '-2';
        particleCanvas.style.pointerEvents = 'none';
        document.body.appendChild(particleCanvas);
        ctx = particleCanvas.getContext('2d');
        resizeParticles();
        createParticles();
        animateParticles();
        window.addEventListener('resize', () => {
            resizeParticles();
            createParticles();
        });
    }

    // ========== 2. CUSTOM CURSOR + FOLLOWER ==========
    const showCursor = !prefersReducedMotion &&
        window.matchMedia('(pointer: fine)').matches &&
        window.innerWidth >= 768;

    let cursor, cursorHalo;
    if (showCursor) {
        cursor = document.createElement('div');
        cursor.className = 'wow-cursor';
        cursorHalo = document.createElement('div');
        cursorHalo.className = 'wow-cursor-halo';
        document.body.appendChild(cursor);
        document.body.appendChild(cursorHalo);

        let mouseX = 0, mouseY = 0, haloX = 0, haloY = 0;
        function moveCursor(e) {
            mouseX = e.clientX; mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX-2}px,${mouseY-2}px)`;
        }
        function animateHalo() {
            if (prefersReducedMotion) return;
            haloX += (mouseX - haloX) * 0.18;
            haloY += (mouseY - haloY) * 0.18;
            cursorHalo.style.transform = `translate(${haloX-15}px,${haloY-15}px)`;
            requestAnimationFrame(animateHalo);
        }
        window.addEventListener('mousemove', moveCursor);
        animateHalo();

        // Highlight on interactive
        const targets = [
            'a', 'button', '.btn', '.btn-redirect', '.odds-tracker-button', '.nav-link'
        ];
        document.body.addEventListener('mouseover', e => {
            if (targets.some(sel => e.target.closest(sel))) {
                cursorHalo.classList.add('wow-cursor-halo-active');
            }
        });
        document.body.addEventListener('mouseout', e => {
            if (targets.some(sel => e.target.closest(sel))) {
                cursorHalo.classList.remove('wow-cursor-halo-active');
            }
        });
        // Hide on scroll (optional): window.addEventListener('scroll', ()=>{cursor.style.opacity=cursorHalo.style.opacity='0';});
    }

    // ========== 3. MAGNETIC BUTTONS ==========
    if (showCursor) {
        const magnetics = Array.from(document.querySelectorAll('.btn, .btn-redirect, .odds-tracker-button'));
        magnetics.forEach(el => {
            let hovering = false, animId = null;
            el.style.transition = 'transform 0.3s cubic-bezier(.33,1,.68,1)';
            el.addEventListener('mousemove', function(e) {
                if (!hovering) {
                    hovering = true;
                }
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width/2;
                const y = e.clientY - rect.top - rect.height/2;
                el.style.transform = `translate(${x*0.18}px,${y*0.18}px)`;
            });
            el.addEventListener('mouseleave', function() {
                el.style.transform = '';
                hovering = false;
            });
        });
    }

    // ========== 4. SCROLL-REVEAL ==========
    // CSS: .reveal-from-bottom, .reveal-fade (opacity 0, transform), .revealed (opacity 1, transform none)
    const revealElements = document.querySelectorAll('.reveal-from-bottom, .reveal-fade');
    if (revealElements.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.13 });
        revealElements.forEach(el => observer.observe(el));
    }

    // ========== 5. ACCESSIBILITY/REDUCED MOTION ==========
    if (prefersReducedMotion) {
        // Remove any transitions/animations for all .revealed
        const style = document.createElement('style');
        style.innerHTML = `
            .revealed, .wow-cursor, .wow-cursor-halo, .wow-particles-bg, 
            .btn, .btn-redirect, .odds-tracker-button, 
            .reveal-from-bottom, .reveal-fade {
                transition-duration: 0s !important;
                animation-duration: 0s !important;
            }
        `;
        document.head.appendChild(style);
    }

})();