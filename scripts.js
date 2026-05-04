


    // Mobile menu toggle
    document.getElementById('hamburger').onclick = () => {
      document.getElementById('navLinks').classList.toggle('show');
    };
    // Scroll animations
    const sections = document.querySelectorAll('section');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.2 });
    sections.forEach(s => obs.observe(s));
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.onclick = () => {
      document.documentElement.classList.toggle('light');
      themeBtn.textContent = document.documentElement.classList.contains('light') ? '🌙' : '🌓';
    };
    // Skill bars animation
    window.addEventListener('load', () => {
      document.querySelectorAll('.bar-fill').forEach(el => {
        el.style.width = el.getAttribute('data-fill');
      });
    });
    // Back to top
    const toTop = document.getElementById('toTop');
    window.onscroll = () => {
      toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    toTop.onclick = () => window.scrollTo({ top:0, behavior:'smooth' });


    const projectData = {
  jepang: {
    title: "Tebak Huruf Jepang",
    desc: "Project ini gue bikin karena kegabutan yang positif pas lagi belajar Hiragana. Pakai Vanilla JS buat logikanya.",
    tech: "HTML, CSS, JS",
    features: "Scoring system, Hint mode, & Mobile friendly."
  },
  // Tambahin data project lain di sini...
};

function openProject(id) {
  const data = projectData[id];
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h2 style="color:var(--accent)">${data.title}</h2>
    <p style="margin: 20px 0;">${data.desc}</p>
    <ul style="list-style: none;">
      <li><strong>Stack:</strong> ${data.tech}</li>
      <li><strong>Key Features:</strong> ${data.features}</li>
    </ul>
  `;
  
  modal.style.display = "block";
}

// Tutup modal pas klik X
document.querySelector(".close-modal").onclick = () => {
  document.getElementById("projectModal").style.display = "none";
}

// Tutup modal pas klik di luar box
window.onclick = (event) => {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) { modal.style.display = "none"; }
}