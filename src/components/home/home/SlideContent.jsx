"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function SlideContent({ product, notify }) {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const inCart = items.some((p) => p.product.id === product.id);
  const setOpenCart = useCartStore((state) => state.setOpenCart);

  return (
    <div className="py-2 flex flex-col md:max-h-[60vh] md:flex-row bg-[#fce2c4]">
      <div className="w-full md:w-1/2 lg:w-2/5 ">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
          width={800}
          height={200}
          style={{ width: "100%", height: "100%" }}
          alt={product.name}
          className="object-cover object-center md:rounded-br-full md:rounded-tr-full h-full"
        />

      </div>
      <div className="w-full px-4 py-2 md:w-1/2 lg:w-3/5 md:relative text-end md:pr-10 md:pl-4 lg:px-15 md:py-4 lg:py-14 flex flex-col items-start md:items-end md:justify-center lg:justify-center justify-center text-[#5a2609]">
        <div className="w-full text-start">
          <h2 className="text-xl md:text-5xl lg:text-7xl !mb-0 md:pb-6">
            <strong>{product.name}</strong>
          </h2>
          {
            product.detail != null &&
            <p className="!mb-0 text-sm md:text-lg font-semibold">{product.detail}</p>
          }
          <h3 className="text-base md:text-2xl !mb-1">{product.description}</h3>
          {product.detailpack?.length > 0 && (
            <div className="text-sm">
              <p className="text-sm md:text-lg font-semibold !mb-0">Incluye:</p>
              <ul className="list-disc list-inside">
                {product.detailpack.map((item, index) => (
                  <li className="text-sm md:text-lg" key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            if (inCart) {
              setOpenCart()
            } else {
              addItem(product)
              notify()
            }
          }}
          className={`w-full cursor-pointer md:w-auto xl:absolute bottom-10 right-20 py-2 md:py-3 px-10 rounded-lg text-lg md:!text-xl !text-white ${inCart ? "bg-[#119BD8]" : "!bg-[#58BEEC] hover:bg-[#119BD8]"
            }`}
        >
          {inCart ? "✓ En mi carrito" : "Lo quiero!"}
        </button>
      </div>
    </div>
  );
}
