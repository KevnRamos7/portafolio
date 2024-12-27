const ContactMe = () => {
  return (
    <section data-section="Contacto"
      className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-8 px-4 py-8"
      style={{
        background:
          'radial-gradient(49.94% 49.94% at 50.03% 50.06%, #68481E 0%, #292929 100%)',
      }}
    >
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold text-[#f1f1f1] text-center">
        Contáctame
      </h1>

      {/* Formulario */}
      <div className="p-6 bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg text-center w-full max-w-[80vh] h-auto flex flex-col gap-4">
        {/* Campo Nombre */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-start text-white font-medium">
            Tu Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full md:w-3/4 h-10 rounded-md p-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg text-white placeholder-gray-400"
            placeholder="Escribe tu nombre"
          />
        </div>

        {/* Campo Correo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-start text-white font-medium">
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full md:w-3/4 h-10 rounded-md p-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg text-white placeholder-gray-400"
            placeholder="Escribe tu correo"
          />
        </div>

        {/* Campo Mensaje */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-start text-white font-medium">
            Tu Mensaje
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full h-32 md:h-40 rounded-md p-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg text-white placeholder-gray-400 resize-none"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <button className="w-full md:w-1/2 mt-4 py-2 rounded-md bg-[#faa94b] text-white font-semibold hover:bg-[#e0893b] transition duration-300">
          Enviar Mensaje
        </button>
      </div>
    </section>
  );
};

export default ContactMe;