"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SlideContent from "./SlideContent";

export default function BannerClient({ products }) {
  const notify = () => toast.success("Agregado al carrito!");

  return (
    <>
      <ToastContainer />
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "2rem",
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          interval: 5000,
          pagination: false,
        }}
        aria-label="Productos destacados"
        className="!pl-0 !pr-0 !pb-0 !pt-0"
      >
        {products.map((prod) => (
          <SplideSlide key={prod.id}>
            <SlideContent product={prod} notify={notify} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
