
import Image from "next/image";
import IconDelivery1 from '@/assets/social/delivery_1.png'
import IconDelivery2 from '@/assets/social/delivery_2.png'
import IconDelivery3 from '@/assets/social/delivery_3.png'

export const metadata = {
  title: 'Formas de entrega',
  description: 'Formas de entrega',
  keywords: ['Delivery contra entrega', 'Madrid','Consulta','horario'],
  openGraph: {
    title: 'Formas de entrega | Misky Reposteria',
    description: 'Conoce nuestra forma de entrega',
    url: 'https://miskyreposteria.es/delivery',
    siteName: 'Misky Reposteria',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Delivery() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-10 px-4 lg:px-10 xl:px-20">
        <h1 className="text-2xl md:text-3xl text-center !mb-10"><strong>Conoce nuestra forma de entrega</strong></h1>

        <div className="px-4 lg:px-14 pb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white text-lg">

            <div className="flex flex-col w-full md:w-1/3 lg:w-1/3 2xl:w-1/5">
              <Image 
                src={IconDelivery1} alt="Entregas por la mañana" className="mb-2 mx-auto relative top-10" width={200} height={200} 
              />
              <div className="bg-[#1E9FE0] py-6 px-2 text-center min-h-[100px] flex justify-center items-center rounded-xl shadow-sm z-10 transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
                <p className="!mb-0 leading-tight">Nuestras entregas son en la mañana</p>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/3 lg:w-1/3 2xl:w-1/5">
              <Image src={IconDelivery2} alt="Horario de delivery de acuerdo a la ruta" className="mb-2 mx-auto relative top-14" width={200} height={200} />
              <div className="bg-[#1E9FE0] py-6 px-2 text-center rounded-xl min-h-[100px] flex justify-center items-center z-10 shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
                <p className="!mb-0 leading-tight">El horario va de acuerdo a la ruta de nuestro delivery</p>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/3 lg:w-1/3 2xl:w-1/5">
              <Image src={IconDelivery3} alt="Entregas los 365 dias del año" className="mb-2 mx-auto relative top-12" width={200} height={200} />
              <div className="bg-[#1E9FE0] py-6 px-2 text-center rounded-xl min-h-[100px] flex justify-center items-center shadow-sm z-10 transition-transform duration-200 hover:scale-105 cursor-pointer select-none">
                <p className="!mb-0 leading-tight">Hacemos entregas los 365 días del año (incluyendo feriados)</p>
              </div>
            </div>

          </div>
        </div>


        <h2 className="text-lg md:text-2xl mt-10 mb-2"><strong>1.	Delivery contra entrega</strong></h2>
        <ul>
          <li>
            <p className='text-sm md:text-base'>Realiza el pago al momento de la entrega</p>
          </li>
        </ul>

        <h2 className="text-lg md:text-2xl !mt-10 mb-2"><strong>2. Hacemos entregas en todo Madrid</strong></h2>
        <ul>
          <li>
            <p className='text-sm md:text-base'>-	Elige la entrega en la estación de renfe o metro de su preferencia con <strong>delivery gratis</strong></p>
          </li>
          <li>
            <p className='text-sm md:text-base'>-	Elige la entrega a domicilio con un <strong>costo adicional de 2 a 3 € dependiendo de la distancia ☺️</strong></p>
          </li>
        </ul>

        <h2 className="text-lg md:text-2xl !mt-10 !mb-6"><strong>Realiza tu pedido y consulta el horario</strong></h2>

        <h2 className="text-lg md:text-2xl !mt-10 mb-2"><strong>¿No tienes disponibilidad en la mañana?</strong></h2>

        <div>Puedes recoger en nuestro <strong>obrador en Parla.</strong> Fijaríamos un punto de encuentro cerca a la comisaria de Parla para recoger a cualquier hora del día <strong>¡Escríbenos para coordinar la entrega!</strong></div>

      </section>
    </main>

  );
}
