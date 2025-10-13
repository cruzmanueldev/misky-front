
export default function CardRating({
  rating
}) {

  return (
    <div className="py-10 flex mb-1 mr-1 flex-col gap-3 px-5 items-center bg-white rounded-lg shadow-md">
      <div className="flex justify-between w-full">
        <div className="text-base"><strong>{rating.name}</strong></div>
      </div>
      <div className="w-full flex justify-start text-start">
        <div>{rating.text}</div>
      </div>
    </div>
  );
}
