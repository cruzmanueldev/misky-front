"use client";
import Image from "next/image";
import LogoFacebook from '@/assets/social/facebook_icon.png'
import LogoTiktok from '@/assets/social/tiktok_icon.png'
import LogoYoutube from '@/assets/social/youtube_icon.png'
import LogoInstagram from '@/assets/social/instagram_icon.png'

import IconEmail from '@/assets/contact/email_icon.png'
import IconLocation from '@/assets/contact/location_icon.png'
import IconPhone from '@/assets/contact/phone_icon.png'

export default function Footer() {
  return (
    <footer className="mt-auto pb-2 pt-4 text-center bg-[#683910] text-white">
      <div className="grid grid-cols-5 gap-4">
        <div>1</div>
        <div className="text-left leading-tight">

          <div className="font-semibold mb-2">Contacto</div>
          <div className="flex gap-2 items-center">
            <div>
              <Image src={IconPhone} alt="Icon Phone" height={15} />
            </div>
            <div className="text-sm">+ 999 999 999</div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Image src={IconEmail} alt="Icon Email" height={15} />
            </div>
            <div className="text-sm">correo@gmail.com</div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Image src={IconLocation} alt="Icon Location" height={15}/>
            </div>
            <div className="text-sm">Madrid, Espana</div>
          </div>
        </div>
        <div className="text-left leading-tight">
          <div className="font-semibold mb-2">Tienda</div>
          <div className="text-sm">Cobertura</div>
          <div className="text-sm">Nosotros</div>
          <div className="text-sm">Libro de reclamaciones</div>
        </div>
        <div className="text-left leading-tight">
          <div className="font-semibold mb-2 text-base">Acerca de</div>
          <div className="text-sm">Terminos y condiciones</div>
          <div className="text-sm">Preguntas frecuentes</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Siguenos</div>
          <div className="flex flex-row justify-center gap-2">
            <Image src={LogoFacebook} alt="Logo Facebook" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            <Image src={LogoTiktok} alt="Logo Tiktok" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            <Image src={LogoYoutube} alt="Logo Youtube" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            <Image src={LogoInstagram} alt="Logo Instagram" width={30} height={30} className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full mt-4 text-xs">
        © 2025 Misky - Todos los derechos reservados
      </div>
    </footer>
  );
}
