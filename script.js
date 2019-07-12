function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    //change css
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    //change emoji
    body.className == "dark-mode" ?  document.getElementById("darklightbtn").innerHTML = "🌙" : document.getElementById("darklightbtn").innerHTML = "☀️";
  }
  
