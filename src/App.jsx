import { useEffect, useState } from "react";
import "./App.css";

const GITHUB_USER = "NacheteSepulveda"; // 🔹 Reemplaza con tu usuario de GitHub
const SELECTED_REPOS = [
  {
    name: "NewsApp",
    description:
      "Aplicación web que consume la API de NewsAPI para mostrar noticias actualizadas con filtros por categoría y búsqueda.",
    details:
      "Esta aplicación permite a los usuarios acceder a noticias en tiempo real, filtrarlas por categoría y realizar búsquedas. Además, cuenta con un sistema de configuración para cambiar el tema de la interfaz.",
    url: "https://github.com/NacheteSepulveda/NewsApp",
  },
  {
    name: "PROYECTO_TITULO_IODONT",
    description:
      "Sistema de agendamiento de hora orientada a estudiantes de odontología",
    details:
      "Esta aplicación facilita el agendamiento de hora para estudiantes de odontología de diversas universidades, permitiendo a los estudiantes seleccionar fechas, horarios y tratamientos disponibles para que realicen su atención al paciente de manera flexible.",
    url: "https://github.com/NacheteSepulveda/PROYECTO_TITULO_IODONT",
  },
  {
    name: "MusicDayApp",
    description:
      "Aplicación web de musica que combina el estado emocional con el estado del clima.",
    details:
      "Proyecto personal complejo y completo, en donde se combina el estado emocional del usuario con el clima para generar playlists de música actualizada periódicamente consumiendo la API de Spotify",
    url: "https://github.com/NacheteSepulveda/MusicDayApp",
  },
];

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = SELECTED_REPOS.map((selectedRepo) => {
          const repoData = data.find((repo) => repo.name === selectedRepo.name);
          return repoData ? { ...selectedRepo, stars: repoData.stargazers_count } : selectedRepo;
        });
        setRepos(filteredRepos);
      })
      .catch((error) => console.error("Error al obtener repos:", error));
  }, []);

  return (
    <div className="container">
      {/* 🔹 Sección de Presentación */}
      <section className="about">
        <h1>👋 ¡Hola! Soy Ignacio Sepúlveda</h1>
        <p>
          Egresado de Ingeniería en Informática en DUOC UC. Durante mi etapa academica y profesional he adquirido experiencia con lenguajes como Python, Javascript y Java. Me especializo en React.js y Express.js. 
          Me interesa profesionalizarme como desarrollador o DBA. Me considero una persona proactiva, empática y dispuesta tanto a trabajar en equipo como de manera individual. 🚀
        </p>
      </section>

      {/* 🔹 Sección de Experiencia */}
      <section className="experience">
        <h2>💼 Experiencia Profesional</h2>
        <div className="exp-content">
          <h3>Taller de Alfabetización Digital Para Adultos Mayores</h3>
          <p><strong>(Enero 2022)</strong></p>
          <p>Ayudante del Taller de Alfabetización Digital para Adultos Mayores. 
            Responsable de brindar apoyo a adultos mayores acerca de la utilización de computadores y teléfonos celulares.</p>
        </div>


        <div className="exp-content">
          <h3>Práctica Profesional en Empresas ITAGROUP S.A</h3>
          <p><strong>(Diciembre 2024 – Febrero 2025)</strong></p>
          <p>Me desempeñé trabajando en 3 diversas áreas:</p>
          <ul>
            <li>
              <strong>Servicio Técnico: </strong>  
              Durante mi práctica, adquirí conocimientos en la revisión, diagnóstico y reparación de equipos de punto de venta (POS), mini PCs HP G3, impresoras térmicas y escáneres de códigos de barras.  
              Además, aprendí sobre el mantenimiento preventivo y correctivo de hardware, optimización del rendimiento de dispositivos y configuración de periféricos.  
              También manejé el software ERP <strong>Softland</strong> para la gestión de guías de entrada y salida de equipos, administración de inventario y documentación técnica.
            </li>

            <li>
              <strong>Servicio al Cliente: </strong>  
              Me especialicé en el soporte técnico y funcional del software <strong>BOWA</strong>, utilizado en cajas registradoras para la emisión de boletas electrónicas y facturación al SII.  
              Atendí solicitudes de clientes mediante asistencia remota con <strong>AnyDesk</strong>, solucionando problemas en la configuración del software, conexión con bases de datos y compatibilidad con distintos sistemas operativos.  
              También trabajé con <strong>SQLite</strong> para la extracción, manipulación e importación de bases de datos, asegurando la correcta gestión y recuperación de información crítica.
            </li>

            <li>
              <strong>Desarrollo Web: </strong>  
              Durante mi práctica, participé en el desarrollo de soluciones web en el área de Frontend y Backend, utilizando tecnologías modernas.
              <ul>
                <li>
                  <strong>FrontEnd: </strong>  
                  Utilicé <strong>React.js</strong> para desarrollar interfaces interactivas y dinámicas, implementando componentes reutilizables y optimizando la navegación mediante enrutamiento con React Router.  
                  Trabajé con <strong>Material UI</strong> para el diseño de la interfaz, garantizando una experiencia de usuario intuitiva y responsiva.  
                  Implementé hooks como useState y useEffect para manejar el estado de la aplicación y realizar peticiones a APIs externas.  
                  Como parte de mi formación, desarrollé una aplicación de noticias consumiendo la API <strong>NewsAPI</strong>, permitiendo a los usuarios filtrar noticias por categoría y realizar búsquedas personalizadas.
                </li>
                <li>
                  <strong>BackEnd: </strong>  
                  Aprendí a trabajar con <strong>Express.js</strong> para crear servidores y gestionar rutas de manera eficiente.  
                  Utilicé <strong>Postman</strong> para probar endpoints y validar respuestas de APIs, implementando métodos GET, POST, PUT y DELETE.  
                  Manejo de <strong>CORS</strong> para asegurar la comunicación entre el Frontend y el Backend.  
                  Implementé <strong>NodeCron</strong> para la automatización de tareas programadas, como la actualización de datos en segundo plano.  
                  Como parte de un proyecto personal, desarrollé una plataforma que combina el estado emocional del usuario con datos climáticos para generar listas de reproducción personalizadas y actualizadas periódicamente.
                </li>
              </ul>
            </li>
          </ul>
                  </div>
        <br />

        
      </section>
      

      {/* 🔹 Sección de Proyectos */}
      <section className="projects">
        <h2>🚀 Proyectos realizados y en qué consiste cada uno</h2>
        <div className="project-list">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.name} className="card">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p className="details">{repo.details}</p>
                <a href={repo.url} target="_blank" className="btn">
                  Ver Proyecto (GitHub)
                </a>
              </div>
            ))
          ) : (
            <p>No se encontraron los repositorios seleccionados.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
