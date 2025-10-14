import ImageOur from '@/assets/images/our.webp'
import ImageAlfajor1 from '@/assets/images/alfajor1.webp'
import ContactUs from '@/components/our/ContactUs';
import Image from "next/image";

export const metadata = {
  title: 'Nosotros',
  description: 'Sobre Misky',
  keywords: ['mision', 'vision'],
  openGraph: {
    title: 'Nosotros | Misky Reposteria',
    description: 'Sobre Nosotros',
    url: 'https://miskyreposteria.es/our',
    siteName: 'Misky Reposteria',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Our() {
  return (
    <main className="flex flex-col pt-10 min-h-screen">
      <h1 className='text-center text-2xl md:text-3xl font-semibold !mb-10'><strong>Nosotros</strong></h1>

      <section className="flex flex-col px-4 pt-4 md:py-8 md:flex-row bg-[#ecd1b1] gap-2 md:gap-0">

        <div className="w-1/1 md:w-2/5 flex justify-center">
          <Image
            src={ImageOur}
            alt="Misión de Misky"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex w-1/1 md:w-3/5 items-center text-sm md:text-base md:px-4 py-3 justify-start text-[#683910]">
          <div className="space-y-2">
            <h2 className='text-xl'>
              <strong>Misión</strong>
            </h2>
            <p>
              <strong>
                Nuestra misión es brindar postres de calidad 100% artesanales que cumplan con las necesidades del cliente, brindando una amplia variedad de postres tradicionales del Perú 🇵🇪, entre ellos los alfajores siendo nuestro postre principal, seguido de los piononos, kekes, suspiro a la limeña, chocotejas, postres cuchareables , entre otros. Nos esforzamos por brindarle a nuestros clientes la mejor experiencia, utilizando insumos de la más alta calidad e implementando técnicas de vanguardia.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row mt-15 md:mt-10 px-8 md:px-12">

        <div className="flex flex-col items-start text-sm md:text-base w-1/1 md:w-2/3 justify-center md:pr-8 text-gray-700">
          <h2 className='text-xl'>
            <strong>Visión</strong>
          </h2>
          <p>
            <strong>Fundado el 14 de septiembre de 2022. Misky actualmente brinda los postres ideales para celebrar ocasiones especial, disfrutar en familia y distribuir a restaurantes en Madrid. Elaboramos los mejores postres, alfajores, piononos, kekes, chocotejas y nuestros cuchareables. </strong>
          </p>
        </div>
        <div className="w-1/1 md:w-1/3 relative flex justify-center items-center">
          <Image
            src={ImageAlfajor1}
            alt="Visión de Misky"
            className="object-cover rounded-lg h-[80%]"
          />
        </div>
      </section>
      <ContactUs/>
    </main>
  );
}