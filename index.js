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

const clearForm = () => {
  const form = document.querySelector("#entradas-form");
  form.reset();
};

const ESTUDIANTE = "estudiante";
const TRAINEE = "trainee";
const JUNIOR = "junior";

const form = document.querySelector("#entradas-form");

const calcularEntradas = (e) => {
  e.preventDefault();
  let valorDeEntradas = 0;

  const cantidad = document.querySelector("#exampleInputCantidad").value;
  const tipoDeEntrada = document.querySelector("#exampleInputCategoria").value;

  switch (tipoDeEntrada) {
    case ESTUDIANTE:
      valorDeEntradas = (cantidad * 200 * 20) / 100;
      console.log(valorDeEntradas);
      break;
    case TRAINEE:
      valorDeEntradas = (cantidad * 200 * 50) / 100;
      console.log(valorDeEntradas);
      break;
    case JUNIOR:
      valorDeEntradas = (cantidad * 200 * 85) / 100;
      console.log(valorDeEntradas);
      break;
    default:
      console.log("no funciona");
  }

  setTimeout(() => {
    form.reset();
  }, 3000);
};

form.addEventListener("submit", calcularEntradas);
