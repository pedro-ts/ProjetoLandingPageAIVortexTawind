// NavBar
document.addEventListener("DOMContentLoaded", function () {
  const botaoNavAbreFecha = document.getElementById("nav-abre-fecha-btn");
  const navLinksContainer = document.getElementById("nav-links-container");
  const navContainer = document.getElementById("nav-contaier");
  const mainContainer = document.getElementById("main-container");
  const footerContainer = document.getElementById("footer-container");
  const navButtonsContainer = document.getElementById("nav-buttons-container");
  let menuEstaAberto = false;

  if (!botaoNavAbreFecha || !navLinksContainer) {
    return;
  }

  function atualizarEstadoMenu() {
    if (menuEstaAberto) {
        navLinksContainer.classList.remove("hidden");
        navLinksContainer.classList.add("block");

        navContainer.classList.remove("justify-between");
        navContainer.classList.add("flex-col");

        navLinksContainer.classList.add("flex");
        navLinksContainer.classList.add("flex-col");
        
        mainContainer.classList.remove("block");
        mainContainer.classList.add("hidden");
        footerContainer.classList.remove("block");
        footerContainer.classList.add("hidden");

        navButtonsContainer.classList.remove("hidden");
        navButtonsContainer.classList.add("flex");
    } else {
        navLinksContainer.classList.remove("block");
        navLinksContainer.classList.add("hidden");
        
        navContainer.classList.remove("flex-col");
        navContainer.classList.add("justify-between");

        navLinksContainer.classList.remove("flex");
        navLinksContainer.classList.remove("flex-col");

        navButtonsContainer.classList.remove("flex");
        navButtonsContainer.classList.add("hidden");

        mainContainer.classList.add("block");
        mainContainer.classList.remove("hidden");
        footerContainer.classList.add("block");
        footerContainer.classList.remove("hidden");
    }
  }

  botaoNavAbreFecha.addEventListener("click", function () {
    menuEstaAberto = !menuEstaAberto;
    atualizarEstadoMenu();
  });

  atualizarEstadoMenu();
});
