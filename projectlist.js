
const MY_PROJECTS = [
  {
    nama: "YT MP3 Converter",
    status: "In Development",
    warna: "dev",
    desc: "Fast and clean YouTube to MP3 converter tool without annoying pop-up ads.",
    tech: ["Node.js", "FFmpeg"],
    launchLink: "#",
    moreLink: "#",
    type: "standard"
  },
  {
    nama: "Tebak Huruf Jepang",
    status: "Completed",
    warna: "completed",
    desc: "Interactive tool to master Kanji, Hiragana, & Katakana. Features a reference table and scoring system.",
    tech: ["HTML", "CSS", "JS"],
    launchLink: "SkyGhostID-TebakHurufJepang/index.html",
    moreLink: "projects/first/index.html",
    type: "standard"
  },
  {
    nama: "Stone 2.0",
    status: "In Development",
    warna: "dev",
    desc: "The next evolution of WhatsApp automation. Integrating smart logic with Node.js for a robust experience.",
    tech: ["Node.js", "WA-Web.js", "FFmpeg"],
    launchLink: "#",
    moreLink: "#",
    type: "wa-ai-card"
  },
  {
    nama: "AI Chat Bot",
    status: "In Development",
    warna: "dev",
    desc: "Custom LLM integration for a personalized chat experience. Focusing on speed and UI simplicity.",
    tech: ["Python", "API"],
    launchLink: "#",
    moreLink: "#",
    type: "ai-card"
  },
{
    nama: "Dummy Project 1",
    status: "In Development",
    warna: "dev",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["dum", "dum"],
    launchLink: "#",
    moreLink: "#",
    type: "standard"
  },
];

const container = document.getElementById('project-container');

function renderProjects() {
    if (!container) return; // Safety check biar gak error kalau ID gak ketemu
    container.innerHTML = ""; 

    MY_PROJECTS.forEach(project => {
        // Render tech tags
        const techHTML = project.tech.map(t => `<span>${t}</span>`).join(' ');
        
        // Cek status link (kalau "#" berarti disabled)
        const isLaunchDisabled = project.launchLink === "#" ? "disabled" : "";
        const isMoreDisabled = project.moreLink === "#" ? "disabled" : "";

        // Efek khusus card
        const extraEffect = project.type === "wa-ai-card" ? '<div class="neural-network"></div>' : 
                            project.type === "ai-card" ? '<div class="scan-line"></div>' : '';

        const card = `
            <div class="project-item ${project.type !== 'standard' ? project.type : ''}">
                ${extraEffect}
                <div class="project-status ${project.warna}">${project.status}</div>
                <h3>${project.nama}</h3>
                <p>${project.desc}</p>
                <div class="project-tech">
                    ${techHTML}
                </div>
                <a href="${project.launchLink}" target="_blank" class="project-link ${isLaunchDisabled}">Launch Project 🚀</a>
                <a href="${project.moreLink}" target="_blank" class="project-link ${isMoreDisabled}">Learn More</a>
            </div>
        `;

        container.innerHTML += card;
    });
}

// Panggil fungsi render
renderProjects();

