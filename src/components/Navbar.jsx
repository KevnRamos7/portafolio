import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Alternar menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (section) {
      // Ajuste para considerar la altura del Navbar (si es fijo)
      const offset = -40; // Ajusta esto si el navbar tiene una altura específica fija
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Cierra el menú móvil después de hacer scroll
    }
  };

  return (
    <nav className="w-full bg-[#292929] border-b-2 border-white border-opacity-20 shadow-[0px_20px_40px_rgba(0,0,0,0.25)]">
      <div className="px-4 py-3 flex justify-center items-center min-h-[50px]">
        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('Experiencia')}
              className="hover:text-blue-400 transition text-white"
            >
              Experiencia
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Habilidades')}
              className="hover:text-blue-400 transition text-white"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Proyectos')}
              className="hover:text-blue-400 transition text-white"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Contacto')}
              className="hover:text-blue-400 transition text-white"
            >
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón Burger en pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden bg-[#292929] border-t border-white border-opacity-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-4 px-4 py-4">
          <li>
            <button
              onClick={() => scrollToSection('Experiencia')}
              className="block text-white hover:text-blue-400 transition"
            >
              Experiencia
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Habilidades')}
              className="block text-white hover:text-blue-400 transition"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Proyectos')}
              className="block text-white hover:text-blue-400 transition"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Contacto')}
              className="block text-white hover:text-blue-400 transition"
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;