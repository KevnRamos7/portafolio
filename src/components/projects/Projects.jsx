import CardProject from "./CardProject";
import {
  technologiesQualite,
  technologiesWMS,
} from "../../utlis/ProjectsConst";
import {
  imagesFS,
  imagesCuidador,
  imagesQualite,
  imagesWMS,
} from "../../utlis/ProjectsConst";
import PresentationImages from "./PresentationImages";

const Projects = () => {
  return (
    <section data-section="Proyectos"
      className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-12 px-4 py-8"
      style={{
        background:
          "radial-gradient(49.94% 49.94% at 50.03% 50.06%, #1E6847 0%, #292929 100%)",
      }}
    >
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold text-[#f1f1f1] text-center mb-8">
        Proyectos
      </h1>

      {/* Contenido de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[80%]">
        {/* Columna 1 */}
        <div className="flex flex-col gap-8 md:gap-14 md:mt-14 bg-red">
          <CardProject
            childrenPresentation={<PresentationImages images={imagesFS} />}
            title="ENTERPRISE ANALYST"
            description="Aplicación móvil de consulta y análisis de datos empresariales"
            technologies={technologiesWMS}
          />
          <CardProject
            childrenPresentation={<PresentationImages images={imagesWMS} />}
            title="WMS"
            description="Aplicación móvil para el control y gestión de los inventarios de una empresa, con seguimiento de productos y pedidos"
            technologies={technologiesWMS}
          />
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col gap-8">
          <CardProject
            childrenPresentation={<PresentationImages images={imagesQualite} />}
            title="QUALITE"
            description="Aplicación web (POS) para el control de inventarios, ventas, compras entre otros"
            technologies={technologiesQualite}
          />
          <CardProject
            childrenPresentation={<PresentationImages images={imagesCuidador} />}
            title="CUIDADOR"
            description="Aplicación móvil para contratación de servicios médicos, con seguimiento de pacientes"
            technologies={technologiesWMS}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;