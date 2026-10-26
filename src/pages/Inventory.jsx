
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Heart,
  SlidersHorizontal,
  Fuel,
  Settings2,
  Users,
  ArrowRight,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CarFront,
} from "lucide-react";

import car1 from "../assets/pic/car1.png";
import car2 from "../assets/pic/car2.jpg";
import car3 from "../assets/pic/car3.jpg";
import car4 from "../assets/pic/car4.png";

// ==========================================
// 1. MOCK DATA: 30 CARS
// ==========================================

const images = [car1, car2, car3, car4];

const carSpecs = [
  { name: "RAV4", brand: "Toyota", type: "SUV", fuel: "Gasoline", seats: 5, price: 28500, year: 2023 },
  { name: "320i", brand: "BMW", type: "Sedan", fuel: "Gasoline", seats: 5, price: 34800, year: 2022 },
  { name: "GLC", brand: "Mercedes-Benz", type: "SUV", fuel: "Gasoline", seats: 5, price: 42000, year: 2022 },
  { name: "Ranger", brand: "Ford", type: "Pickup", fuel: "Diesel", seats: 5, price: 27500, year: 2021 },
  { name: "Corolla", brand: "Toyota", type: "Sedan", fuel: "Gasoline", seats: 5, price: 24800, year: 2022 },
  { name: "X5", brand: "BMW", type: "SUV", fuel: "Diesel", seats: 7, price: 52000, year: 2023 },
  { name: "Civic", brand: "Honda", type: "Sedan", fuel: "Gasoline", seats: 5, price: 22500, year: 2024 },
  { name: "Mustang", brand: "Ford", type: "Coupe", fuel: "Gasoline", seats: 4, price: 38500, year: 2023 },
  { name: "C-Class", brand: "Mercedes-Benz", type: "Sedan", fuel: "Gasoline", seats: 5, price: 39500, year: 2024 },
  { name: "Hilux", brand: "Toyota", type: "Pickup", fuel: "Diesel", seats: 5, price: 32000, year: 2023 },
  { name: "X3", brand: "BMW", type: "SUV", fuel: "Diesel", seats: 5, price: 46500, year: 2024 },
  { name: "CR-V", brand: "Honda", type: "SUV", fuel: "Gasoline", seats: 5, price: 31000, year: 2023 },
  { name: "Focus", brand: "Ford", type: "Hatchback", fuel: "Gasoline", seats: 5, price: 19500, year: 2021 },
  { name: "Camry", brand: "Toyota", type: "Sedan", fuel: "Gasoline", seats: 5, price: 33500, year: 2024 },
  { name: "330i", brand: "BMW", type: "Sedan", fuel: "Gasoline", seats: 5, price: 41000, year: 2023 },
  { name: "GLA", brand: "Mercedes-Benz", type: "SUV", fuel: "Gasoline", seats: 5, price: 36500, year: 2022 },
  { name: "Everest", brand: "Ford", type: "SUV", fuel: "Diesel", seats: 7, price: 44000, year: 2024 },
  { name: "Accord", brand: "Honda", type: "Sedan", fuel: "Gasoline", seats: 5, price: 29500, year: 2022 },
  { name: "Land Cruiser", brand: "Toyota", type: "SUV", fuel: "Diesel", seats: 7, price: 78000, year: 2024 },
  { name: "X7", brand: "BMW", type: "SUV", fuel: "Diesel", seats: 7, price: 85000, year: 2024 },
  { name: "A-Class", brand: "Mercedes-Benz", type: "Hatchback", fuel: "Gasoline", seats: 5, price: 33000, year: 2023 },
  { name: "F-150", brand: "Ford", type: "Pickup", fuel: "Gasoline", seats: 5, price: 48000, year: 2022 },
  { name: "HR-V", brand: "Honda", type: "SUV", fuel: "Gasoline", seats: 5, price: 26000, year: 2024 },
  { name: "Supra", brand: "Toyota", type: "Coupe", fuel: "Gasoline", seats: 2, price: 45000, year: 2023 },
  { name: "M4", brand: "BMW", type: "Coupe", fuel: "Gasoline", seats: 4, price: 72000, year: 2024 },
  { name: "GLE", brand: "Mercedes-Benz", type: "SUV", fuel: "Diesel", seats: 5, price: 62000, year: 2023 },
  { name: "Bronco", brand: "Ford", type: "SUV", fuel: "Gasoline", seats: 5, price: 39000, year: 2024 },
  { name: "Jazz", brand: "Honda", type: "Hatchback", fuel: "Gasoline", seats: 5, price: 18000, year: 2021 },
  { name: "Yaris", brand: "Toyota", type: "Hatchback", fuel: "Gasoline", seats: 5, price: 16500, year: 2022 },
  { name: "Z4", brand: "BMW", type: "Coupe", fuel: "Gasoline", seats: 2, price: 58000, year: 2022 },
];

