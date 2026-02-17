document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SIDEBAR TOGGLE
  =============================== */
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
  });


  /* ===============================
     SCROLL REVEAL ANIMATION
  =============================== */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // mejora rendimiento
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(reveal => observer.observe(reveal));


  /* ===============================
     ACTIVE NAV LINK ON SCROLL
     (MUY IMPORTANTE PARA PORTAFOLIO PRO)
  =============================== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


  /* ===============================
     PARTICLES BACKGROUND
  =============================== */
  tsParticles.load("tsparticles", {
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: "#2563eb" }, // ahora coherente con tu tema
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.2,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5, // más elegante, menos agresivo
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
        repulse: { distance: 100 },
        push: { quantity: 3 }
      }
    },
    detectRetina: true
  });

});
