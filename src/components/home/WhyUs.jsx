
import Image from "next/image";
import ImageHolidays from '@/assets/home/national_holidays.png'
import ImageAttending from '@/assets/home/attending.png'


export default function WhyUs() {

  return (
    <div className="my-7 md:my-20 mx-4 md:mx-2 lg:mx-12 text-[#5a2609]">
      <h2 className="text-center text-2xl mb-12"><strong>¿Por qué elegirnos?</strong></h2>
      <div className="flex flex-col md:flex-row md:gap-0 lg:gap-8 items-end">
        <div className="w-1/1 md:w-1/2 text-center px-10 md:px-6 xl:px-20 text-white relative -top-12">
          <Image 
            src={ImageHolidays} alt="Icon Offer" className="mb-2 mx-auto relative top-12" width={200} height={200} 
          />
          <div className="bg-[#1E9FE0] py-6 px-2 text-center min-h-[100px] flex justify-center items-center rounded-xl shadow-sm z-10 transition-transform duration-200 hover:scale-105 cursor-pointer select-none relative flex-col">
            <h3 className="text-lg"><strong>¡Misky te hará sentir en casa!</strong></h3>
            <p className="text-sm"><strong>Elaboramos postres artesanales con sabor a hogar gracias a nuestra receta que ha sido transmitida de generación en generación.</strong></p>
          </div>
        </div>
        <div className="w-1/1 md:w-1/2 text-center px-10 md:px-6 xl:px-20 text-white relative -top-12">
          <Image 
            src={ImageAttending} alt="Icon Offer" className="mb-2 mx-auto relative top-18" width={250} height={250} 
          />
          <div className="bg-[#1E9FE0] py-6 px-2 text-center min-h-[100px] flex justify-center items-center rounded-xl shadow-sm relative z-10 transition-transform duration-200 hover:scale-105 cursor-pointer select-none flex-col">
            <h3 className="text-lg"><strong>Misky te cuida</strong></h3>
            <p className="text-sm"><strong>¡Misky elabora postres frescos! Cada postre es elaborado horas antes de su entrega para brindar la mejor calidad que tanto nos caracteriza. Sin conservantes, ni aditivos. Además cumplimos con protocolos higiénicos.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
