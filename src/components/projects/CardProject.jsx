/* eslint-disable react/prop-types */
import DotTech from "./DotTech";

const CardProject = ({ title, description, technologies, childrenPresentation }) => {
  return (
    <div
      className="p-4 md:p-6 bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg text-start 
        w-full h-auto md:h-[55vh] flex flex-col gap-4 relative"
    >
      {/* Barra Superior */}
      <div className="w-[30%] h-[2px] shadow-[0px_4px_100px_0px_rgba(255,255,255,0.20)] border-2 border-[#d1d1d1] absolute top-0 left-1/2 transform -translate-x-1/2"></div>

      {/* Contenedor de Imágenes */}
      <div className="h-[50vh] md:h-[60%] w-full bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg overflow-hidden flex items-center justify-center">
        {childrenPresentation}
      </div>

      {/* Contenedor de Descripción */}
      <div className="h-auto md:h-[40%] w-full text-start p-4 flex flex-col items-start justify-between gap-2">
        {/* Título */}
        <h2
          className="text-2xl md:text-4xl font-bold"
          style={{
            background:
              "linear-gradient(114deg, rgba(255, 255, 255, 0.40) 24.35%, rgba(255, 254, 254, 0.30) 66.37%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>

        {/* Descripción */}
        <p className="leading-relaxed text-gray-100 text-sm md:text-base">
          {description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-start gap-2 mt-2">
          {technologies.map((tech, index) => (
            <DotTech key={index} image={tech.image} title={tech.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;