const d = document;

const datos_portfolio = [
  [ 1,
    "assets/Descubriendo-Argentina2.png",
    "Descubriendo Argentina",
    "Proyecto perteneciente al desarrollo web de una página estática en el curso de FullStack Python de 2022.",
    "Codo a codo 4.0",
    "12/2022",
    "Front End",
    "https://descubriendo-argentina-gfe.netlify.app/",
    "https://github.com/Gustavo-F-E/descubriendo-argentina.git"
  ],
  [ 2,
    "assets/veterinaria2.png",
    "Veterinaria",
    "Proyecto perteneciente al desarrollo web de una página estática en el curso de Django de 2023.",
    "Codo a codo 4.0",
    "06/23",
    "Front End",
    "https://veterinaria-cac-django.netlify.app/",
    "https://github.com/Gustavo-F-E/veterinaria_con_sass"
  ],
  [ 3,
    "assets/ansys.png",
    "Analisis estructural en ANSYS",
    "Analisis y resolución de un problema de relativa complejidad mediante el uso de ANSYS APDL.",
    "CNEA",
    "2023",
    "FEM",
    "https://www.linkedin.com/pulse/m%25C3%25A9todo-del-corte-incremental-para-la-medici%25C3%25B3n-de-en-tubos-eichhorn-rcfjf/?trackingId=SqWdHvxxQwSbbtBRHKsjVA%3D%3D",
    "https://www.linkedin.com/pulse/m%25C3%25A9todo-del-corte-incremental-para-la-medici%25C3%25B3n-de-en-tubos-eichhorn-rcfjf/?trackingId=SqWdHvxxQwSbbtBRHKsjVA%3D%3D"
  ],
  [ 4,
    "assets/carem.png",
    "Desarrollo de un Plan de Inspeccion en servicio",
    "Propuesta de un plan de inspeccion en servicio (ISI) para el reactor de la Central CAREM-25.",
    "CNEA-Proyecto CAREM 25",
    "2018",
    "Informe Técnico de viabilidad",
    "https://www.linkedin.com/posts/gustavo-francisco-eichhorn_52078586pdf-activity-7160696237552287744-RPAk?utm_source=share&utm_medium=member_desktop",
    "https://lnkd.in/dF9jav5r"
  ],
  [ 5,
    "assets/imagen-generica.png",
    "Tesis de maestría",
    "Proximamente",
    "Instituto sábato",
    "2024",
    "Tesis de Maestría",
    "#",
    "#"
  ],
  [ 6,
    "assets/imagen-generica.png",
    "Micrografías",
    "Proximamente",
    "Instituto Sábato",
    "2024",
    "Trabajo de Laboratorio",
    "#",
    "#"
  ],
  ];

let item_portfolio = d.getElementById("container-portfolio");

export default function portfolio() {
  datos_portfolio.forEach(e => {
    item_portfolio.innerHTML += `
        <a href="#trabajo-${e[0]}" class="portfolio-card">
        <img src="${e[1]}" alt="${e[2]}">
        <aside class="portfolio-card-info">
          <div>
            <h3>${e[2]}</h3>
            <p>${e[3]}</p>
          </div>
        </aside>
        </a>
      `;
    let item_modal_portfolio = d.getElementById(`trabajo-${e[0]}`);
    item_modal_portfolio.innerHTML = `
    <div class="modal-content">
    <a href="#cerrar" class="modal-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
      </svg>
    </a>
    <article class="portfolio-modal">
      <img src="${e[1]}" alt="${e[2]}">
      <div class="portfolio-info">
        <h3>${e[2]}</h3>
        <p>${e[3]}
          <br>
          </p>
        <aside class="portfolio-details">
          <small><b>CLIENTE:</b></small>
          <small>${e[4]}</small>
          <small><b>FECHA:</b></small>
          <small>${e[5]}</small>
          <small><b>TIPO:</b></small>
          <small>${e[6]}</small>
          <small><b>Enlace al sitio:</b></small>
          <small><a href="${e[7]}" target="_blank" rel="noopener noreferrer">Link</a></small>
          <small><b>Enlace al repositorio:</b></small>
          <small><a href="${e[8]}" target="_blank" rel="noopener noreferrer">Link</a></small>
        </aside>
      </div>
    </article>
  </div>
      `;
  });
};