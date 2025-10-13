"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

import { ToastContainer, toast } from 'react-toastify';
import { Skeleton } from "antd";

export default function MainBanner() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const notify = () => toast.success("Agregado al carrito!");

  useEffect(() => {

    setLoading(true)
    async function fetchProducts() {
      try {
        const res = await fetch(`${baseUrl}/products/top`, { cache: "no-store" });
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, [baseUrl]);

  return (
    <>
      <ToastContainer />

      {loading ? (
        <div className="flex items-center gap-4">
          <div>
            <Skeleton.Node active className="!h-[60vh] !w-[50vw] !rounded-r-full" />
          </div>
          <Skeleton active className="pr-6" />
        </div>
      ) : products.length > 0 ? (
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "2rem",
            arrows: false,
            autoplay: true,
            pauseOnHover: false,
            interval: 5000,
            pagination: false,
            drag: true,
            start: 0,
            focus: 0,
            wheel: false,
            padding: 0,
          }}
          aria-label="Productos destacados"
          className="!pl-0 !pr-0 !pb-0 !pt-0"
        >
          {products.map((prod) => (
            <SplideSlide key={prod.id}>
              <SlideContent
                product={prod}
                notify={() => notify()} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No hay productos disponibles</p>
        </div>
      )}
    </>
  );
}

function SlideContent({ product, notify }) {

  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const inCart = items.some((p) => p.product.id === product.id);
  const setOpenCart = useCartStore((state) => state.setOpenCart);
  return (
    <div className="py-2 flex flex-col md:max-h-[60vh] md:flex-row bg-[#ecd1b1]">
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
