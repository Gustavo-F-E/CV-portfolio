import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {

  setup() {
    const menu_inicio = ref('Inicio');
    const menu_acerca = ref('Acerca de mí');
    const menu_servicios = ref('Servicios');
    const menu_portafolio = ref('Portafolio');
    const menu_trayectoria = ref('Trayectoria');
    const menu_contacto = ref('Contacto');

    const changeLanguage_2 = (lang) => {
      if (lang === 'es') {
        menu_inicio.value = 'Inicio';
        menu_acerca.value = 'Acerca de mí';
        menu_servicios.value = 'Servicios';
        menu_portafolio.value = 'Portafolio';
        menu_trayectoria.value = 'Trayectoria';
        menu_contacto.value = 'Contacto';
      } else if (lang === 'en') {
        menu_inicio.value = 'Home';
        menu_acerca.value = 'About me';
        menu_servicios.value = 'Services';
        menu_portafolio.value = 'Portfolio';
        menu_trayectoria.value = 'Experience';
        menu_contacto.value = 'Contact';
      } else if (lang === 'de') {
        menu_inicio.value = 'Startseite';
        menu_acerca.value = 'Über mich';
        menu_servicios.value = 'Dienstleistungen';
        menu_portafolio.value = 'Portfolio';
        menu_trayectoria.value = 'Werdegang';
        menu_contacto.value = 'Kontakt';
      } else if (lang === 'pt') {
        menu_inicio.value = 'Início';
        menu_acerca.value = 'Sobre mim';
        menu_servicios.value = 'Serviços';
        menu_portafolio.value = 'Portfólio';
        menu_trayectoria.value = 'Experiência';
        menu_contacto.value = 'Contato';
    }
    };

    return {
      menu_inicio,
      menu_acerca,
      menu_servicios,
      menu_portafolio,
      menu_trayectoria,
      menu_contacto,
      changeLanguage_2
    };
  }
};