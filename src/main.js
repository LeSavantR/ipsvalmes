// Funciones de despliegue
function navBarDisplay (elem) {
  const currDisplayStyle = elem.style.display;
  if (currDisplayStyle ===  "none" || currDisplayStyle === " ") {
    elem.style.display = "block"
  } else {
    elem.style.display = "none"
  }
}

// Obtener elementos
const button = document.querySelector("#buttonMenu");
const menuBar = document.querySelector(".menu_bar");