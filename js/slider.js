document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevSlideButton = document.getElementById("prevSlide");
    const nextSlideButton = document.getElementById("nextSlide");
    const playPauseButton = document.getElementById("playPause");
  
    let aktuelleFolieIndex = 0;
    let istAutoPlayAktiv = true;
    let autoPlayIntervall;
  
    function zeigeFolie(index) {
      const folien = slider.querySelectorAll("img");
      folien.forEach((folie, i) => {
        folie.style.display = i === index ? "block" : "none";
      });
    }
  
    function naechsteFolie() {
      aktuelleFolieIndex += 1;
      if (aktuelleFolieIndex >= slider.childElementCount) {
        aktuelleFolieIndex = 0;
      }
      zeigeFolie(aktuelleFolieIndex);
      autoPlayNeustart();
    }
  
    function vorherigeFolie() {
      aktuelleFolieIndex -= 1;
      if (aktuelleFolieIndex < 0) {
        aktuelleFolieIndex = slider.childElementCount - 1;
      }
      zeigeFolie(aktuelleFolieIndex);
      autoPlayNeustart();
    }
  
    function toggleAutoPlay() {
      istAutoPlayAktiv = !istAutoPlayAktiv;
      playPauseButton.textContent = istAutoPlayAktiv ? "Pause" : "Play";
      if (istAutoPlayAktiv) {
        autoPlayIntervall = setInterval(naechsteFolie, 3000);
      } else {
        clearInterval(autoPlayIntervall);
      }
    }
  
    function autoPlayNeustart() {
      if (istAutoPlayAktiv) {
        clearInterval(autoPlayIntervall);
        autoPlayIntervall = setInterval(naechsteFolie, 3000);
      }
    }
  
    prevSlideButton.addEventListener("click", vorherigeFolie);
    nextSlideButton.addEventListener("click", naechsteFolie);
    playPauseButton.addEventListener("click", toggleAutoPlay);
  
    zeigeFolie(aktuelleFolieIndex);
    autoPlayIntervall = setInterval(naechsteFolie, 3000);
  });
  