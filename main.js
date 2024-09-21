onload = () => {
        document.body.classList.remove("container");
    
        // Reproducir la música si no se ha iniciado previamente
        let bgMusic = document.getElementById("bgMusic");
        let musicPlayed = localStorage.getItem("musicPlayed");
    
        if (!musicPlayed) {
            bgMusic.play();
            localStorage.setItem("musicPlayed", "true");
        }
    };
    