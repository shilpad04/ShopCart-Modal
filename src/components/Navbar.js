function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-emerald-900/40 bg-emerald-900/30 border-b border-emerald-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h2 className="font-['Playfair_Display'] italic text-2xl sm:text-3xl lg:text-4xl text-slate-100 tracking-wide">
          Product Store
        </h2>

        {/* Cart button with free Font Awesome icon + badge */}
        <button
          onClick={onCartClick}
          aria-label="Open cart"
          className="relative inline-flex h-11 w-11 items-center justify-center 
             rounded-xl bg-emerald-700/70 text-white shadow-sm 
             hover:bg-emerald-700 hover:shadow transition active:scale-[0.98] 
             focus-visible:outline-none focus-visible:ring-2 
             focus-visible:ring-emerald-400 focus-visible:ring-offset-2 
             focus-visible:ring-offset-slate-900 font-['Merriweather']"
        >
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          <span
            className="absolute -top-1 -right-1 inline-flex min-w-5 h-5 items-center justify-center 
               rounded-full bg-emerald-400 text-emerald-950 text-[11px] font-semibold 
               ring-2 ring-slate-900 font-['Merriweather']"
          >
            {cartCount >= 10 ? "9+" : cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
