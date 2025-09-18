"use client"
import Image from "next/image";
import IconClock from '@/assets/home/clock.png'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardRating from "./ratings/CardRating";

export default function Ratings() {

  let ratings = [
    {
      id: 1,
      name: 'Mónica Natalie',
      created_at: '22/10/2024',
      text: '100% Recomendados',
      rating: 4
    },
    {
      id: 2,
      name: 'Ana María',
      created_at: '20/10/2024',
      text: 'Excelente servicio!!',
      rating: 5
    },
    {
      id: 3,
      name: 'Claritza Eshter',
      created_at: '17/10/2024',
      text: 'Excelente servicio!! Recomendado',
      rating: 5
    },
  ]

  return (
    <div className="px-14 py-10">
      <h2 className="text-center text-2xl">Nuestros clientes</h2>

      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          arrows: true,
          pagination: false,
          gap: '2rem',
        }}
        aria-label="Ratings"
      >
        {
          ratings.map((rating)=> {
            return <SplideSlide
              key={rating.id}
            >
              <CardRating
                rating={rating}
              />
            </SplideSlide>
          })
        }
      </Splide>
    </div>
  );
}
