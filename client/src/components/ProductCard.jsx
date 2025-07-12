import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import { useState } from "react";

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  product,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={`/product/${id}`}
      state={{ product }}
      className="
        group relative h-[400px] overflow-hidden rounded-3xl
        border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5
        backdrop-blur-[2px] shadow-[0_0_15px_0_rgba(0,0,0,0.35)]
        transition-shadow duration-300 hover:shadow-xl lg:row-span-2 md:row-span-2
      "
    >
      {/* Image container with “Image” label */}
      <div
        className="
          absolute inset-0 z-0
          border border-white/10 rounded-3xl
          bg-gradient-to-br from-white/5 via-white/0 to-white/5
          overflow-hidden flex items-center justify-center
        "
      >
        {/* The word “Image” */}
        <span className="text-white/60 text-lg pointer-events-none">
          Image
        </span>

        {/* actual <img> sits underneath the content span */}
        {image && (
          <img
            src={image}
            alt={title}
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg";
              setLoaded(true);
            }}
            className={`
              absolute inset-0 h-full w-full object-cover
              transition-all duration-500
              ${loaded ? "opacity-30 group-hover:scale-105" : "opacity-0"}
            `}
          />
        )}

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content sits above the image container */}
      <div className="relative z-10 flex h-full flex-col p-6 text-white">
        <span className="inline-flex items-center gap-2 self-start rounded-full
                         border border-pink-500/70 bg-pink-800/40 px-4 py-1 text-sm
                         font-medium backdrop-blur-sm">
          <Tag className="h-4 w-4" />
          {category}
        </span>

        <h3 className="mt-6 text-3xl font-display-semi leading-snug">
          {title}
        </h3>
        <div className="flex-1" />
        <p className="text-lg font-display-text">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
