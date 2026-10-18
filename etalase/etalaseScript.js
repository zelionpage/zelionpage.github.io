const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.onclick = () => {
        document.getElementById('navLinks')?.classList.toggle('show');
    };
}

let currentLang = localStorage.getItem('lang') || 'en';
let MY_PROJECT = [];

const grid = document.getElementById('etalaseGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const emptyState = document.getElementById('emptyState');
const langBtn = document.getElementById('langToggle');

let currentFilter = 'all';

// Load data projects dari file projects.json
async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    MY_PROJECT = await response.json();
    renderProjects();
  } catch (error) {
    console.error('Gagal memuat projects.json:', error);
  }
}

function renderProjects() {
  const query = searchInput.value.toLowerCase().trim();
  grid.innerHTML = '';
  let visibleCount = 0;

  MY_PROJECT.forEach(item => {
    const tTitle = item.title[currentLang].toLowerCase();
    const tDesc = item.description[currentLang].toLowerCase();
    const matchesSearch = tTitle.includes(query) || tDesc.includes(query) || item.techStack.some(t => t.toLowerCase().includes(query));
    const matchesCategory = currentFilter === 'all' || item.category === currentFilter;

    if (matchesSearch && matchesCategory) {
      visibleCount++;
      const card = document.createElement('div');
      card.className = `project-item ${item.isFeatured ? 'featured' : ''}`;
      card.setAttribute('data-category', item.category);

      card.innerHTML = `
        ${item.isFeatured ? `<div class="featured-ribbon">${currentLang === 'en' ? 'POPULAR' : 'POPULER'}</div>` : ''}
        <div>
          <div class="project-status ${item.statusClass}">${item.statusText[currentLang]}</div>
          <span class="item-price" style="${item.priceStyle}">${item.price}</span>
          <h3>${item.title[currentLang]}</h3>
          <p>${item.description[currentLang]}</p>
          <div class="project-tech">
            ${item.techStack.map(tech => `<span>${tech}</span>`).join('')}
          </div>
        </div>
        <a href="${item.linkUrl}" target="_blank" class="project-link">${item.linkText[currentLang]}</a>
      `;
      grid.appendChild(card);
    }
  });

  emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
}

function updateStaticLanguage() {
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) el.textContent = text;
  });
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'ID' : 'EN';
  }
  localStorage.setItem('lang', currentLang);
}

// Initial setup
updateStaticLanguage();
loadProjects();

searchInput.addEventListener('input', renderProjects);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderProjects();
  });
});

if (langBtn) {
  langBtn.onclick = () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    updateStaticLanguage();
    renderProjects();
  };
}