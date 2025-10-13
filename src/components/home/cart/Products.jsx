"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ItemCart from "./ItemCart";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${baseUrl}/products/top-selling`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [baseUrl]);

  return (
    <div className="py-5 md:py-10 px-0 md:px-14">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Los más pedidos
      </h2>

      <div className="w-auto">
        {
          products.length > 0 && <Splide
          options={{
            type: "loop",
            perPage: 5,
            perMove: 1,
            gap: "2rem",
            arrows: true,
            pagination: false,
            drag: false,
            start: 0,
            focus: 0,     
            wheel: false,  
            breakpoints: {
              1200: { perPage: 3, gap: "2.5rem" },
              850: { perPage: 2, gap: "2.5rem" },
              640: { perPage: 1, gap: "2.5rem" },
            },
          }}
          aria-label="Productos destacados"
          className='splide-main-products !pt-2 !pb-2'
        >
          {products.map((prod) => (
            <SplideSlide key={prod.id}>
              <ItemCart
                product={prod}
              />
            </SplideSlide>
          ))}
        </Splide>
        }
      </div>

      <Link
        href="/products"
        className="bg-[#0CAFE6] text-white text-base px-6 py-2 rounded-xl mx-auto block w-max mt-2"
      >
        Ver todo
      </Link>
    </div>
  );
}
