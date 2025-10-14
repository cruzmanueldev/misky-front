import Image from "next/image";
import ImageConstruction from '@/assets/home/construction.png'
import IconWhatsapp from '@/assets/home/whatsapp_icon.png'

export default function Comming() {
  return (
    <div className="flex h-screen flex-col justify-center px-2 md:px-12 text-white items-center bg-[#34B7F1]">
      <h1 className="font-semibold text-6xl select-none"><strong>Misky</strong></h1>

      <Image src={ImageConstruction} alt="Misky Repostería" height={600} />

      <div className="text-3xl -mt-1 md:-mt-2 mb-2 select-none"><strong>En construcción...</strong></div>

      <p
        className="mb-5 text-md md:text-xl flex items-center"
      >
        <Image src={IconWhatsapp} alt="Contáctanos al whatsapp" height={30} width={30} className="mr-2 md:mr-2" />
        Escribenos al +34 613 515 064</p>
      <a
        href="https://wa.me/34613515064"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce ml-2 !text-white py-2 px-3 rounded-lg text-center text-md md:text-xl flex items-center bg-[#25D366]"
      >
        <Image src={IconWhatsapp} alt="Realiza tu pedido" height={30} className="mr-0 md:mr-2" />Realiza tu pedido a   través de nuestro Whatsapp
      </a>
    </div>
  );
}
