function ProductCard({ product, onAddCart, onView }) {
  return (
    <div className="product font-['Merriweather'] italic">
      <div
        className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm hover:shadow-lg 
          hover:-translate-y-0.5 transition p-4 sm:p-5 min-h-[420px] text-slate-200 cursor-pointer"
        onClick={() => onView(product)}
      >
        {/* Image */}
        <div className="rounded-xl bg-slate-800/60 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 md:h-56 w-full object-contain mx-auto"
          />
        </div>

        {/* Title */}
        <h2 className="mt-3 text-sm sm:text-base font-semibold text-slate-100 leading-tight line-clamp-2">
          {product.title}
        </h2>

        {/* Footer */}
        <div
          className="mt-auto pt-3 flex items-center justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-lg font-bold text-emerald-300">${product.price}</p>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-xl 
              bg-emerald-600 px-4 h-10 text-slate-950 font-semibold hover:bg-emerald-500 active:scale-[0.99] 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 
              focus-visible:ring-offset-slate-900"
            onClick={() => onAddCart(product)}
          >
            <i className="fa-solid fa-cart-shopping text-black "></i>
            <span className="font-['Merriweather'] italic">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
