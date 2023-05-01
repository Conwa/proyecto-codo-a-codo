const secciones = document.querySelectorAll(".seccion");

const navLi = document.querySelectorAll(
  "ul.navbar-nav.flex-row.gap-2 li a.nav-link"
);

console.log(navLi);

window.onscroll = () => {
  var current = "";

  secciones.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
      console.log(current);
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    const href = a.getAttribute("href");
    console.log(href);
    if (href === `#${current}`) {
      a.classList.add("active");
    }
  });
};
