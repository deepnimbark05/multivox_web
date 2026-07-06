/* ============================================
   MultiVox — Main Script
   Mobile nav, scroll animations, music player
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Mobile Nav ---------- */
    const toggle = document.getElementById('navToggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('active'));
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));
        document.addEventListener('click', e => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('active');
        });
    }

    /* ---------- Navbar Scroll ---------- */
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.boxShadow = window.scrollY > 20
                ? '0 6px 0px #1A1A1A'
                : '0 4px 0px #1A1A1A';
        });
    }

    /* ---------- Scroll Animations ---------- */
    const fadeEls = document.querySelectorAll('.fade-in');
    const cards = document.querySelectorAll('.feat-card, .req-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vis');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
    cards.forEach(card => observer.observe(card));

    /* ---------- Smooth Scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Music Player ---------- */
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const iconOn = document.getElementById('musicIconOn');
    const iconOff = document.getElementById('musicIconOff');

    function showPlaying() {
        musicBtn.classList.add('playing');
        iconOn.style.display = 'block';
        iconOff.style.display = 'none';
    }

    function showPaused() {
        musicBtn.classList.remove('playing');
        iconOn.style.display = 'none';
        iconOff.style.display = 'block';
    }

    function toggleMusic() {
        if (!bgMusic) return;
        if (bgMusic.paused) {
            bgMusic.play().then(() => showPlaying()).catch(() => {});
        } else {
            bgMusic.pause();
            showPaused();
        }
    }

    if (musicBtn) {
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMusic();
        });
    }

    /* Try auto-play immediately */
    if (bgMusic) {
        bgMusic.volume = 0.3;
        bgMusic.muted = true;
        bgMusic.play().then(() => {
            showPlaying();
            setTimeout(() => { bgMusic.muted = false; }, 500);
        }).catch(() => {});

        /* Retry on first interaction */
        function enableAudio() {
            bgMusic.muted = false;
            bgMusic.play().then(() => showPlaying()).catch(() => {});
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('scroll', enableAudio);
            document.removeEventListener('keydown', enableAudio);
        }
        document.addEventListener('click', enableAudio);
        document.addEventListener('scroll', enableAudio);
        document.addEventListener('keydown', enableAudio);
    }

});