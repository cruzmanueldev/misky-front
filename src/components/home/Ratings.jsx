import RatingsClient from "./ratings/RatingsClient";

export default async function Ratings() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  let ratings = [];

  try {
    const res = await fetch(`${baseUrl}/ratings`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      ratings = data.map((r) => ({
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
    }
  } catch (err) {
    console.error("Error al obtener calificaciones:", err);
  }

  return <RatingsClient ratings={ratings} />;
}
