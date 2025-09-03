// Global variables
let videosGenerated = 0;
let galleryVideos = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    generateTimeline();
    generateConcepts();
    generateSuggestions();
    loadGallery();
    updateStats();
    initScrollAnimations();
});

// Particle.js initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100 },
                "color": { "value": "#00ffff" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": true
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }
                },
                "modes": {
                    "repulse": { "distance": 200 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
}

// Timeline generation
async function generateVideo() {
    const promptInput = document.getElementById('vision-prompt');
    const durationSelect = document.getElementById('duration');
    const styleSelect = document.getElementById('style');
    const generateBtn = document.getElementById('generate-btn');
    const loadingSection = document.getElementById('loading-animation');
    const videoResult = document.getElementById('video-result');

    const prompt = promptInput.value.trim();
    if (!prompt) {
        alert('Por favor, descreva sua visão do futuro!');
        return;
    }
    ];

    const container = document.getElementById('timeline-items');
    
    timelineItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'timeline-item';
        itemElement.dataset.testid = `timeline-item-${index}`;
        
        const colorClass = item.color.replace('cyber-', '');
        
        if (item.side === 'left') {
            itemElement.innerHTML = `
                <div class="timeline-content" style="margin-right: auto;">
                    <h3 class="timeline-period" style="color: var(--${item.color});">${item.period}</h3>
                    <h4 class="timeline-title">${item.title}</h4>
                    <p class="timeline-description">${item.description}</p>
                    <div style="text-align: right;">
                        <i class="${item.icon} timeline-icon" style="color: var(--${item.color});"></i>
                    </div>
                </div>
                <div class="timeline-dot" style="background: var(--${item.color});"></div>
                <div style="width: 45%;"></div>
            `;
        } else {
            itemElement.innerHTML = `
                <div style="width: 45%;"></div>
                <div class="timeline-dot" style="background: var(--${item.color});"></div>
                <div class="timeline-content" style="margin-left: auto;">
                    <h3 class="timeline-period" style="color: var(--${item.color});">${item.period}</h3>
                    <h4 class="timeline-title">${item.title}</h4>
                    <p class="timeline-description">${item.description}</p>
                    <div style="text-align: left;">
                        <i class="${item.icon} timeline-icon" style="color: var(--${item.color});"></i>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(itemElement);
    });
}

// Generate future concepts
function generateConcepts() {
    const concepts = [
        {
            emoji: "🏙️",
            title: "Cidades Inteligentes",
            description: "IA controla energia, trânsito, segurança e bem-estar urbano em tempo real.",
            color: "cyber-blue",
            delay: "0s"
        },
        {
            emoji: "🤖",
            title: "Robôs Humanoides",
            description: "Companheiros, trabalhadores e assistentes ultrainteligentes integrados à sociedade.",
            color: "cyber-purple",
            delay: "0.2s"
        },
        {
            emoji: "🧠",
            title: "IA na Saúde",
            description: "Diagnósticos perfeitos, cirurgias assistidas e extensão da longevidade humana.",
            color: "cyber-pink",
            delay: "0.4s"
        },
        {
            emoji: "🌌",
            title: "Exploração Espacial",
            description: "IA em missões espaciais, colonização e exploração do universo profundo.",
            color: "cyber-green",
            delay: "0.6s"
        }
    ];

    const container = document.getElementById('concepts-grid');
    
    concepts.forEach((concept, index) => {
        const card = document.createElement('div');
        card.className = 'concept-card';
        card.style.animationDelay = concept.delay;
        card.dataset.testid = `concept-card-${index}`;
        
        card.innerHTML = `
            <div class="concept-emoji">${concept.emoji}</div>
            <h3 class="concept-title" style="color: var(--${concept.color});">${concept.title}</h3>
            <p class="concept-description">${concept.description}</p>
        `;
        
        container.appendChild(card);
    });
}

// Generate suggestions
function generateSuggestions() {
    const suggestions = [
        "Cidades flutuantes no oceano",
        "Transporte por tubos pneumáticos",
        "Fazendas verticais automatizadas",
        "Realidade virtual completa"
    ];

    const container = document.getElementById('suggestions');
    
    suggestions.forEach((suggestion, index) => {
        const tag = document.createElement('button');
        tag.className = 'suggestion-tag';
        tag.textContent = suggestion;
        tag.dataset.testid = `suggestion-${index}`;
        tag.onclick = () => applySuggestion(suggestion);
        
        container.appendChild(tag);
    });
}

// Apply suggestion to textarea
function applySuggestion(suggestion) {
    document.getElementById('vision-prompt').value = suggestion;
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Video generation function
async function generateVideo() {
    const promptInput = document.getElementById('vision-prompt');
    const durationSelect = document.getElementById('duration');
    const styleSelect = document.getElementById('style');
    const generateBtn = document.getElementById('generate-btn');
    const loadingSection = document.getElementById('loading-animation');
    const videoResult = document.getElementById('video-result');

    const prompt = promptInput.value.trim();
    if (!prompt) {
        alert('Por favor, descreva sua visão do futuro!');
        return;
    }

    // Mostrar carregamento
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>Gerando...';
    loadingSection.classList.remove('hidden');
    videoResult.classList.add('hidden');

    try {
        // Chamada real para a API do VideoGen
        const response = await fetch("https://api.videogen.io/v1/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer SUA_CHAVE_API_AQUI" // substitua pela sua chave da VideoGen
            },
            body: JSON.stringify({
                prompt: prompt,
                duration: parseInt(durationSelect.value),
                style: styleSelect.value,
                resolution: "720p"
            })
        });

        if (!response.ok) {
            throw new Error("Erro ao gerar vídeo: " + response.statusText);
        }

        const data = await response.json();

        // O retorno deve conter a URL do vídeo
        const videoUrl = data.url || data.videoUrl;
        const videoData = {
            id: Date.now().toString(),
            title: "Visão Futurística",
            description: prompt,
            duration: parseInt(durationSelect.value),
            style: styleSelect.value,
            videoUrl: videoUrl,
            thumbnailUrl: "", // se a API retornar thumbnail, use aqui
            createdAt: new Date(),
            likes: 0
        };

        galleryVideos.unshift(videoData);
        videosGenerated++;

        updateStats();
        loadGallery();
        showVideoResult(videoData);

    } catch (error) {
        console.error('Erro ao gerar vídeo:', error);
        alert('Erro ao gerar vídeo. Verifique sua chave API.');
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-magic"></i>Gerar Vídeo do Futuro';
        loadingSection.classList.add('hidden');
    }
}

// Generate creative title
async function generateVideoTitle(prompt) {
    const titles = [
        "Visão Futurística",
        "Mundo do Amanhã",
        "Era Digital Avançada",
        "Futuro Conectado",
        "Revolução Tecnológica",
        "Sociedade Inteligente",
        "Horizonte Virtual",
        "Civilização Avançada"
    ];
    
    return titles[Math.floor(Math.random() * titles.length)];
}

// Get random video URL (placeholder)
function getRandomVideoUrl() {
    const videos = [
        "https://cdn.videvo.net/videvo_files/video/free/2022-07/small_watermarked/220622_06_City_Skyline_4k_001_preview.webm",
        "https://cdn.videvo.net/videvo_files/video/free/2019-10/small_watermarked/191016_11_MARS_4k_006_preview.webm",
        "https://cdn.videvo.net/videvo_files/video/free/2020-06/small_watermarked/200607_05_Underwater_4k_014_preview.webm"
    ];
    
    return videos[Math.floor(Math.random() * videos.length)];
}

// Get random thumbnail URL
function getRandomThumbnailUrl() {
    const thumbnails = [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ];
    
    return thumbnails[Math.floor(Math.random() * thumbnails.length)];
}

// Show video result
function showVideoResult(videoData) {
    const videoResult = document.getElementById('video-result');
    
    videoResult.innerHTML = `
        <h3>Vídeo Gerado com Sucesso! 🎉</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">
            Sua visão: "<em>${videoData.description}</em>"
        </p>
        <video controls data-testid="generated-video" poster="${videoData.thumbnailUrl}">
            <source src="${videoData.videoUrl}" type="video/webm">
            Seu navegador não suporta vídeo.
        </video>
        <div class="video-actions">
            <button class="btn-primary">
                <i class="fas fa-download"></i>Baixar Vídeo
            </button>
            <button class="btn-secondary" style="border-color: var(--cyber-green); color: var(--cyber-green);">
                <i class="fas fa-share"></i>Compartilhar
            </button>
        </div>
    `;
    
    videoResult.classList.remove('hidden');
}

// Load gallery
function loadGallery() {
    const container = document.getElementById('gallery-grid');
    
    if (galleryVideos.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-secondary);">
                <i class="fas fa-video" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>Nenhum vídeo gerado ainda. Use o gerador acima para criar seu primeiro vídeo!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    galleryVideos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.testid = `video-card-${video.id}`;
        
        item.innerHTML = `
            <div class="gallery-thumbnail">
                <img src="${video.thumbnailUrl}" alt="${video.title}">
                <div class="gallery-overlay">
                    <button class="play-button" onclick="openVideoModal('${video.id}')" data-testid="button-play-video-${video.id}">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="gallery-content">
                <h3 class="gallery-title" data-testid="video-title-${video.id}">${video.title}</h3>
                <p class="gallery-description" data-testid="video-description-${video.id}">${video.description}</p>
                <div class="gallery-meta">
                    <div class="gallery-actions">
                        <button class="gallery-action" onclick="likeVideo('${video.id}')" data-testid="button-like-video-${video.id}">
                            <i class="fas fa-heart"></i>
                            <span data-testid="video-likes-${video.id}">${video.likes}</span>
                        </button>
                        <button class="gallery-action">
                            <i class="fas fa-share"></i>
                            <span>Compartilhar</span>
                        </button>
                    </div>
                    <span class="gallery-time" data-testid="video-time-${video.id}">${formatTimeAgo(video.createdAt)}</span>
                </div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Format time ago
function formatTimeAgo(date) {
    const now = new Date();
    const videoDate = new Date(date);
    const diffMs = now.getTime() - videoDate.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
        return `${diffDays}d atrás`;
    } else if (diffHours > 0) {
        return `${diffHours}h atrás`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes}min atrás`;
    } else {
        return "Agora";
    }
}

// Like video
function likeVideo(videoId) {
    const video = galleryVideos.find(v => v.id === videoId);
    if (video) {
        video.likes++;
        loadGallery();
    }
}

// Open video modal
function openVideoModal(videoId) {
    const video = galleryVideos.find(v => v.id === videoId);
    if (!video) return;
    
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modal-title');
    const modalVideo = document.getElementById('modal-video');
    
    modalTitle.textContent = video.title;
    modalVideo.src = video.videoUrl;
    modalVideo.poster = video.thumbnailUrl;
    
    modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.classList.add('hidden');
    modalVideo.pause();
    modalVideo.src = '';
}

// Update statistics
function updateStats() {
    const statsElement = document.getElementById('videos-generated');
    const target = videosGenerated;
    
    animateCounter(statsElement, target);
}

// Animate counter
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, 50);
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe timeline items, concept cards, and other animated elements
    document.querySelectorAll('.timeline-content, .concept-card').forEach((el) => {
        observer.observe(el);
    });
}

// Modal click outside to close
document.addEventListener('click', function(e) {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form submission with Enter key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        const promptInput = document.getElementById('vision-prompt');
        if (document.activeElement === promptInput) {
            generateVideo();
        }
    }
});
