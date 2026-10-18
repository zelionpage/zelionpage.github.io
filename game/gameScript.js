  
        function switchGame(gameKey) {
            window.location.href = `?game=${gameKey}`;
        }

        async function loadData() {
            try {
                // 1. Cek path data.json (ubah jadi './data.json' atau '../../data.json' jika perlu)
                const response = await fetch('../data.json');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const masterData = await response.json();

                const urlParams = new URLSearchParams(window.location.search);
                const gameKey = urlParams.get('game') || 'mlbb'; 

                const switcher = document.getElementById('gameSwitcher');
                if (switcher) switcher.value = gameKey;

                const data = masterData[gameKey];

                if (!data) {
                    throw new Error(`Key game "${gameKey}" tidak ditemukan di dalam data.json!`);
                }

                // Dynamic Styling berdasarkan Game
                const ignEl = document.getElementById('player-ign');
                const avatarContainer = document.getElementById('avatar-container');

                if (gameKey === 'ff') {
                    ignEl.className = 'text-2xl md:text-3xl font-black text-gradient-fire tracking-wide uppercase';
                    avatarContainer.classList.add('ff-theme');
                } else {
                    ignEl.className = 'text-2xl md:text-3xl font-black text-gradient-gold tracking-wide uppercase';
                    avatarContainer.classList.remove('ff-theme');
                }

                // Inject Data Dasar ke HTML
                document.getElementById('player-avatar').src = data.avatar_url;
                document.getElementById('player-ign').innerText = data.player_name;
                document.getElementById('player-rank').innerText = data.rank_title;
                document.getElementById('player-bio').innerText = data.player_bio;
                document.getElementById('video-embed').src = data.video_url;

                // --- RENDER STATS ---
                const statsContainer = document.getElementById('stats-container');
                statsContainer.innerHTML = ''; 

                if (data.stats && Array.isArray(data.stats)) {
                    statsContainer.style.gridTemplateColumns = `repeat(${data.stats.length}, minmax(0, 1fr))`;

                    data.stats.forEach(stat => {
                        const statCard = document.createElement('div');
                        statCard.className = 'stat-box p-4 rounded-2xl bg-[#1e2330] border border-gray-800 shadow-lg';
                        statCard.innerHTML = `
                            <p class="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-wider">${stat.label}</p>
                            <p class="text-sm md:text-base font-extrabold text-amber-400 mt-1">${stat.value}</p>
                        `;
                        statsContainer.appendChild(statCard);
                    });
                }

            } catch (error) {
                console.error("Gagal memuat data JSON:", error);
                // Tampilkan pesan error langsung di layar agar kelihatan
                document.getElementById('player-ign').innerText = "ERROR LOAD DATA";
                document.getElementById('player-bio').innerText = error.message;
            }
        }

        window.onload = loadData;
    