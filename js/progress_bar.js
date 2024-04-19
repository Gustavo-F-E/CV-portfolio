const d = document;

const datos_barra = [
["Autodesk Inventor", 90],
["Solid Works", 80],
["SolidEdge", 80],
["ANSYS & ANSYS APDL", 90],
["HTML, CSS & JS", 80],
["ReactJS", 70],
["Python", 75],
["NodeJS", 70],
["Django", 80],
["MERN", 70],
["MySQL", 75],
["PostgreSQL", 70],
["MongoDB", 75],
  ];

let item_barra = d.getElementById("barra-de-progreso");

export default function barraDeProgreso() {
  datos_barra.forEach(e => {
    item_barra.innerHTML +=`
    <div class="progress">
    <p>
      <b><i>${e[0]}</i></b>
      <b>"${e[1]}%"</b>
    </p>
    <progress value=${e[1]} min="0" max="100"></progress>
  </div>`
  });
};





