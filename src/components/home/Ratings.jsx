"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardRating from "./ratings/CardRating";

export default function Ratings() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    async function fetchRatings() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ratings`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Error al obtener calificaciones");
        const data = await res.json();

        const mapped = data.map((r) => ({
          id: r.id,
          name: `${r.user.name} ${r.user.lastname}`,
          created_at: new Date(r.created_at).toLocaleDateString("es-PE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          text: r.comment,
          rating: r.rating ?? 5,
        }));

        setRatings(mapped);
      } catch (err) {
        console.error(err);
      }
    }

    fetchRatings();
  }, []);

  return (
    <div className="px-4 md:px-14 py-1 md:py-10">
      <h2 className="text-center text-2xl">Nuestros clientes</h2>

      {
        ratings.length > 0 && <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            start: 0,
            focus: 0,
            gap: "2rem",
            breakpoints: {
              1024: { perPage: 2, gap: "1.5rem" },
              640: { perPage: 1, gap: "1rem" },
            },
          }}
          aria-label="Ratings"
          className='carrousel-calification md:!py-1'
        >
          {ratings.map((rating) => (
            <SplideSlide key={rating.id}>
              <CardRating rating={rating} />
            </SplideSlide>
          ))}
        </Splide>
      }

    </div>
  );
}
