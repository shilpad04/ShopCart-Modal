import { useState } from "react";

function Navbar({
  cartCount = 0,
  onCartClick,
  categories = [],
  selectedCategory = "",
  onCategoryChange,
  searchValue = "",
  onSearch,
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const cap = (s) => (typeof s === "string" && s.length ? s[0].toUpperCase() + s.slice(1) : s);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-emerald-900/40
     bg-emerald-900/30 border-b border-emerald-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3">
        <div className="w-full flex items-center gap-3">
          <h2 className="shrink-0 font-['Playfair_Display'] italic text-2xl sm:text-3xl text-slate-100 tracking-wide">
            Product Store
          </h2>

          <div className="flex-1 flex items-center justify-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearch && onSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full max-w-[34rem] rounded-lg bg-white/90 px-3 py-2 text-sm text-slate-900 
              placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={onCartClick}
              aria-label="Open cart"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl 
              bg-emerald-700/80 text-white shadow-sm hover:bg-emerald-700 transition active:scale-[0.98] 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 
              focus-visible:ring-offset-slate-900"
              title="Cart"
            >
              <i className="fa-solid fa-cart-shopping text-lg" />
              <span className="absolute -top-1 -right-1 inline-flex min-w-5 h-5 items-center justify-center 
              rounded-full bg-emerald-400 text-emerald-950 text-[11px] font-semibold ring-2 ring-slate-900">
                {cartCount >= 10 ? "9+" : cartCount}
              </span>
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 
                text-slate-800 hover:bg-slate-300 transition focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                title="Profile"
              >
                <i className="fa-solid fa-user" />
              </button>

              {profileOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-800
                   bg-slate-900 text-slate-200 shadow-xl"
                >
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-800">Profile</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-800">Orders</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-800">Settings</button>
                  <div className="h-px bg-slate-800" />
                  <button className="w-full text-left px-4 py-2 text-red-300 hover:bg-slate-800">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories row aligned with search */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[34rem] flex flex-col items-center">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange && onCategoryChange(e.target.value)}
              className="flex md:hidden w-full rounded-lg bg-white/90 px-3 py-2 text-sm text-slate-900 
              focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">{cap("all categories")}</option>
              {categories.map((c) => (
                <option key={c} value={c}>{cap(c)}</option>
              ))}
            </select>

            <div className="hidden md:flex flex-wrap justify-center gap-4 mt-2">
              <button
                onClick={() => onCategoryChange && onCategoryChange("")}
                className={`text-sm ${
                  selectedCategory === "" ? "text-emerald-300 font-semibold" : "text-slate-200 hover:text-emerald-300"
                }`}
              >
                {cap("all")}
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => onCategoryChange && onCategoryChange(c)}
                  className={`text-sm ${
                    selectedCategory === c ? "text-emerald-300 font-semibold" : "text-slate-200 hover:text-emerald-300"
                  }`}
                >
                  {cap(c)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
