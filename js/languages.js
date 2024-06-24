import { ref } from '../js/vue.js'

export default {

  setup() {
    const languageLabel = ref('Idioma');
    const menu_inicio = ref('Inicio');
    const menu_acerca = ref('Acerca de mí');
    const menu_servicios = ref('Servicios');
    const menu_portafolio = ref('Portafolio');
    const menu_trayectoria = ref('Trayectoria');
    const menu_contacto = ref('Contacto');
    const titulo = ref('Portafolio CV - Gustavo Francisco Eichhorn');
    const profesion = ref('Ing. Mecánico y Desarrollador Full-Stack');
    const contactame = ref('CONTÁCTAME');
    const p1 = ref('Desde 2012 tengo experiencia en el área de ingeniería mecánica, trabajando en la Central Nuclear Atucha 2, supervisando el montaje de equipos de I&C, y la Comision Nacional de Energía Atómica, participando en las tareas de integración del satélite SAOCOM 1A y B.');
    const p2 = ref('También tengo una breve experiencia como docente universitario en la UTN Regional Campana, siendo Jefe de Trabajos Prácticos de la asignatura "Termodinámica" para alumnos de 3º año de las carreras de Ingeniería mecánica y electromecánica.');
    const p3 = ref('Poseo conocimientos de diseño asistido por computadora, cálculo estructural mediante el software ANSYS, manejo de equipos (máquina de filament winding), robótica y experiencia de trabajo en laboratorio, que logré gracias a mis estudios en la carrera de "Magister en Ciencias de los Materiales".');
    const p4 = ref('Últimamente, también me he capacitado en cursos de desarrollo web y bases de datos. Poseo conocimiento sobre los lenguajes HTML, CSS, JavaScript y Python; manejo de bases de datos MySQL, PostgreSQL y MongoDB; y manejo de Django y MERN.');
    const descargaCV = ref('DESCARGA MI CV');
    const habilidades = ref('Mis Habilidades');
    const ofrecimiento = ref('¿Qué te ofrezco?');
    const frontend = ref('Desarrollo sitios y aplicaciones para plataformas. Utilizando las tecnologías web HTML, CSS, JS, Bootstrap y REACT JS.');
    const backend = ref('Manejo de frameworks tales como Django y ExpressJS para todo lo que sea back-end y persistencia de datos.');
    const disenio_1 = ref('Diseño técnico');
    const disenio_2 = ref('Desarrollo de planos y ensamblajes en 3D utilizando porgramas CAD tales como Solidworks, Inventor o Spaceclaim.');
    const fem_1 = ref('Analisis mediante elementos finitos');
    const fem_2 = ref('Realización de simulaciones computacionales de todo tipo de problemas físicos: tanto estructurales, como térmicos, o de fluidodinámica.');
    const rob_1 = ref('Robotica');
    const rob_2 = ref('Mis conocimientos me permiten abordar problemas relacionados con automatizaciones y robótica.');
    const db_1 = ref('Bases de datos');
    const db_2 = ref('Manejo de bases de datos tales como MySQL, PostgreSQL y MongoDB.');
    const tb = ref('Algunos de mis trabajos');
    console.log = (tb.value);
    /*************************************************************************
         * ********************************************************************
         **********************************************************************/
    const changeLanguage = (lang) => {
      if (lang === 'es') {
        languageLabel.value = 'Idioma';
        menu_inicio.value = 'Inicio';
        menu_acerca.value = 'Acerca de mí';
        menu_servicios.value = 'Servicios';
        menu_portafolio.value = 'Portafolio';
        menu_trayectoria.value = 'Trayectoria';
        menu_contacto.value = 'Contacto';
        titulo.value = 'Portafolio CV - Gustavo Francisco Eichhorn';
        profesion.value = 'Ing. Mecánico y Desarrollador Full-Stack';
        contactame.value = 'CONTÁCTAME';
        p1.value = 'Desde 2012 tengo experiencia en el área de ingeniería mecánica, trabajando en la Central Nuclear Atucha 2, supervisando el montaje de equipos de I&C, y la Comision Nacional de Energía Atómica, participando en las tareas de integración del satélite SAOCOM 1A y B.';
        p2.value = 'También tengo una breve experiencia como docente universitario en la UTN Regional Campana, siendo Jefe de Trabajos Prácticos de la asignatura "Termodinámica" para alumnos de 3º año de las carreras de Ingeniería mecánica y electromecánica.';
        p3.value = 'Poseo conocimientos de diseño asistido por computadora, cálculo estructural mediante el software ANSYS, manejo de equipos (máquina de filament winding), robótica y experiencia de trabajo en laboratorio, que logré gracias a mis estudios en la carrera de "Magister en Ciencias de los Materiales".';
        p4.value = 'Últimamente, también me he capacitado en cursos de desarrollo web y bases de datos. Poseo conocimiento sobre los lenguajes HTML, CSS, JavaScript y Python; manejo de bases de datos MySQL, PostgreSQL y MongoDB; y manejo de Django y MERN.';
        descargaCV.value = 'DESCARGA MI CV';
        habilidades.value = 'Mis Habilidades';
        ofrecimiento.value = '¿Qué te ofrezco?';
        frontend.value = 'Desarrollo sitios y aplicaciones para plataformas. Utilizando las tecnologías web HTML, CSS, JS, Bootstrap y REACT JS.';
        backend.value = 'Manejo de frameworks tales como Django y ExpressJS para todo lo que sea back-end y persistencia de datos.';
        disenio_1.value = 'Diseño técnico';
        disenio_2.value = 'Desarrollo de planos y ensamblajes en 3D utilizando porgramas CAD tales como Solidworks, Inventor o Spaceclaim.';
        fem_1.value = 'Analisis mediante elementos finitos';
        fem_2.value = 'Realización de simulaciones computacionales de todo tipo de problemas físicos: tanto estructurales, como térmicos, o de fluidodinámica.';
        rob_1.value = 'Robotica';
        rob_2.value = 'Mis conocimientos me permiten abordar problemas relacionados con automatizaciones y robótica.';
        db_1.value = 'Bases de datos';
        db_2.value = 'Manejo de bases de datos tales como MySQL, PostgreSQL y MongoDB.';
        tb.value = 'Algunos de mis trabajos';
        /*************************************************************************
         * ********************************************************************
         **********************************************************************/
      } else if (lang === 'en') {
        languageLabel.value = 'Language';
        menu_inicio.value = 'Home';
        menu_acerca.value = 'About me';
        menu_servicios.value = 'Services';
        menu_portafolio.value = 'Portfolio';
        menu_trayectoria.value = 'Experience';
        menu_contacto.value = 'Contact';
        titulo.value = 'Portfolio CV - Gustavo Francisco Eichhorn';
        profesion.value = 'Mechanical Engineer and Full-Stack Developer';
        contactame.value = 'CONTACT ME';
        p1.value = 'Since 2012, I have experience in the field of mechanical engineering, working at the Atucha 2 Nuclear Power Plant, supervising the installation of I&C equipment, and at the National Atomic Energy Commission, participating in the integration tasks of the SAOCOM 1A and B satellites.';
        p2.value = 'I also have brief experience as a university lecturer at UTN Regional Campana, serving as Teaching Assistant for the course "Thermodynamics" for 3rd-year students in Mechanical and Electromechanical Engineering programs.';
        p3.value = 'I have knowledge of computer-aided design, structural calculation using ANSYS software, handling of equipment (filament winding machine), robotics, and laboratory work experience, acquired through my studies in the "Master of Science in Materials Science" program.';
        p4.value = 'Lately, I have also trained in web development and database courses. I have knowledge of HTML, CSS, JavaScript, and Python languages; I handle MySQL, PostgreSQL, and MongoDB databases; and I am proficient in Django and MERN.';
        descargaCV.value = 'DOWNLOAD MY CV';
        habilidades.value = 'My Skills';
        ofrecimiento.value = 'What do I offer you?';
        frontend.value = 'I develop websites and applications for platforms using web technologies such as HTML, CSS, JS, Bootstrap, and REACT JS.';
        backend.value = 'I handle frameworks such as Django and ExpressJS for all backend and data persistence.';
        disenio_1.value = 'Technical design';
        disenio_2.value = 'Development of 3D drawings and assemblies using CAD programs such as Solidworks, Inventor, or Spaceclaim.';
        fem_1.value = 'Finite element analysis';
        fem_2.value = 'Performing computational simulations of all kinds of physical problems: structural, thermal, or fluid dynamics.';
        rob_1.value = 'Robotics';
        rob_2.value = 'My knowledge allows me to address problems related to automation and robotics.';
        db_1.value = 'Databases';
        db_2.value = 'Handling databases such as MySQL, PostgreSQL, and MongoDB.';
        tb.value = 'Some of my works';
        /*************************************************************************
         * ********************************************************************
         **********************************************************************/
      } else if (lang === 'de') {
        languageLabel.value = 'Sprache';
        menu_inicio.value = 'Startseite';
        menu_acerca.value = 'Über mich';
        menu_servicios.value = 'Dienstleistungen';
        menu_portafolio.value = 'Portfolio';
        menu_trayectoria.value = 'Werdegang';
        menu_contacto.value = 'Kontakt';
        titulo.value = 'Portfolio Lebenslauf - Gustavo Francisco Eichhorn';
        profesion.value = 'Maschinenbauingenieur und Full-Stack-Entwickler';
        contactame.value = 'KONTAKTIERE MICH';
        p1.value = 'Seit 2012 habe ich Erfahrung im Bereich des Maschinenbaus. Ich habe bei Atucha 2 Kernkraftwerk gearbeitet, wo ich die Montage von I&C-Equipment überwachte, und bei der Nationalen Atomenergiekommission, wo ich an den Integrationsaufgaben der SAOCOM 1A und B Satelliten beteiligt war.';
        p2.value = 'Ich habe auch kurze Erfahrung als Universitätsdozent an der UTN Regional Campana, wo ich als Leiter der praktischen Übungen für das Fach "Thermodynamik" für Studenten im 3. Jahr der Studiengänge Maschinenbau und Elektromechanik tätig war.';
        p3.value = 'Ich habe Kenntnisse in computergestütztem Design, struktureller Berechnung mit der ANSYS-Software, im Umgang mit Geräten (Filament-Wickelmaschine), Robotik und Laborerfahrung, die ich durch mein Studium im "Master of Science in Materialwissenschaften" erworben habe.';
        p4.value = 'In letzter Zeit habe ich mich auch in Webentwicklung und Datenbankkursen weitergebildet. Ich habe Kenntnisse in den Sprachen HTML, CSS, JavaScript und Python; ich beherrsche MySQL, PostgreSQL und MongoDB-Datenbanken; und ich bin erfahren in Django und MERN.';
        descargaCV.value = 'CV HERUNTERLADEN';
        habilidades.value = 'Meine Fähigkeiten';
        ofrecimiento.value = 'Was biete ich dir?';
        frontend.value = 'Ich entwickle Websites und Anwendungen für Plattformen unter Verwendung von Webtechnologien wie HTML, CSS, JS, Bootstrap und REACT JS.';
        backend.value = 'Ich arbeite mit Frameworks wie Django und ExpressJS für alles im Backend und Datenpersistenz.';
        disenio_1.value = 'Technisches Design';
        disenio_2.value = 'Entwicklung von 3D-Zeichnungen und Baugruppen mit CAD-Programmen wie Solidworks, Inventor oder Spaceclaim.';
        fem_1.value = 'Finite-Elemente-Analyse';
        fem_2.value = 'Durchführung von computergestützten Simulationen aller Arten von physikalischen Problemen: sowohl strukturelle, thermische als auch fluidodynamische.';
        rob_1.value = 'Robotik';
        rob_2.value = 'Meine Kenntnisse ermöglichen es mir, Probleme im Zusammenhang mit Automatisierung und Robotik anzugehen.';
        db_1.value = 'Datenbanken';
        db_2.value = 'Umgang mit Datenbanken wie MySQL, PostgreSQL und MongoDB.'; 
        tb.value = 'Einige meiner Arbeiten';
        /*************************************************************************
         * ********************************************************************
         **********************************************************************/
      } else if (lang === 'pt') {
        languageLabel.value = 'Linguagem';
        menu_inicio.value = 'Início';
        menu_acerca.value = 'Sobre mim';
        menu_servicios.value = 'Serviços';
        menu_portafolio.value = 'Portfólio';
        menu_trayectoria.value = 'Experiência';
        menu_contacto.value = 'Contato';
        titulo.value = 'Portfólio CV - Gustavo Francisco Eichhorn';
        profesion.value = 'Engenheiro Mecânico e Desenvolvedor Full-Stack';
        contactame.value = 'CONTATE-ME';
        p1.value = 'Desde 2012, tenho experiência na área de engenharia mecânica, trabalhando na Usina Nuclear Atucha 2, supervisionando a montagem de equipamentos de I&C, e na Comissão Nacional de Energia Atômica, participando das tarefas de integração dos satélites SAOCOM 1A e B.';
        p2.value = 'Também tenho uma breve experiência como professor universitário na UTN Regional Campana, atuando como chefe de trabalhos práticos da disciplina "Termodinâmica" para alunos do 3º ano dos cursos de Engenharia Mecânica e Eletromecânica.';
        p3.value = 'Tenho conhecimentos em design assistido por computador, cálculo estrutural usando o software ANSYS, manuseio de equipamentos (máquina de enrolamento de filamentos), robótica e experiência de trabalho em laboratório, adquiridos através dos meus estudos no programa de "Mestrado em Ciências dos Materiais".';
        p4.value = 'Ultimamente, também tenho me capacitado em cursos de desenvolvimento web e bancos de dados. Possuo conhecimento nas linguagens HTML, CSS, JavaScript e Python; manejo bancos de dados MySQL, PostgreSQL e MongoDB; e tenho experiência com Django e MERN.';
        descargaCV.value = 'BAIXE MEU CV';
        habilidades.value = 'Minhas Habilidades';
        ofrecimiento.value = 'O que te ofereço?';
        frontend.value = 'Desenvolvo sites e aplicações para plataformas utilizando tecnologias web como HTML, CSS, JS, Bootstrap e REACT JS.';
        backend.value = 'Manejo de frameworks como Django e ExpressJS para tudo relacionado ao backend e persistência de dados.';
        disenio_1.value = 'Desenho técnico';
        disenio_2.value = 'Desenvolvimento de desenhos e montagens em 3D utilizando programas CAD como Solidworks, Inventor ou Spaceclaim.';
        fem_1.value = 'Análise por elementos finitos';
        fem_2.value = 'Realização de simulações computacionais de todos os tipos de problemas físicos: estruturais, térmicos ou de fluidodinâmica.';
        rob_1.value = 'Robótica';
        rob_2.value = 'Meus conhecimentos me permitem abordar problemas relacionados com automações e robótica.';
        db_1.value = 'Bancos de dados';
        db_2.value = 'Manejo de bancos de dados como MySQL, PostgreSQL e MongoDB.';
        tb.value = 'Alguns dos meus trabalhos';
    }
    };console.log = (tb.value);
    return {
      languageLabel,
      menu_inicio,
      menu_acerca,
      menu_servicios,
      menu_portafolio,
      menu_trayectoria,
      menu_contacto,
      titulo,
      profesion,
      contactame,
      p1,
      p2,
      p3,
      p4,
      descargaCV,
      habilidades,
      ofrecimiento,
      frontend,
      backend,
      disenio_1,
      disenio_2,
      fem_1,
      fem_2,
      rob_1,
      rob_2,
      db_1,
      db_2,
      tb,
      changeLanguage
    };
  }
};

//.value