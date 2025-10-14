
import Image from "next/image";
import ImagePromotional from '@/assets/images/promotional.jpg'
import Link from "next/link";

export default function PromotionalBanner() {

  return (
    <div className="flex items-center flex-col md:flex-row justify-between bg-[#683910] text-white py-6 px-4 md:px-4">

      <div className="w-1/1 md:w-1/2">
        <p className="md:pl-8 text-2xl md:text-3xl md:!mb-0 mb-2 text-center md:text-start leading-tight">
          <strong>¡Haz que tus sueños de chocolate se hagan realidad!</strong>
        </p>
      </div>

      <div className="w-1/1 md:w-1/2 flex items-center flex-col-reverse md:flex-row justify-center md:justify-end md:items-center gap-6">
        <Link href="/products"
          className="bg-white !text-black py-2 px-2 text-sm rounded-md cursor-pointer"
        >
          <strong>Personalizar pedido</strong>
        </Link>
        <Image src={ImagePromotional} alt="Personalizar pedido" className="rounded-lg" height={100} />
      </div>
    </div>
  );
}
