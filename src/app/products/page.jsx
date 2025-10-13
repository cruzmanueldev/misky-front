import ProductsClient from './ProductsClient'

export const metadata = {
  title: 'Productos',
  description: 'Explora nuestros productos',
  keywords: ['productos', 'tienda', 'alfajores', 'piononos', 'cuchareables', 'especiales', 'miskutejas', 'pack misky', 'pack'],
  openGraph: {
    title: 'Productos | Misky Reposteria',
    description: 'Explora nuestros productos',
    url: 'https://miskyreposteria.es/products',
    siteName: 'Misky Reposteria',
    locale: 'es_ES',
    type: 'website',
  },
};

export default async function Products() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: 'no-store',
  });
  const products = await res.json();

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <ProductsClient products={products} />
      </div>
    </main>
  );
}
