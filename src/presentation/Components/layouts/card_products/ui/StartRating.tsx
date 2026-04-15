
const StartRating = ( {rating}: {rating: number} ) => {

  return (
    <div className="flex items-center gap-1 mt-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={`${
              // La estrella se pinta si su posición es menor o igual al rating real
              star <= Math.round(rating) ? "text-[#FFAD33]" : "text-gray-300"
            } text-lg`}
          >
            ★
          </span>
        ))}
      </div>
      {/* Mostramos el valor numérico al lado si no hay reviews */}
      <span className="text-gray-400 text-xs font-semibold ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default StartRating