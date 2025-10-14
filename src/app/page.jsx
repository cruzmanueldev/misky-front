import Products from "@/components/home/cart/Products";
import MainBanner from "@/components/home/MainBanner";
import Offer from "@/components/home/Offer";
import Ratings from "@/components/home/Ratings";
import WeeklyPromotion from "@/components/home/WeeklyPromotion";
import WhyUs from "@/components/home/WhyUs";

export const metadata = {
  title: 'Misky Reposteria',
  description: 'Bienvenidos a Misky Reposteria',
  keywords: ['productos', 'tienda', 'alfajores', 'piononos', 'cuchareables', 'especiales', 'miskutejas', 'pack misky', 'pack','personaliza','clientes'],
  openGraph: {
    title: 'Tienda | Misky Reposteria',
    description: 'Explora nuestros productos',
    url: 'https://miskyreposteria.es/',
    siteName: 'Misky Reposteria',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function HomePage() {

  return (
    <main className="flex flex-col">
      <section className="hidden md:block pt-40 pb-32 relative h-[80vh]">
        <div
          className="
            absolute top-0 left-0 w-full h-[80vh] md:h-full
            bg-center bg-no-repeat opacity-80
            bg-fixed md:bg-fixed
          "
          style={{
            backgroundImage: 'url(/main.webp)'
          }}
        >
        </div>
      </section>

      <section className="block md:hidden relative h-[60vh] overflow-hidden">
        <div 
          className="
            absolute inset-0
             bg-contain bg-no-repeat opacity-80
            bg-fixed
          "
          style={{
            backgroundImage: 'url(/sub_main.webp)'
          }}
        ></div>
      </section>


      <section className="">
        <MainBanner />

        <Products />

        <Offer />

        <WhyUs />
        <WeeklyPromotion />


        <Ratings />
      </section>
    </main>
  );
}
