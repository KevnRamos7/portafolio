import CardExperience from "./CardExperience";
import GrismarImage from "../../assets/images/grismarX64.png";
import { descriptionGrismar, orangeLetter } from "../../utlis/Const";

import FunShoesImage from "../../assets/images/funshoesX64.png";
import { descriptionFunShoes, orangeLetterFunShoes } from "../../utlis/Const";

const Experience = () => {
  return (
    <section data-section="Experiencia" className="flex flex-col w-full min-h-[70vh] items-center justify-center px-4 py-8">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold text-[#f1f1f1] mb-8 text-center">
        Experiencia
      </h1>

      {/* Carrusel de Tarjetas */}
      <div className="w-full overflow-x-auto px-4 py-2 scrollbar-hide">
        <div className="flex gap-2 md:gap-4 snap-x snap-mandatory overflow-x-auto scroll-smooth md:justify-center">
          {/* Tarjeta 1 */}
          <div className="snap-start shrink-0 w-[80vw] md:w-[45vw] lg:w-auto">
            <CardExperience
              image={GrismarImage}
              title="GRUPO GRISMAR"
              role="FullStack Developer and Database Analyst"
              date="Abril 2022 - Mayo 2023"
              description={descriptionGrismar}
              orangeLetter={orangeLetter}
            />
          </div>

          {/* Tarjeta 2 */}
          <div className="snap-start shrink-0 w-[80vw] md:w-[45vw] lg:w-auto">
            <CardExperience
              image={FunShoesImage}
              title="FUNSHOES"
              role="FullStack Developer and Database Analyst"
              date="Mayo 2023 - Febrero 2024"
              description={descriptionFunShoes}
              orangeLetter={orangeLetterFunShoes}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;