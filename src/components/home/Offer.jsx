

export default function Offer() {
  return (
    <div className="bg-[#b0dfec] flex-col mx-3 md:mx-10 my-5 md:my-8 rounded-xl py-8 md:py-6 px-6 md:px-16 flex md:flex-row gap-6 md:gap-12">
      <div className="w-1/1 lg:w-1/4 flex justify-center items-center">

        <video
          src="/video_misky.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-[90%] object-cover rounded-lg"
        />
      </div>
      <div className="w-1/1 lg:w-3/4 flex items-start flex-col justify-center">
        <h2 className="text-2xl md:text-4xl mb-5 text-[#683910]"><strong>¡Personaliza tu pedido!</strong></h2>
        <h4 className="text-2xl md:text-3xl mb-5 text-[#683910]"><strong>Cada pedido es único como tú</strong></h4>
        <h4 className="text-base md:text-xl mb-6 text-[#683910]">Por eso en Misky personalizamos tu pedido.</h4>
        <h4 className="text-base md:text-xl text-[#683910]">¿Se acerca una ocasión especial? Elige tus postres favoritos y nosotros elaboramos el pedido ideal para ti</h4>
      </div>
    </div>
  );
}
