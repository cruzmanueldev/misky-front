import BannerClient from "./home/BannerClient";

export default async function MainBanner() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  let products = [];

  try {
    const res = await fetch(`${baseUrl}/products/top`, { cache: "no-store" });
    if (res.ok) products = await res.json();
  } catch (err) {
    console.error("Error al obtener productos destacados:", err);
  }

  if (!products.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg">No hay productos disponibles</p>
      </div>
    );
  }

  return <BannerClient products={products} />;
}
