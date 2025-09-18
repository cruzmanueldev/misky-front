
import Image from "next/image";
import ImageStore from '@/assets/home/store.png'
import ImageList from '@/assets/home/list.png'


export default function WhyUs() {

  return (
    <div className="my-20 mx-14">
      <h2 className="text-center text-2xl mb-10">¿Por qué elegirnos?</h2>
      <div className="flex">
        <div className="w-1/2 text-center px-10">
          <Image src={ImageStore} alt="Image Store" className="mb-2 mx-auto block" height={70} />
          <h3 className="text-[#683910] text-lg"><strong>Sientete en casa con las recetas de Misky</strong></h3>
          <p className="text-sm"><strong>Usamos ingredientes seleccionados y cuidamos nuestras recetas para mantener la misma calidad y sabor de casa de siempre, ofreciendo un producto fresco y sin preservantes.</strong></p>
        </div>
        <div className="w-1/2 text-center px-10">
          <Image src={ImageList} alt="Image List" className="mb-2 mx-auto block" height={70} />
          <h3 className="text-[#683910] text-lg"><strong>Misky te cuida</strong></h3>
          <p className="text-sm"><strong>Cumplimos con protocolos de bioseguridad y buenas
prácticas de manufactura en todas las fases de nuestro proceso de producción y despacho para asegurarnos de la inocuidad de nuestros productos.</strong></p>
        </div>
      </div>
    </div>
  );
}
