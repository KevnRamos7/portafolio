import githubIcon from '../assets/images/githubIcon.png'
import linkedinIcon from '../assets/images/linkdinIcon.png'
import mailIcon from '../assets/images/mailIcon.png'
import personalPhoto from '../assets/images/personal_photo.jpeg'

const AboutMe = () => {
  return (
    <div
      className="bg-purple min-h-screen w-full flex flex-col items-center justify-start px-4 py-8"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #470C5C 0%, #381A43 46.9%, #292929 94%)'
      }}
    >
      {/* Nombre */}
      <h1 className="text-[#b8b8b8] text-5xl md:text-7xl lg:text-8xl font-bold text-center mt-8">
        Kevin R. Ramos
      </h1>

      {/* Rol */}
      <h2 className="text-[#a26ab6] text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-4">
        Fullstack Software Developer
      </h2>

      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 mt-8 w-full max-w-screen-lg">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            className="w-48 h-48 md:w-[45vh] md:h-[45vh] rounded-full shadow-lg object-cover"
            src={personalPhoto}
            alt="Profile"
          />
        </div>

        {/* Contenedor de Redes Sociales y Descripción */}
        <div className="flex flex-col items-center gap-6 w-full md:w-[60%]">
          {/* Íconos de Redes Sociales */}
          <div className="flex justify-center gap-4 w-full">
            <img className="w-10 h-10 md:w-14 md:h-14" src={githubIcon} alt="GitHub" />
            <img className="w-10 h-10 md:w-14 md:h-14" src={mailIcon} alt="Email" />
            <img className="w-10 h-10 md:w-14 md:h-14" src={linkedinIcon} alt="LinkedIn" />
          </div>

          {/* Contenido Descriptivo */}
          <div className="p-6 bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg text-start w-full h-auto md:h-[32vh]">
            <p className="text-[#e2e2e2] text-base md:text-xl font-light leading-relaxed">
              Soy un <span className="text-[#ed830b] font-bold">desarrollador Full Stack</span> con
              <span className="text-[#ed830b] font-bold"> 2 años de experiencia</span> en el
              <span className="text-[#ed830b] font-bold"> desarrollo de software</span>, especializado en la creación y colaboración en proyectos para plataformas
              <span className="text-[#ed830b] font-bold"> móviles, web, de escritorio y servicios API REST</span>. Mi pasión es
              <span className="text-[#ed830b] font-bold"> aprender continuamente</span> e
              <span className="text-[#ed830b] font-bold"> innovar</span>, combinando
              <span className="text-[#ed830b] font-bold"> funcionalidad y diseño</span> para crear aplicaciones que ofrezcan experiencias excepcionales a los usuarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;