const cars = carSpecs.map((car, index) => ({
  ...car,
  id: index + 1,
  image: images[index % images.length],
  transmission: "Automatic",
  name: `${car.brand} ${car.name}`,
}));

const bodyTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Pickup",
  "Coupe",
];

const brands = [
  "Toyota",
  "BMW",
  "Mercedes-Benz",
  "Ford",
  "Honda",
];

const ITEMS_PER_PAGE = 6;

// ==========================================
// 2. INVENTORY COMPONENT
// ==========================================

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sort, setSort] = useState("newest");
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================
  // 3. FILTER AND SORT CARS
  // ==========================================

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const matchesSearch = [
        car.name,
        car.brand,
        car.year.toString(),
        car.type,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.includes(car.type);

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(car.brand);

      return (
        matchesSearch &&
        matchesType &&
        matchesBrand &&
        car.price <= maxPrice
      );
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "oldest") {
      result.sort((a, b) => a.year - b.year);
    } else {
      result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [search, selectedTypes, selectedBrands, maxPrice, sort]);

  // ==========================================
  // 4. PAGINATION
  // ==========================================

  const totalPages = Math.ceil(
    filteredCars.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedCars = filteredCars.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Return to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTypes, selectedBrands, maxPrice, sort]);

  // ==========================================
  // 5. FILTER HANDLERS
  // ==========================================

  const toggleItem = (item, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedTypes([]);
    setSelectedBrands([]);
    setMaxPrice(100000);
    setSort("newest");
    setCurrentPage(1);
  };

  // ==========================================
  // 6. PAGE UI
  // ==========================================

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/60" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              CAR2.0 / OUR INVENTORY
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Find Your{" "}
              <span className="text-blue-500">
                Perfect Car
              </span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Discover quality vehicles, compare prices, and find
              the perfect car for your next journey.
            </p>
          </div>

          <div className="text-sm text-slate-300">
            Home
            <span className="mx-2 text-blue-400">/</span>
            <span className="text-white">Inventory</span>
          </div>
        </div>
      </section>

      {/* INVENTORY SECTION */}

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[270px_1fr]">

          {/* SIDEBAR FILTERS */}

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <SlidersHorizontal size={19} />
                Filters
              </h2>

              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>

            {/* SEARCH */}

            <label
              htmlFor="car-search"
              className="mb-2 block text-sm font-semibold"
            >
              Search cars
            </label>

            <div className="mb-7 flex items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-blue-500">
              <Search size={18} className="shrink-0 text-slate-400" />

              <input
                id="car-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Make, model, year..."
                className="min-w-0 flex-1 py-3 text-sm outline-none"
              />
            </div>

            {/* PRICE RANGE */}

            <div className="mb-7">
              <div className="mb-3 flex justify-between gap-2 text-sm font-semibold">
                <label htmlFor="max-price">Maximum price</label>

                <span className="text-blue-600">
                  ${maxPrice.toLocaleString()}
                </span>
              </div>

              <input
                id="max-price"
                type="range"
                min="10000"
                max="100000"
                step="1000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full cursor-pointer accent-blue-600"
              />

              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>$10,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* BODY TYPE */}

            <div className="mb-7">
              <h3 className="mb-3 text-sm font-semibold">
                Body type
              </h3>

              <div className="space-y-3">
                {bodyTypes.map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() =>
                        toggleItem(
                          type,
                          selectedTypes,
                          setSelectedTypes
                        )
                      }
                      className="h-4 w-4 accent-blue-600"
                    />

                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* BRAND */}

            <div>
              <h3 className="mb-3 text-sm font-semibold">
                Brand
              </h3>

              <div className="space-y-3">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() =>
                        toggleItem(
                          brand,
                          selectedBrands,
                          setSelectedBrands
                        )
                      }
                      className="h-4 w-4 accent-blue-600"
                    />

                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* CAR RESULTS */}

          <section className="min-w-0">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Explore Our Cars
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Showing {filteredCars.length} vehicles
                </p>
              </div>

              {/* SORT */}

              <select
                aria-label="Sort cars"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
              </select>
            </div>

            {/* CAR GRID */}

            {paginatedCars.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {paginatedCars.map((car) => (
                    <article
                      key={car.id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {/* IMAGE */}

                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={car.image}
                          alt={car.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <span className="absolute left-3 top-3 rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                          {car.year}
                        </span>

                        {/* FAVORITE */}

                        <button
                          type="button"
                          onClick={() => toggleFavorite(car.id)}
                          aria-label={
                            favorites.includes(car.id)
                              ? "Remove from favorites"
                              : "Add to favorites"
                          }
                          aria-pressed={favorites.includes(car.id)}
                          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:scale-110"
                        >
                          <Heart
                            size={19}
                            className={
                              favorites.includes(car.id)
                                ? "fill-red-500 text-red-500"
                                : "text-slate-700"
                            }
                          />
                        </button>
                      </div>

                      {/* CAR INFORMATION */}

                      <div className="p-5">
                        <div className="mb-3">
                          <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                            {car.brand} / {car.type}
                          </p>

                          <h3 className="mt-1 text-lg font-bold">
                            {car.name}
                          </h3>
                        </div>

                        {/* SPECIFICATIONS */}

                        <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-4 text-xs text-slate-500">
                          <span className="flex min-w-0 items-center gap-1">
                            <Fuel size={15} className="shrink-0" />
                            <span className="truncate">
                              {car.fuel}
                            </span>
                          </span>

                          <span className="flex items-center gap-1">
                            <Settings2 size={15} className="shrink-0" />
                            Auto
                          </span>

                          <span className="flex items-center gap-1">
                            <Users size={15} className="shrink-0" />
                            {car.seats} seats
                          </span>
                        </div>

                        {/* PRICE AND DETAILS */}

                        <div className="mt-4 flex items-center justify-between gap-2">
                          <p className="text-xl font-extrabold text-blue-600">
                            ${car.price.toLocaleString()}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                `Selected: ${car.name} (${car.year})\nPrice: $${car.price.toLocaleString()}`
                              )
                            }
                            className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Details
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* PAGINATION */}

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
                  <p className="text-sm text-slate-500">
                    Showing {startIndex + 1}–
                    {Math.min(
                      startIndex + ITEMS_PER_PAGE,
                      filteredCars.length
                    )}{" "}
                    of {filteredCars.length} cars
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {/* PREVIOUS */}

                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.max(prev - 1, 1)
                        )
                      }
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft size={17} />
                      Previous
                    </button>

                    {/* PAGE NUMBERS */}

                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1
                    ).map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={
                          currentPage === page ? "page" : undefined
                        }
                        className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "border border-slate-200 bg-white hover:bg-slate-100"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* NEXT */}

                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        )
                      }
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* EMPTY STATE */

              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <CarFront
                  className="mx-auto mb-4 text-slate-400"
                  size={42}
                />

                <h3 className="text-lg font-bold">
                  No cars found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
