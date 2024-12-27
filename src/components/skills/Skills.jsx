import css from '../../assets/images/skills/css.png';
import flutter from '../../assets/images/skills/flutter.png';
import java from '../../assets/images/skills/java.png';
import javascript from '../../assets/images/skills/javascript.png';
import netcore from '../../assets/images/skills/netcore.png';
import react from '../../assets/images/skills/react.png';
import sql from '../../assets/images/skills/sql.png';
import visualbasic from '../../assets/images/skills/visualbasic.png';
import ImageSkill from './ImageSkill';

const Skills = () => {
  return (
    <section data-section="Habilidades"
      className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-8 px-4 py-8"
      style={{
        background:
          "radial-gradient(49.94% 49.94% at 50.03% 50.06%, #2A2B70 0%, #292929 100%)",
      }}
    >
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold text-[#f1f1f1] text-center mb-4">
        Habilidades
      </h1>

      {/* Contenedor de habilidades */}
      <div className="w-full max-w-screen-lg flex flex-col gap-8 items-center">
        {/* Fila Superior */}
        <div className="flex flex-wrap justify-center gap-8">
          <ImageSkill image={flutter} />
          <ImageSkill image={java} />
          <ImageSkill image={sql} />
          <ImageSkill image={netcore} />
          <ImageSkill image={react} />
        </div>

        {/* Fila Inferior */}
        <div className="flex flex-wrap justify-center gap-8">
          <ImageSkill image={visualbasic} />
          <ImageSkill image={javascript} />
          <ImageSkill image={css} />
        </div>
      </div>
    </section>
  );
};

export default Skills;