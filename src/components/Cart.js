function Cart({ cart, onClose, onRemoveFromCart }) {
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
  <div className="relative w-[92vw] max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl text-slate-200 font-['Merriweather']">
    {/* Close with free Font Awesome icon */}
    <button
      onClick={onClose}
      aria-label="Close cart"
      className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      <i className="fas fa-times" />
    </button>

    <h1 className="text-center text-lg font-semibold text-slate-100 italic">
      Cart Items
    </h1>

    {cart.length === 0 ? (
      <p className="text-slate-400 text-center py-6 italic">
        No items in the cart
      </p>
    ) : (
      <div className="mt-4 space-y-4">
        {cart.map((product) => (
          <div
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 shrink-0 rounded-lg bg-slate-800/60 p-2 object-contain"
            />

            <div className="flex-1 text-left">
              <h2 className="text-sm font-medium text-slate-100 line-clamp-2 italic">
                {product.title}
              </h2>
              <p className="mt-1 text-emerald-300 font-semibold italic">
                ${product.price}
              </p>
            </div>

            <button
              onClick={() => onRemoveFromCart(product.id)}
              className="inline-flex items-center rounded-lg bg-red-600/80 px-3 h-9 text-white hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 italic"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
}

export default Cart;
