"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardRating from "./CardRating";

export default function RatingsClient({ ratings }) {
  return (
    <div className="px-4 md:px-14 py-6 md:py-10">
      <h2 className="text-center text-2xl">Nuestros clientes</h2>

      {ratings.length > 0 && (
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            gap: "2rem",
            breakpoints: {
              1024: { perPage: 2, gap: "1.5rem" },
              640: { perPage: 1, gap: "1rem" },
            },
          }}
          aria-label="Opiniones de clientes"
          className="carrousel-calification !py-1 md:!py-1"
        >
          {ratings.map((rating) => (
            <SplideSlide key={rating.id}>
              <CardRating rating={rating} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}
