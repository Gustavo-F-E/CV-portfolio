export default function traducir_elementos_formulario() {
  const formulario = document.getElementById('formulario');
  const email = formulario.querySelector('input[name="email"]');
  const name = formulario.querySelector('input[name="name"]');
  const textareaComments = formulario.querySelector('textarea[name="comments"]');
  const submit = formulario.querySelector('input[name="submit"]');

  function updateElements(language) {

    if (language === 'en') {
      name.placeholder = "Enter your name *";
      name.title = "Name only accepts letters and white spaces";
      email.placeholder = "Enter your email *";
      email.title = "Incorrect email";
      textareaComments.placeholder = "Leave your comments *";
      submit.value = 'SEND MESSAGE';
    } else if (language === 'de') {
      name.placeholder = "Geben Sie Ihren Namen ein *";
      name.title = "Name akzeptiert nur Buchstaben und Leerzeichen";
      email.placeholder = "Geben Sie Ihre E-Mail ein *";
      email.title = "Falsche E-Mail";
      textareaComments.placeholder = "Hinterlassen Sie Ihre Kommentare ";
      submit.value = 'NACHRICHT SENDEN';
    } else if (language === 'pt') {
      name.placeholder = "Digite seu nome *";
      name.title = "Nome só aceita letras e espaços em branco";
      email.placeholder = "Digite seu e-mail *";
      email.title = "Email incorreto";
      textareaComments.placeholder = "Deixe seus comentários *";
      submit.value = 'ENVIAR MENSAGEM';
    } else {
      name.placeholder = "Ingresa tu nombre *";
      name.title = "Nombre sólo acepta letras y espacios en blanco";
      email.placeholder = "Ingresa tu correo *";
      email.title = "Email incorrecto";
      textareaComments.placeholder = "Déjame tus comentarios *";
      submit.value = 'ENVIAR MENSAJE';
    }
    }

    const langLinks = document.querySelectorAll("#dropdown-content a");
    langLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const language = event.target.getAttribute("data-lang");
            updateElements(language);
            console.log(`Idioma cambiado a: ${language}`);
        });
    });
}