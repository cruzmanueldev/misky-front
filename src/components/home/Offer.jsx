import Image from "next/image";
import ImageOffer from '@/assets/images/offer.png'

export default function Offer() {
  return (
    <div className="bg-[#bce2f3] mx-10 my-10 rounded-xl py-16 px-16 flex flex-row gap-12">
      <div className="w-1/4 flex justify-center">
        <Image src={ImageOffer} alt="Image Offer" className="rounded-xl" height={400}/>
      </div>
      <div className="w-3/4 flex items-start flex-col justify-center">
        <h3 className="text-4xl mb-5"><strong>Cada pedido es único como tú.</strong></h3>
        <h4 className="text-xl mb-6">Por eso en Misky personalizamos tu pedido.</h4>
        <h4 className="text-xl">¿Se acerca una boda, celebrar un bautizo o tener una fiesta temática? Cuéntanos cómo imaginas tu celebración soñada y nosotros hacemos tu pedido adecuado.</h4>
      </div>
    </div>
  );
}
