tsParticles.loadJSON("tsparticles", "particles.json");

function toggleDarkLight() {
    const body = document.getElementById("body");
    const currentClass = body.className;
    //set class to current
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
    //change emoji and particles
    body.className == "light-mode" ? (document.getElementById("darklightbtn").innerHTML = "🌙", tsParticles.loadJSON("tsparticles", "particles.json")) : (document.getElementById("darklightbtn").innerHTML = "☀️", tsParticles.loadJSON("tsparticles", "darkparticles.json"));
  }