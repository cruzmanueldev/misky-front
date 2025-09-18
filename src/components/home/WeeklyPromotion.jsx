
import Image from "next/image";
import ImageWeeklyPromotion from '@/assets/images/weekly_promotion.jpg'


export default function WeeklyPromotion() {

  return (
    <div className="my-20 bg-[#bce2f3] flex flex-row gap-12 px-20 py-14">
      <div className="w-3/4 flex flex-col items-start justify-center">
        <h2 className="text-center text-4xl mb-6">Promoción de la semana</h2>
        <h3 className="text-5xl text-[#683910] pr-6">Por cada compra de 6 Piononos, 1 gratis</h3>
      </div>
      <div className="w-1/4 flex">
        <Image src={ImageWeeklyPromotion} alt="Image Weekly Promotion" className="rounded-xl" height={300}/>
      </div>
    </div>
  );
}
