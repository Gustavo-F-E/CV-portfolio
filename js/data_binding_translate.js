export default function traducir(ruta) {
  fetch(ruta) // Cargar el archivo JSON
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
      }
      return response.json(); // Parsear la respuesta como JSON
    })
    .then(data => {
      const translations = data;

      function updateElements(language) {
        Object.keys(translations).forEach(key => {
          const element = document.querySelector(`[data-binding="${key}"]`);
          if (element && translations[key][language]) {
            element.textContent = translations[key][language];
          } else {
            console.warn(`No se encontró la traducción para la clave: ${key} en el idioma: ${language}`);
          }
        });
      }

      const langLinks = document.querySelectorAll("#dropdown-content a");
      langLinks.forEach(link => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const language = event.target.getAttribute("data-lang");
          updateElements(language);
          console.log(`Idioma cambiado a: ${language}`);
        });
      });

      // Set initial language to Spanish
      updateElements('espaniol');
      console.log('Idioma inicial configurado a Español');
    })
    .catch(error => console.error('Error al cargar los datos:', error)); // Manejar errores
}
