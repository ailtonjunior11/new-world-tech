// Ininialização do botão subir para o topo
const backToTopButton = document.getElementById("back-to-top");
const scrollThreshold = 200; // Aqui se define o limite de rolagem para que o botão apareça.

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}); // Aqui se adiciona um evento de rolagem na janela, que verifica se a rolagem é maior que o limite definido, e mostra ou esconde o botão de voltar ao topo.

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
}); // Aqui se adiciona um evento de clique no botão de voltar ao topo.

// Menu sendo inicializado

// Aqui se busca os elementos do HTML que serão manipulados pelo JavaScript
const menuButton = document.querySelector(".menu-button");
const menuButtonOpen = menuButton.querySelector(".open-button");
const menuButtonClose = menuButton.querySelector(".close-button");
const sideMenu = document.querySelector(".side-menu");
const linkMenu = document.querySelectorAll(".link-menu");
const mainContent = document.querySelector(".main-content");
const background = document.querySelector(".background");

menuButton.addEventListener("click", () => {
  if (menuButtonOpen.style.display === "none") {
    menuButtonOpen.style.display = "inline";
    menuButtonClose.style.display = "none";
  } else {
    menuButtonOpen.style.display = "none";
    menuButtonClose.style.display = "inline";
  } // Aqui se verifica se o botão de abrir está visível, se sim, ele é fechado, caso contrário, ele é aberto

  sideMenu.classList.toggle("active");
  mainContent.classList.toggle("active");
  menuButton.classList.toggle("active");
  background.classList.toggle("active");
}); // Aqui se adiciona o evento de clique no botão do menu, que adiciona ou remove a classe "active" do menu lateral, do conteúdo principal e do botão do menu, e também muda a cor de fundo do body.

background.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  mainContent.classList.remove("active");
  menuButton.classList.remove("active");
  background.classList.remove("active");

  if (menuButtonOpen.style.delay === "inline") {
    menuButtonOpen.style.display = "none";
    menuButtonClose.style.display = "inline";
  } else {
    menuButtonOpen.style.display = "inline";
    menuButtonClose.style.display = "none";
  } // Nesse evento, quando o usuário clicar na área de fundo, o menu lateral, o conteúdo principal e o botão do menu são fechados.
}); // Aqui se adiciona o evento de clique no background, que remove a classe "active" do menu lateral, do conteúdo principal e do botão do menu, e também muda a cor de fundo do body.

function toggleMenu() {
  document.querySelector(".side-menu").classList.toggle("active");
  document.querySelector(".menu-button").classList.toggle("active");

  background.classList.remove("active");
  mainContent.classList.remove("active");

  if (menuButtonOpen.style.display === "none") {
    menuButtonOpen.style.display = "inline";
    menuButtonClose.style.display = "none";
  } else {
    menuButtonOpen.style.display = "none";
    menuButtonClose.style.display = "inline";
  }
} // Aqui se cria a função toggleMenu, que é chamada quando o usuário clica em um link do menu lateral, e fecha o menu lateral, o conteúdo principal e o botão do menu.

// Swiper sendo inicializado
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 5000,
  },

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); // Aqui se configura o Swiper, que é um plugin para criar carrosséis de imagens.

// Particles.js sendo inicializado
particlesJS({
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}); // Aqui se configura o Particles.js, que é um plugin para criar partículas animadas no fundo da página.
// O Particles.js é usado para criar um efeito visual de partículas que se movem e interagem com o mouse do usuário.

// ScrollReveal sendo inicializado
const sr = ScrollReveal({ reset: true });

// Seção Home
sr.reveal("h1", {
  origin: "left",
  distance: "100px",
  duration: 1700,
  delay: 200,
});

sr.reveal(".home-text p", {
  origin: "bottom",
  distance: "50px",
  duration: 1800,
  delay: 500,
});

sr.reveal(".home-btn", {
  origin: "left",
  distance: "200px",
  duration: 2000,
  delay: 700,
});

sr.reveal(".home-img", {
  origin: "top",
  distance: "100px",
  duration: 2800,
  delay: 500,
});

// Seção About
sr.reveal(".about-img", {
  distance: "0px",
  opacity: 0,
  duration: 2000,
  delay: 300,
});

sr.reveal(".facebook-link", {
  origin: "top",
  distance: "100px",
  duration: 1100,
  delay: 1050,
});

sr.reveal(".instagram-link", {
  origin: "top",
  distance: "120px",
  duration: 1200,
  delay: 1150,
});

sr.reveal(".whatsapp-link", {
  origin: "top",
  distance: "140px",
  duration: 1300,
  delay: 1250,
});

sr.reveal(".x-twitter-link", {
  origin: "top",
  distance: "160px",
  duration: 1400,
  delay: 1350,
});

sr.reveal(".about-text h2", {
  origin: "right",
  distance: "150px",
  duration: 1600,
  delay: 500,
});

sr.reveal(".about-text p", {
  origin: "right",
  distance: "250px",
  duration: 1600,
  delay: 700,
});

sr.reveal(".about-text .btn-saiba-mais", {
  origin: "bottom",
  distance: "280px",
  duration: 1500,
  delay: 800,
});

// Seção contacts
sr.reveal(".contact-facebook-link", {
  distance: "0",
  opacity: 0,
  duration: 1600,
  delay: 300,
});

sr.reveal(".contact-instagram-link", {
  distance: "0",
  opacity: 0,
  duration: 1600,
  delay: 600,
});

sr.reveal(".contact-whatsapp-link", {
  distance: "0",
  opacity: 0,
  duration: 1600,
  delay: 900,
});

sr.reveal(".contact-x-twitter-link", {
  distance: "0",
  opacity: 0,
  duration: 1600,
  delay: 1200,
});

sr.reveal("form h3", {
  origin: "top",
  distance: "25px",
  duration: 1000,
  delay: 300,
});

sr.reveal("form .input-name", {
  origin: "bottom",
  distance: "30px",
  duration: 1200,
  delay: 500,
});

sr.reveal("form .input-email", {
  origin: "bottom",
  distance: "40px",
  duration: 1300,
  delay: 700,
});

sr.reveal("form .input-phone", {
  origin: "bottom",
  distance: "50px",
  duration: 1400,
  delay: 900,
});

sr.reveal("form .textarea", {
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 1100,
});

sr.reveal("form .btn-submit", {
  origin: "bottom",
  distance: "25px",
  duration: 1600,
  delay: 1200,
});
