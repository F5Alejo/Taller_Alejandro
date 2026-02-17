document.addEventListener("DOMContentLoaded", function(){
// Script para el funcionamiento del scroll
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

  // Script para las estrellas
  tsParticles.load("tsparticles", {
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 150,
        color: "#fefefe",
        opacity: 0.8,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 120 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });

});
