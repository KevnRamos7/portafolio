import PropTypes from 'prop-types';

const CardExperience = ({ image, title, role, date, description, orangeLetter }) => {
  return (
    <div
      className="p-4 md:p-6 bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg text-start 
        w-full md:w-[70vh] h-[50vh] md:h-[40vh] flex flex-col gap-4 m-2"
    >
      {/* Encabezado */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 md:w-20 md:h-20 object-contain p-1"
        />
        <div className="flex flex-col md:flex-row items-start md:items-center w-full">
          <h1 className="text-lg md:text-xl font-bold text-white">{title}</h1>
          <span className="text-white mx-1 md:mx-3 md:block hidden">-</span>
          <h2 className="text-sm md:text-md text-gray-300">{role}</h2>
        </div>
      </div>

      {/* Fecha */}
      <div className="ms-2">
        <p className="text-xs md:text-sm text-gray-400">{date}</p>
      </div>

      {/* Descripción */}
      <div className="text-gray-300 text-sm md:text-md leading-relaxed flex h-auto md:h-[30vh] mb-4 overflow-y-auto">
        <ul className="list-disc space-y-2 md:space-y-3 pr-2">
          {description.map((item, index) => (
            <li key={index} className="ml-5">
              {item.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    orangeLetter.includes(word.replace(/[.,]/g, ""))
                      ? "text-[#faa94b] font-semibold"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardExperience.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string,
  orangeLetter: PropTypes.arrayOf(PropTypes.string),
};

export default CardExperience;