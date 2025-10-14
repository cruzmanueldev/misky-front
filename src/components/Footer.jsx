"use client";
import Image from "next/image";
import LogoTiktok from '@/assets/social/tiktok_icon.png'
import LogoInstagram from '@/assets/social/instagram_icon.png'
import LogoMisky from '@/assets/home/logo_misky.png'
import IconEmail from '@/assets/contact/email_icon.png'
import IconLocation from '@/assets/contact/location_icon.png'
import IconPhone from '@/assets/contact/phone_icon.png'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[url('/banner_promotion.webp')] items-center gap-4 mt-auto pb-2 pt-4 px-2 md:px-10 text-center bg-[#683910] text-white">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 w-full">
        <div className="hidden lg:block">
          <Link href="/"
            className=""
          >
            <Image
              src={LogoMisky}
              alt="Misky - Reposteria arteseanal"
              className="cursor-pointer"
              height={50}
            />
          </Link>
        </div>
        <div className="">
          <div className="font-semibold text-start mb-0 md:mb-2">Contacto</div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div>
                <Image src={IconPhone} alt="Contáctanos al número" height={15} />
              </div>
              <div className="text-xs md:text-sm">+34 613 515 064</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Image src={IconEmail} alt="Contáctanos a través de nuestro correo" height={15} />
              </div>
              <div className="text-xs md:text-sm">@misky.reposteriatradicional</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Image src={IconLocation} alt="Ubícanos en Madrid, España" height={15}/>
              </div>
              <div className="text-xs md:text-sm">Madrid, España</div>
            </div>
          </div>
        </div>
        <div className="text-start">
          <div className="font-semibold mb-0 md:mb-2">Tienda</div>
          <div>
            <Link href="/delivery" className="text-xs md:text-sm hover:underline">
              Cobertura
            </Link>
          </div>
          <div>
            <Link href="/our" className="text-xs md:text-sm hover:underline">
              Nosotros
            </Link>
          </div>
        </div>
        <div className="text-start">
          <div className="font-semibold mb-0 md:mb-2 text-base">Acerca de</div>
          <div>
            <Link href="/our/terms-and-conditions" className="text-xs md:text-sm hover:underline">
              Términos y Condiciones
            </Link>
          </div>
          <div>
            <Link href="/our/privacy-policy" className="text-xs md:text-sm hover:underline">
              Política de Privacidad
            </Link>
          </div>
        </div>
        <div className="text-start">
          <div className="font-semibold text-start mb-2">Siguenos</div>
          <div className="flex flex-row justify-start gap-2">
            <a
              href="https://www.tiktok.com/@reposteria_misky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LogoTiktok} alt="Síguenos en tiktok" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/miskyreposteria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LogoInstagram} alt="Síguenos en Instagram" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <p className="w-full mt-2 !mb-0 text-xs">
        © 2025 Misky - Todos los derechos reservados
      </p>
    </footer>
  );
}
