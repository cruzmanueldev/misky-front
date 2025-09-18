import Image from "next/image";
import ImageConstruction from '@/assets/home/construction.png'
import IconWhatsapp from '@/assets/home/whatsapp_icon.png'

export default function Comming() {
  return (
    <div className="flex h-screen flex-col justify-center px-12 text-white items-center bg-[#34B7F1]">
      <h1 className="font-semibold text-6xl select-none"><strong>Misky</strong></h1>

      <Image src={ImageConstruction} alt="Image Construction" height={600} />

      <div className="text-3xl -mt-8 mb-6 select-none"><strong>En construcción...</strong></div>

      <a
        href="https://wa.me/34613515064"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce ml-2 !text-white py-2 px-3 rounded-lg text-center text-xl flex items-center bg-[#25D366]"
      >
        <Image src={IconWhatsapp} alt="Icon Whatsapp" height={30} className="mr-2" /> Realiza tu pedido a   través de nuestro Whatsapp
      </a>
    </div>
  );
}
