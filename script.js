const LOGO_POR_DEFECTO = "logo.png";

// --- 1. BASE DE DATOS LOCAL ---
const baseDeDatos = [
    { titulo: "Chambea", artista: "Bad Bunny", archivo: "musica/Bad Bunnychambea.m4a", genero: "Reggaeton", portada:"", seccion: "acceso-rapido" },
    { titulo: "Tití Me Preguntó", artista: "Bad Bunny", archivo: "musica/titimepregunto.m4a", genero: "Reggaeton", portada: "", seccion: "acceso-rapido" },
    { titulo: "Dákiti", artista: "Bad Bunny & Jhay Cortez", archivo: "musica/dakiti.m4a", genero: "Reggaeton", portada: "", seccion: "acceso-rapido" },
    { titulo: "LALA", artista: "Myke Towers", archivo: "musica/lala.m4a", genero: "Reggaeton", portada: "", seccion: "acceso-rapido" },
    { titulo: "LUNA", artista: "Feid & ATL Jacob", archivo: "musica/luna.m4a", genero: "Reggaeton", portada: "", seccion: "acceso-rapido" },
    { titulo: "Dura", artista: "Daddy Yankee", archivo: "musica/dura.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Gasolina", artista: "Daddy Yankee", archivo: "musica/gasolina.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Despacito", artista: "Luis Fonsi & Daddy Yankee", archivo: "musica/despacito.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Danza Kuduro", artista: "Don Omar", archivo: "musica/danzakuduro.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Dile", artista: "Don Omar", archivo: "musica/dile.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Hasta El Amanecer", artista: "Nicky Jam", archivo: "musica/hastaelamanecer.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "EL MAKINON", artista: "KAROL G & Mariah Angeliq", archivo: "musica/makinon.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" }, // CORREGIDO
    { titulo: "Tusa", artista: "KAROL G & Nicki Minaj", archivo: "musica/tusa.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Pa Que Retozen", artista: "Tego Calderón", archivo: "musica/paqueretozen.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Rakata", artista: "Wisin & Yandel", archivo: "musica/rakata.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "Relación", artista: "Sech", archivo: "musica/relacion.m4a", genero: "Reggaeton", portada: "", seccion: "recomendadas" },
    { titulo: "As It Was", artista: "Harry Styles", archivo: "musica/asitwas.m4a", genero: "Ingles", portada: "", seccion: "acceso-rapido" },
    { titulo: "Blinding Lights", artista: "The Weeknd", archivo: "musica/blinding.m4a", genero: "Ingles", portada: "", seccion: "acceso-rapido" },
    { titulo: "Anti-Hero", artista: "Taylor Swift", archivo: "musica/antihero.m4a", genero: "Ingles", portada: "", seccion: "mas-sonadas" },
    { titulo: "CHIHIRO", artista: "Billie Eilish", archivo: "musica/chihiro.m4a", genero: "Ingles", portada: "", seccion: "mas-sonadas" },
    { titulo: "Billy", artista: "Billie Eilish", archivo: "musica/billy.mp3", genero: "Ingles", portada: "", seccion: "mas-sonadas" },
    { titulo: "Closer", artista: "The Chainsmokers", archivo: "musica/closer.m4a", genero: "Ingles", portada: "", seccion: "recomendadas" },
    { titulo: "Bailando", artista: "Enrique Iglesias", archivo: "musica/bailando.m4a", genero: "Ingles", portada: "", seccion: "recomendadas" },
    { titulo: "El Perdedor", artista: "Aventura", archivo: "musica/Aventura - El Perdedor(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Ella y Yo", artista: "Aventura ft. Don Omar", archivo: "musica/Aventura - Ella y Yo (ft. Don Omar)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "Inmortal", artista: "Aventura", archivo: "musica/Aventura - Inmortal (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Obsesión", artista: "Aventura", archivo: "musica/Aventura - Obsesión (ft. Judy Santos)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Un Beso", artista: "Aventura", archivo: "musica/Aventura - Un Beso (Official Audio)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "La Bachata", artista: "Manuel Turizo", archivo: "musica/La Bachata - MTZ Manuel Turizo _ Video Oficial(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Señor Juez", artista: "Ozuna & Anthony Santos", archivo: "musica/Ozuna_ Anthony Santos - Señor Juez  (Video Oficial)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Corazón Sin Cara", artista: "Prince Royce", archivo: "musica/Prince Royce - Corazon Sin Cara (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "Darte un Beso", artista: "Prince Royce", archivo: "musica/Prince Royce - Darte un Beso (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Stand By Me", artista: "Prince Royce", archivo: "musica/Prince Royce - Stand By Me (Music Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Deja vu", artista: "Prince Royce & Shakira", archivo: "musica/Prince Royce_ Shakira - Deja vu (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "Cancioncitas de Amor", artista: "Romeo Santos", archivo: "musica/Romeo Santos - Cancioncitas de Amor (Audio)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Hilito", artista: "Romeo Santos", archivo: "musica/Romeo Santos - Hilito (Official Audio)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Imitadora", artista: "Romeo Santos", archivo: "musica/Romeo Santos - Imitadora (Official Lyric Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "Propuesta Indecente", artista: "Romeo Santos", archivo: "musica/Romeo Santos - Propuesta Indecente (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Sobredosis", artista: "Romeo Santos ft. Ozuna", archivo: "musica/Romeo Santos - Sobredosis (Audio) ft. Ozuna(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Solo Conmigo", artista: "Romeo Santos", archivo: "musica/Romeo Santos - Solo Conmigo (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" },
    { titulo: "Dardos", artista: "Romeo Santos & Prince Royce", archivo: "musica/Romeo Santos_ Prince Royce - Dardos (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "recomendadas" },
    { titulo: "Lokita Por Mí", artista: "Romeo Santos & Prince Royce", archivo: "musica/Romeo Santos_ Prince Royce - Lokita Por Mí (Official Lyric Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "acceso-rapido" },
    { titulo: "Monotonía", artista: "Shakira & Ozuna", archivo: "musica/Shakira_ Ozuna - Monotonía (Official Video)(M4A_128K).m4a", genero: "Bachata", portada: "", seccion: "mas-sonadas" }, 
    { titulo: "Qué Locura Enamorarme De Ti", artista: "Eddie Santiago", archivo: "musica/Eddie Santiago - Qué Locura Enamorarme De Ti (Visualizer)(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "acceso-rapido" },
    { titulo: "El Amor Me Lo Compras A Mi", artista: "Pupy Santiago", archivo: "musica/El Amor Me Lo Compras A Mi - Pupy Santiago (Video Oficial)(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "mas-sonadas" },
    { titulo: "El Cantante", artista: "Héctor Lavoe", archivo: "musica/El Cantante(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "recomendadas" },
    { titulo: "Deseándote", artista: "Frankie Ruíz", archivo: "musica/Frankie Ruíz - Deseándote (Visualizer)(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "acceso-rapido" },
    { titulo: "Tú Con Él", artista: "Frankie Ruíz", archivo: "musica/Frankie Ruíz - Tú Con Él (Visualizer)(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "mas-sonadas" },
    { titulo: "Una Aventura", artista: "Grupo Niche", archivo: "musica/Grupo Niche - Una Aventura  (Video Oficial)(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "recomendadas" },
    { titulo: "Idilio", artista: "Willie Colón", archivo: "musica/Idilio(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "acceso-rapido" },
    { titulo: "La Rebelión", artista: "Joe Arroyo", archivo: "musica/Joe Arroyo - La Rebelion(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "mas-sonadas" },
    { titulo: "La Vida Es Un Carnaval", artista: "Celia Cruz", archivo: "musica/La Vida Es Un Carnaval - Celia Cruz(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "recomendadas" },
    { titulo: "Llorarás", artista: "Oscar D'León", archivo: "musica/Lloraras(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "acceso-rapido" },
    { titulo: "Me Liberé", artista: "El Gran Combo", archivo: "musica/Me Liberé(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "mas-sonadas" },
    { titulo: "Nuestro Sueño", artista: "Grupo Niche", archivo: "musica/Nuestro Sueño_ Grupo Niche_ Video Letra - Salsa Power(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "recomendadas" },
    { titulo: "Oh Qué Será", artista: "Willie Colón", archivo: "musica/Oh Qué Será_(M4A_128K).m4a", genero: "Salsa", portada: "", seccion: "acceso-rapido" }
];

let cancionesActuales = [...baseDeDatos];
let indiceActual = 0;
let esAleatorio = false;
let esRepetir = false;
let estaReproduciendo = false;

const audioPlayer = document.getElementById('html5-player');
const centralPlayBtn = document.getElementById('central-play');
const nowPlayingImg = document.getElementById('now-playing-img');
const nowPlayingTitle = document.getElementById('now-playing-title');
const nowPlayingArtist = document.getElementById('now-playing-artist');
const progressFill = document.getElementById('progress-fill');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeSlider = document.getElementById('volume-slider');

// --- 2. FUNCIONES DE RENDERIZADO ---
function renderizarFila(contenedorId, listaCanciones) {
    const track = document.getElementById(contenedorId);
    if (!track) return;
    track.innerHTML = '';
    
    listaCanciones.forEach((cancion) => {
        const imagenPortada = cancion.portada || LOGO_POR_DEFECTO;
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${imagenPortada}" alt="${cancion.titulo}" class="album-cover" onerror="this.src='${LOGO_POR_DEFECTO}'">
            <h3 style="font-size: 0.9rem; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cancion.titulo}</h3>
            <p style="font-size: 0.75rem; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cancion.artista}</p>
        `;
        item.addEventListener('click', () => {
            const indexOriginal = cancionesActuales.indexOf(cancion);
            cargarCancion(indexOriginal, true);
        });
        track.appendChild(item);
    });
}

function inicializarPantallaPrincipal(generoFiltro = 'Todos') {
    if (generoFiltro === 'Todos') {
        cancionesActuales = [...baseDeDatos];
    } else if (generoFiltro === 'Ingles') {
        cancionesActuales = baseDeDatos.filter(c => ['Ingles', 'Pop', 'R&B', 'Electrónica'].includes(c.genero));
    } else {
        cancionesActuales = baseDeDatos.filter(c => c.genero === generoFiltro);
    }
    renderizarFila('acceso-rapido-track', cancionesActuales.filter(c => c.seccion === "acceso-rapido"));
    renderizarFila('mas-sonadas-track', cancionesActuales.filter(c => c.seccion === "mas-sonadas"));
    renderizarFila('recomendadas-track', cancionesActuales.filter(c => c.seccion === "recomendadas"));
    renderizarCola();
} 

function renderizarCola() {
    const queueList = document.getElementById('queue-list');
    if (!queueList) return;
    queueList.innerHTML = '';
    cancionesActuales.forEach((cancion, index) => {
        const esActiva = index === indiceActual;
        const imagenPortada = cancion.portada || LOGO_POR_DEFECTO;
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.style.cssText = `display: flex; align-items: center; gap: 12px; padding: 10px; margin-bottom: 8px; border-radius: 8px; cursor: pointer; transition: background 0.2s; background: ${esActiva ? 'rgba(176, 102, 254, 0.15)' : '#0b0b0b'}; border: ${esActiva ? '1px solid var(--neon-purple)' : '1px solid transparent'};`;
        item.innerHTML = `
            <img src="${imagenPortada}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;" onerror="this.src='${LOGO_POR_DEFECTO}'">
            <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 0.85rem; margin: 0 0 2px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: ${esActiva ? 'var(--neon-purple)' : '#fff'}">${cancion.titulo}</h4>
                <p style="font-size: 0.7rem; margin: 0; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cancion.artista}</p>
            </div>
        `;
        item.addEventListener('mouseenter', () => { if(!esActiva) item.style.background = '#1a1a1a'; });
        item.addEventListener('mouseleave', () => { if(!esActiva) item.style.background = '#0b0b0b'; });
        item.addEventListener('click', () => cargarCancion(index, true));
        queueList.appendChild(item);
    });
}

// --- 3. CARGAR CANCIÓN ---
function cargarCancion(index, autoPlay = true) {
    if (cancionesActuales.length === 0) return;
    if (index >= cancionesActuales.length) index = 0;
    if (index < 0) index = cancionesActuales.length - 1;
    
    indiceActual = index;
    const cancion = cancionesActuales[indiceActual];
    const imagenPortada = cancion.portada || LOGO_POR_DEFECTO;

    nowPlayingTitle.textContent = cancion.titulo;
    nowPlayingArtist.textContent = cancion.artista;
    nowPlayingImg.src = imagenPortada;
    nowPlayingImg.onerror = () => { nowPlayingImg.src = LOGO_POR_DEFECTO; };
    audioPlayer.src = cancion.archivo;

    // Configuración de Media Session (Controles sistema)
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: cancion.titulo,
            artist: cancion.artista,
            artwork: [{ src: imagenPortada, sizes: '512x512', type: 'image/png' }]
        });
        navigator.mediaSession.setActionHandler('play', reproducirAudio);
        navigator.mediaSession.setActionHandler('pause', pausarAudio);
        navigator.mediaSession.setActionHandler('previoustrack', () => document.getElementById('prev-btn').click());
        navigator.mediaSession.setActionHandler('nexttrack', () => document.getElementById('next-btn').click());
    }

    renderizarCola(); 
    if (autoPlay) {
        reproducirAudio();
    }
}

// --- 4. CONTROLES DE REPRODUCCIÓN ---
function reproducirAudio() {
    audioPlayer.play().then(() => {
        estaReproduciendo = true;
        centralPlayBtn.innerHTML = "&#10074;&#10074;";
    }).catch(err => console.log("Error al reproducir:", err));
}

function pausarAudio() {
    audioPlayer.pause();
    estaReproduciendo = false;
    centralPlayBtn.innerHTML = "&#9658;";
}

centralPlayBtn.addEventListener('click', () => {
    if (estaReproduciendo) pausarAudio();
    else reproducirAudio();
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (esAleatorio) {
        let indexAleatorio;
        do {
            indexAleatorio = Math.floor(Math.random() * cancionesActuales.length);
        } while (indexAleatorio === indiceActual && cancionesActuales.length > 1);
        cargarCancion(indexAleatorio, true);
    } else {
        cargarCancion(indiceActual + 1, true);
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    cargarCancion(indiceActual - 1, true);
});

// Aleatorio
const shuffleBtn = document.getElementById('shuffle-btn');
shuffleBtn.addEventListener('click', () => {
    esAleatorio = !esAleatorio;
    shuffleBtn.style.color = esAleatorio ? 'var(--neon-purple)' : 'var(--text-main)';
});

// Repetir
const repeatBtn = document.getElementById('repeat-btn');
repeatBtn.addEventListener('click', () => {
    esRepetir = !esRepetir;
    repeatBtn.style.color = esRepetir ? 'var(--neon-purple)' : 'var(--text-main)';
});

// Al terminar canción
audioPlayer.addEventListener('ended', () => {
    if (esRepetir) {
        audioPlayer.currentTime = 0;
        reproducirAudio();
    } else {
        document.getElementById('next-btn').click();
    }
});

// --- 5. BARRA DE PROGRESO Y VOLUMEN ---
audioPlayer.addEventListener('timeupdate', () => {
    if (isNaN(audioPlayer.duration)) return;
    const progreso = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = `${progreso}%`;
    currentTimeEl.textContent = formatearTiempo(audioPlayer.currentTime);
    totalTimeEl.textContent = formatearTiempo(audioPlayer.duration);
});

function formatearTiempo(segundos) {
    const min = Math.floor(segundos / 60);
    const sec = Math.floor(segundos % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

document.getElementById('progress-container').addEventListener('click', (e) => {
    const anchoTotal = e.currentTarget.clientWidth;
    const clicX = e.offsetX;
    audioPlayer.currentTime = (clicX / anchoTotal) * audioPlayer.duration;
});

// Persistencia del volumen
const volumenGuardado = localStorage.getItem('volumen') || 0.5;
audioPlayer.volume = volumenGuardado;
volumeSlider.value = volumenGuardado;

volumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value;
    audioPlayer.volume = vol;
    localStorage.setItem('volumen', vol);
});

// --- 6. INTERFAZ Y ATAJOS ---
// Atajos de teclado
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        centralPlayBtn.click();
    } else if (e.code === 'ArrowRight') {
        document.getElementById('next-btn').click();
    } else if (e.code === 'ArrowLeft') {
        document.getElementById('prev-btn').click();
    }
});

// Abrir/Cerrar cola
const queuePanel = document.getElementById('queue-panel');
document.getElementById('queue-btn').addEventListener('click', () => {
    queuePanel.classList.toggle('open');
});

// Filtros por Género
document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        inicializarPantallaPrincipal(e.target.getAttribute('data-genero'));
    });
});

// Búsqueda
const searchInput = document.getElementById('search-input');
const searchSection = document.getElementById('search-results-section');
const homeSections = document.getElementById('home-sections');
searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    if (termino === '') {
        searchSection.style.display = 'none';
        homeSections.style.display = 'flex';
        return;
    }
    homeSections.style.display = 'none';
    searchSection.style.display = 'block';
    const resultados = baseDeDatos.filter(c => c.titulo.toLowerCase().includes(termino) || c.artista.toLowerCase().includes(termino));
    renderizarFila('search-results-track', resultados);
});

// Expandir reproductor
const bottomPlayer = document.getElementById('bottom-player');
document.getElementById('now-playing-area').addEventListener('click', () => {
    bottomPlayer.classList.add('expanded');
});
document.getElementById('close-player').addEventListener('click', (e) => {
    e.stopPropagation();
    bottomPlayer.classList.remove('expanded');
});

// --- INICIALIZAR REPRODUCTOR ---
window.addEventListener('DOMContentLoaded', () => {
    inicializarPantallaPrincipal();
    cargarCancion(0, false);
});