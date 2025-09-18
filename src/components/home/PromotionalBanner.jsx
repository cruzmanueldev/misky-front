
import Image from "next/image";
import ImagePromotional from '@/assets/images/promotional.jpg'

export default function PromotionalBanner() {

  return (
    <div className="flex items-center justify-between bg-[#683910] text-white py-3 px-10">
      <div className="w-1/2">
        <p className="text-2xl">
          ¡Haz que tus sueños de chocolate se hagan realidad!
        </p>
      </div>
      <div className="w-1/2 flex flex-col-reverse md:flex-col items-center justify-end gap-6">
        <button className="bg-white !text-black py-1 px-2 text-sm rounded-md cursor-pointer"><strong>Personalizar pedido</strong></button>
        <Image src={ImagePromotional} alt="Image promotional" className="rounded-lg" height={100} />
      </div>
    </div>
  );
}
