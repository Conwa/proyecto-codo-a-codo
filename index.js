//FUNCION PARA QUE SE RESALTE EL NAV
const secciones = document.querySelectorAll(".seccion");

const navLi = document.querySelectorAll(
  "ul.navbar-nav.flex-row.gap-2 li a.nav-link"
);

window.onscroll = () => {
  var current = "";

  secciones.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 500) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    const href = a.getAttribute("href");

    if (href === `#${current}`) {
      a.classList.add("active");
    }
  });
};

// FUNCIONES PARA BORRAR Y MOSTRAR EL VALOR DEL FORMULARIOS DE TICKETS.HTML

const eraseButton = document.querySelector("#erase-button");

const clearForm = () => {
  const form = document.querySelector("#entradas-form");
  form.reset();
};
