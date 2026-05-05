window.addEventListener('load', () => {
    const statusMsg = document.getElementById('status-msg');
    const progressBar = document.getElementById('progress-bar');
    const statusPercent = document.getElementById('status-percent');
    const preloader = document.getElementById('preloader');

    const loadingSteps = [
        { percent: 10, msg: "Initializing Core Modules..." },
        { percent: 25, msg: "Establishing Neural Links..." },
        { percent: 45, msg: "Syncing Bodybuilding Data..." },
        { percent: 60, msg: "Optimizing Knight Protocols..." },
        { percent: 85, msg: "Scanning Project Repositories..." },
        { percent: 100, msg: "System Ready. Welcome, Knight." }
    ];

    let currentStep = 0;

    const runLoading = () => {
        if (currentStep < loadingSteps.length) {
            const step = loadingSteps[currentStep];
            
            // Update Teks & Bar
            statusMsg.innerText = step.msg;
            progressBar.style.width = step.percent + "%";
            statusPercent.innerText = step.percent + "%";

            // Kecepatan random biar berasa lagi "kerja" beneran
            let nextStepDelay = Math.random() * 400 + 300; 
            
            currentStep++;
            setTimeout(runLoading, nextStepDelay);
        } else {
            // Selesai loading, tutup preloader
            setTimeout(() => {
                preloader.classList.add('loader-hidden');
                document.body.classList.add('ready');
            }, 500);
        }
    };

    runLoading();
});

const MY_PROJECTS = [
  {
    nama: "YT MP3 Converter",
    status: "In Development",
    warna: "dev",
    desc: "Fast and clean YouTube to MP3 converter tool without annoying pop-up ads.",
    tech: ["Node.js", "FFmpeg"],
    launchLink: "#",
    moreLink: "projects/3/index.html",
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
    moreLink: "projects/4/index.html",
    type: "wa-ai-card"
  },
  {
    nama: "AI Chat Bot",
    status: "In Development",
    warna: "dev",
    desc: "Custom LLM integration for a personalized chat experience. Focusing on speed and UI simplicity.",
    tech: ["Python", "API"],
    launchLink: "#",
    moreLink: "projects/2/index.html",
    type: "ai-card"
  },
{
    nama: "Dummy Project 1",
    status: "In Development",
    warna: "dev",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["dum", "dum"],
    launchLink: "#",
    moreLink: "projects/2/index.html",
    type: "standard"
  },
{
    nama: "Dummy Project 1",
    status: "In Development",
    warna: "dev",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["dum", "dum"],
    launchLink: "#",
    moreLink: "projects/2/index.html",
    type: "standard"
  },
{
    nama: "Dummy Project 1",
    status: "In Development",
    warna: "dev",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["dum", "dum"],
    launchLink: "#",
    moreLink: "projects/2/index.html",
    type: "standard"
  }
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

        // STRUKTUR DISAMAIN PERSIS DENGAN HTML MANUAL LO
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

// --- TARUH KODE HAMBURGER / DARK MODE LO DI BAWAH SINI ---