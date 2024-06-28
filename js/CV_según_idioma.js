export default function CV_segun_idioma() {
  const CV = document.getElementById('curriculum_vitae');
  //const href = CV.getAttribute("href");

  function updateElements(language) {

    if (language === 'en') {
      CV.href = "assets/CV_2024_Mechanical Engineer.pdf";
    } else if (language === 'de') {
      CV.href = "assets/CV_2024_Maschinenbauingenieur.pdf";
    } else if (language === 'pt') {
      CV.href = "assets/CV_2024_Engenheiro Mecanico.pdf";
    } else {
      CV.href = "assets/CV_2024_Ingeniero Mecanico.pdf";
    }

    }

    const langLinks = document.querySelectorAll("#dropdown-content a");
    langLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const language = event.target.getAttribute("data-lang");
            updateElements(language);
            console.log(`Idioma CV cambiado a: ${language}`);
        });
    });
}