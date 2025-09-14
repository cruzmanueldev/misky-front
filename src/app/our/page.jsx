import ImageCake1 from '@/assets/images/our1.jpg'
import Image from "next/image";


export default function Our() {
  return (
    <div className='pt-10'>
      <h1 className='text-center text-2xl font-semibold mb-6'>Nosotros</h1>
      <section className="flex h-[40vh] bg-[#bce2f3]">
        <div className="w-1/2 relative">
          <Image
            src={ImageCake1}
            alt="Imagen Pastel 1"
            fill
            className="object-cover"
          />
        </div>
        <div className=" flex items-center justify-start py-8 p-12 pr-8 text-black">
          <div className="max-w-md space-y-2">
            <h1 className="text-3xl font-bold mb-2">Misky</h1>
            <h2 className="text-lg mb-2">Tu pastelería favorita</h2>
            <p>
              Misky es una empresa que nace de una gran pasión por la repostería
              creativa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}