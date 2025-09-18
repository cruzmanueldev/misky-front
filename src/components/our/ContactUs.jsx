import Image from "next/image";
import IconLocation from '@/assets/images/location_icon.png'


export default function ContactUs() {

  return (
    <div className="my-20 flex flex-col px-20 py-14 text-center justify-center">
      <h2 className='text-center text-2xl font-semibold mb-6'>Contacto</h2>

      <div className="flex flex-row">
        <div className="w-1/2 mx-6">
          <div className="mb-3 text-start">Encuentranos aquí:</div>
          <div className="flex justify-center flex-col items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7805.490197960917!2d-77.07094196494845!3d-11.99213163717007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1758082037357!5m2!1ses-419!2spe"
              width="80%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex mt-1">
              <Image src={IconLocation} alt="Imagen Location" height={16} className="object-cover mr-1"/>
              <span><strong>Madrid 303, España</strong></span>
            </div>
          </div>

        </div>
        <div className="w-1/2">
          <div className="mb-3">Comunícate con nosotros:</div>
          <div className="bg-[#e1ecf191] py-8 px-10 rounded-lg mx-6">
            <form className="flex flex-col items-start">
              <label className="text-sm mb-1">Nombre y apellido:</label>
              <input className="bg-white rounded-md w-full mb-6 p-2 text-sm" />
              <label className="text-sm mb-1">Correo electrónico:</label>
              <input className="bg-white rounded-md w-full mb-6 p-2 text-sm" />
              <label className="text-sm mb-1">Mensaje:</label>
              <textarea rows={3} style={{ resize: 'none' }} id="message" name="message" className="bg-white rounded-md w-full mb-6 p-2 text-sm"></textarea>
              <div className="flex justify-center w-full">
                <button className="bg-[#bce2f3] text-black cursor-pointer text-sm rounded-md px-3 py-1">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
