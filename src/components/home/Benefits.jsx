"use client"
import Image from "next/image";
import IconClock from '@/assets/home/clock.png'
import IconDelivery from '@/assets/home/delivery_man.png'
import IconOffer from '@/assets/home/offer.png'
import IconShopping from '@/assets/home/shopping_bag.png'

export default function Benefits() {

  return (
    <div className="px-14 py-10">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconOffer} alt="Icon Offer" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Los mejores precios</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconClock} alt="Icon Clock" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Delivery el mismo día</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconDelivery} alt="Icon Delivery" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Servicio contraentrega</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconShopping} alt="Icon Shopping" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Compra fácil y segura</p>
        </div>
      </div>

      {/* <Row gutter={[16, 24]}>
        <Col xs={24} md={6} className="bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconOffer} alt="Icon Offer" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Los mejores precios</p>
        </Col>

        <Col xs={24} md={6} className="bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconClock} alt="Icon Clock" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Delivery el mismo día</p>
        </Col>

        <Col xs={24} md={6} className="bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconDelivery} alt="Icon Delivery" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Servicio contraentrega</p>
        </Col>

        <Col xs={24} md={6} className="bg-[#f2f9fc] py-6 px-4 text-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
          <Image src={IconShopping} alt="Icon Shopping" className="mb-2 mx-auto block" width={70} height={70} />
          <p>Compra fácil y segura</p>
        </Col>
      </Row> */}


    </div>
  );
}
