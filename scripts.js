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

  document.body.style.backgroundColor = sideMenu.classList.contains("active")
    ? "#8f00ff"
    : "#0f2027";
}); // Aqui se adiciona o evento de clique no botão do menu, que adiciona ou remove a classe "active" do menu lateral, do conteúdo principal e do botão do menu, e também muda a cor de fundo do body.

background.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  mainContent.classList.remove("active");
  menuButton.classList.remove("active");
  background.classList.remove("active");

  document.body.style.backgroundColor = "#0f2027";

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
  document.body.style.backgroundColor = "#0f2027";

  background.classList.remove("active");
  mainContent.classList.remove("active");

  if (menuButtonOpen.style.display === "none") {
    menuButtonOpen.style.display = "inline";
    menuButtonClose.style.display = "none";
  } else {
    menuButtonOpen.style.display = "none";
    menuButtonClose.style.display = "inline";
  }
}

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
