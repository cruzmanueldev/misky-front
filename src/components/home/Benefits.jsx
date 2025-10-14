"use client"

import Image from "next/image";
import IconClock from '@/assets/home/clock.png'
import IconDelivery from '@/assets/home/delivery_man.png'
import IconOffer from '@/assets/home/offer.png'
import IconShopping from '@/assets/home/shopping_bag.png'

export default function Benefits() {

  return (
    <div className="px-8 md:px-14 pb-10 md:pb-10 md:pt-10">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#e5f5fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
          <Image src={IconOffer} alt="Los mejores precios" className="mb-2 mx-auto block" width={70} height={70} />
          <p className="!mb-0">Los mejores precios</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#e5f5fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
          <Image src={IconClock} alt="Delivery el mismo dia" className="mb-2 mx-auto block" width={70} height={70} />
          <p className="!mb-0">Delivery el mismo día</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#e5f5fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
          <Image src={IconDelivery} alt="Servicio contraentrega" className="mb-2 mx-auto block" width={70} height={70} />
          <p className="!mb-0">Servicio contraentrega</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#e5f5fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
          <Image src={IconShopping} alt="Compra fácil y segura" className="mb-2 mx-auto block" width={70} height={70} />
          <p className="!mb-0">Compra fácil y segura</p>
        </div>
      </div>
    </div>
  );
}
