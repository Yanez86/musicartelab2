// ===== MUSICARTE — SHARED COMPONENTS =====

function getNavHTML(activePage) {
  const links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'eventi.html',      label: 'Eventi' },
    { href: 'corsi.html',       label: 'Corsi' },
    { href: 'insegnanti.html',  label: 'Insegnanti' },
    { href: 'statuto.html',     label: 'Statuto' },
  ];

  const linksHTML = links.map(l =>
    `<li><a href="${l.href}" class="${activePage === l.href ? 'active' : ''}">${l.label}</a></li>`
  ).join('');

  return `
    <nav class="nav" role="navigation" aria-label="Navigazione principale">
      <a href="index.html" class="nav-logo">
        <div>
          MusicArte
          <span>A.P.S.</span>
        </div>
      </a>
      <ul class="nav-links" id="navLinks">${linksHTML}</ul>
      <button class="nav-hamburger" id="navToggle" aria-label="Apri menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

function getFooterHTML() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">

          <div>
            <span class="footer-logo">MusicArte</span>
            <p class="footer-tagline">Associazione di Promozione Sociale</p>
            <p style="font-size:0.83rem;opacity:0.7;max-width:280px;line-height:1.6;">
              Promuoviamo la cultura musicale sul territorio, offrendo corsi, eventi 
              e opportunità di crescita artistica per tutte le età.
            </p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram" title="Instagram">&#9824;</a>
              <a href="#" aria-label="Facebook" title="Facebook">&#9827;</a>
              <a href="#" aria-label="YouTube" title="YouTube">&#9829;</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigazione</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="eventi.html">Eventi</a></li>
              <li><a href="corsi.html">Corsi</a></li>
              <li><a href="insegnanti.html">Insegnanti</a></li>
              <li><a href="statuto.html">Statuto</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Corsi</h4>
            <ul>
              <li><a href="corsi.html">Chitarra</a></li>
              <li><a href="corsi.html">Canto</a></li>
              <li><a href="corsi.html">Basso</a></li>
              <li><a href="corsi.html">Batteria</a></li>
              <li><a href="corsi.html">Pianoforte</a></li>
            </ul>
          </div>

          <div class="footer-col footer-info">
            <h4>Contatti & Info</h4>
            <p><strong>Indirizzo:</strong> Via della Musica, 12 — 00100 Roma (RM)</p>
            <p><strong>Telefono:</strong> +39 06 000 0000</p>
            <p><strong>Email:</strong> info@musicarte.aps.it</p>
            <p><strong>C.F.:</strong> 00000000000</p>
            <p><strong>Iscr. RUNTS:</strong> n. 00000 del 01/01/2020</p>
            <p><strong>Orari:</strong> Lun–Ven 09:00–20:00</p>
          </div>

        </div>

        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} MusicArte A.P.S. — Tutti i diritti riservati</span>
          <span>Associazione di Promozione Sociale ai sensi del D.Lgs. 117/2017</span>
        </div>
      </div>
    </footer>
  `;
}

function initNav(activePage) {
  document.getElementById('nav-placeholder').innerHTML = getNavHTML(activePage);
  document.getElementById('footer-placeholder').innerHTML = getFooterHTML();

  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
