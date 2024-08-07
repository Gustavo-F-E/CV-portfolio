import barraDeProgreso from "./progress_bar.js";
//import tarjetaDeServicios from "./tarjeta_de_servicios.js";
//import portfolio from "./portfolio.js";
import traducir from "./data_binding_translate.js";
import traducir_elementos_formulario from "./traducir_elementos_formulario.js";
import CV_segun_idioma from "./CV_según_idioma.js";

const d = document;

/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".hamburguer-menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/your@email.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);




d.addEventListener("DOMContentLoaded", (e) => {
  
  /* ********** Carga de imagen de más definicion ********** */
  setTimeout(() => {
    let elemento = d.getElementById("hero-inicio");
    elemento.style.backgroundimage = "url(assets/web-developer.jpg)";
  }, 1);

  /* ********** Carga de barra de progreso ********** */
  barraDeProgreso();

  /* ********** Carga de tarjeta de servicios ********** */
  //tarjetaDeServicios();

  /* ********** Carga del portfolio ********** */
  //portfolio();

  /* ********** Traducciones ********** */
  traducir('js/traduccion.json');
  traducir('js/modal.json');
  traducir('js/parte_final.json');
  traducir_elementos_formulario();
  CV_segun_idioma();
})




