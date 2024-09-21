onload = () => {
        document.body.classList.remove("container");
        
        // Reproducir la música si no se ha iniciado previamente
        let bgMusic = document.getElementById("bgMusic");
        let isPlaying = localStorage.getItem("isPlaying");
    
        // Continuar la música si ya estaba sonando en otra página
        if (isPlaying === "true") {
            bgMusic.play();
        }
    
        // Detectar si el usuario hace clic para empezar la música (en caso de que autoplay esté bloqueado)
        document.addEventListener("click", function() {
            bgMusic.play();
            localStorage.setItem("isPlaying", "true");
        });
    
        // Guardar el estado de la música cuando el usuario sale de la página
        window.onbeforeunload = function() {
            if (!bgMusic.paused) {
                localStorage.setItem("isPlaying", "true");
            } else {
                localStorage.setItem("isPlaying", "false");
            }
        };
    };
    
