document.addEventListener("DomContentLoaded", function () {
    const confettiContainer = document.getElementById("confetti-container");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
        confetti.style.animationDelay = Math.random() + "s"
    
        confettiContainer.appendChild(confetti);

        confetti.addEventListener("animationend", function () {
            confetti.remove();
        });
    }    

    function loop() {
        createConfetti();
        requestAnimationFrame(loop);
    }

    loop();
});