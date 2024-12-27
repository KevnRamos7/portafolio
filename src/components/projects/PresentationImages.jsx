/* eslint-disable react/prop-types */

const PresentationImages = ({images}) => {
  return (
    <>
        {/* Contenedor Principal */}
        <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden px-2">
            {/* Galería de Imágenes */}
            <div className="w-full h-auto flex gap-4 py-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide justify-start">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image.image}
                    alt={image.title}
                    className="w-auto rounded-[20px] shadow-lg object-contain border border-gray-300 snap-start shrink-0"
                />
                ))}
            </div>
    </div>
    </>
  )
}

export default PresentationImages