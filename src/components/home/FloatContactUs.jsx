'use client'
import IconWhatsapp from '@/assets/home/whatsapp_icon.png'
import { trackEvent } from '@/utils/analytics';
import Image from 'next/image';

export default function FloatContactUs() {
  
  return (
    <div className="absolute bottom-4 right-8! z-50">
      <a
        href="https://wa.me/34613515064?text=Hola%20tengo%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent("whatsapp_click", {
            button_location: "floating_button",
            transport_type: "beacon",
          })
        }}
      >
        <Image
          src={IconWhatsapp}
          alt="Contactanos en Whatsapp"
          className="cursor-pointer"
          height={60}
          width={60}
        />
      </a>
    </div>
  );
}
