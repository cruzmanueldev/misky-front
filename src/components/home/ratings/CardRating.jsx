import Image from "next/image";
import IconClock from '@/assets/home/clock.png'
import IconDelivery from '@/assets/home/delivery_man.png'
import IconOffer from '@/assets/home/offer.png'
import IconShopping from '@/assets/home/shopping_bag.png'
import { Rate } from 'antd';

export default function CardRating({
  rating
}) {

  return (
    <div className="py-10 flex mb-1 mr-1 flex-col gap-3 px-5 items-center bg-[#e1ecf191] rounded-lg shadow-md">
      <div className="flex justify-between w-full">
        <div className="text-base"><strong>{rating.name}</strong></div>
        <div className="text-sm">{rating.created_at}</div>
      </div>
      <div className="w-full flex justify-start text-start">
        <div>{rating.text}</div>
      </div>
      <div className="w-full flex justify-start text-start">
        <Rate disabled defaultValue={rating.rating} />
      </div>
    </div>
  );
}
