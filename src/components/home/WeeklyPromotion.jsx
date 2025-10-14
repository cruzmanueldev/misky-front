
import Image from "next/image";
import ImageWeeklyPromotional1 from '@/assets/home/promotional1.webp'
import ImageWeeklyPromotional2 from '@/assets/home/promotional2.webp'
import Link from "next/link";


export default function WeeklyPromotion() {

  return (
    <div className="py-8 bg-[#b0dfec] bg-cover bg-center flex flex-col md:flex-row gap-2 md:gap-12 px-6 lg:px-20 md:py-4 lg:py-2 overflow-hidden">
      <div className="w-1/1 md:w-1/2 lg:w-3/4 flex flex-col items-start justify-center mb-3 md:mb-0">
        <h2 className="text-xl md:text-3xl xl:text-4xl mb-6 text-[#5a2609] !font-bold">¡Conoce nuestros packs!</h2>
        <h3 className="text-lg md:text-2xl xl:text-5xl text-[#5a2609] pr-6">Misky te brinda los mejores postres en nuestros packs <strong>¡elige tu favorito!</strong></h3>
        <div className="flex justify-start">
          <Link
            href="/products?category=5"
            className="bg-white text-[#683910] text-base px-6 py-2 rounded-xl mx-auto block w-max mt-2"
          >
            Ver Packs
          </Link>
        </div>
      </div>
      <div className="w-1/1 md:w-1/2 lg:w-1/4 px-0 lg:px-10 flex items-center justify-center">
        <Image src={ImageWeeklyPromotional2} alt="Pack mes morado" className="!w-[40%] rounded-xl lg:!w-[80%] !h-[45%] sm:!h-[70%] md:!h-[90%] lg:!h-[80%] z-10 relative -bottom-18 -right-2 -rotate-3 transition-transform duration-200 hover:scale-105 cursor-pointer" height={300}/>
        <Image src={ImageWeeklyPromotional1} alt="Pack cuchareable" className="!w-[40%] rounded-xl lg:!w-[80%] !h-[45%] sm:!h-[70%] md:!h-[90%] lg:!h-[80%] rotate-3 relative top-4 -left-3 transition-transform duration-200 hover:scale-105 cursor-pointer" height={300}/>
      </div>
    </div>
  );
}
