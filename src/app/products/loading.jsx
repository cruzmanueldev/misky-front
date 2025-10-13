

export default function Loading() {
  return (
    <div className='py-10 px-4 md:px-12 '>
      <h1 className='text-center text-2xl md:text-3xl font-semibold !mb-10'>
        <strong>Productos</strong>
      </h1>

      <div className="grid grid-cols-3 lg:grid-cols-8 gap-1 md:gap-2 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-8 bg-gray-200 rounded-full dark:bg-gray-200 w-32 mb-2.5"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 md:gap-3 mt-8 justify-items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-gray-200 rounded-lg dark:bg-gray-200 w-48 mb-2.5"
          />
        ))}
      </div>
    </div>
  );
}
