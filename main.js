// main.js - Shared JavaScript for all pages

// Simple include helper to load header/footer
function include(path, containerId, onload) {
    fetch(path).then(function (r) {
        if (!r.ok) throw new Error('Failed to load ' + path);
        return r.text();
    }).then(function (html) {
        document.getElementById(containerId).innerHTML = html;
        if (typeof onload === 'function') onload();
    }).catch(function (err) {
        console.error(err);
    });
}

// Highlight current page in navigation
function highlightNav() {
    var current = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('#main-nav .nav-link');
    links.forEach(function (a) {
        var href = a.getAttribute('href');
        if (href === current || (href === 'index.html' && current === '')) {
            a.setAttribute('aria-current', 'page');
        } else {
            a.removeAttribute('aria-current');
        }
    });
}

// Wire up mobile navigation toggle
function wireNavToggle() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.getElementById('main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
    });
}

// Set current year in footer
function setYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
}

// Initialize on page load
(function () {
    include('header.html', 'header-placeholder', function () {
        highlightNav();
        wireNavToggle();
    });
    include('footer.html', 'footer-placeholder', setYear);
})();
