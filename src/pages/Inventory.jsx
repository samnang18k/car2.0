
import { useMemo, useState } from "react";
import {
  Search,
  Heart,
  SlidersHorizontal,
  Fuel,
  Settings2,
  Users,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

import car1 from "../assets/pic/car1.png";
import car2 from "../assets/pic/car2.jpg";
import car3 from "../assets/pic/car3.jpg";
import car4 from "../assets/pic/car4.png";

const cars = [
  {
    id: 1,
    name: "Toyota RAV4",
    year: 2023,
    brand: "Toyota",
    type: "SUV",
    fuel: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    price: 28500,
    image: car1,
  },
  {
    id: 2,
    name: "BMW 320i",
    year: 2022,
    brand: "BMW",
    type: "Sedan",
    fuel: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    price: 34800,
    image: car2,
  },
  {
    id: 3,
    name: "Mercedes-Benz GLC",
    year: 2022,
    brand: "Mercedes-Benz",
    type: "SUV",
    fuel: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    price: 42000,
    image: car3,
  },
  {
    id: 4,
    name: "Ford Ranger",
    year: 2021,
    brand: "Ford",
    type: "Pickup",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    price: 27500,
    image: car4,
  },
  {
    id: 5,
    name: "Toyota Corolla",
    year: 2022,
    brand: "Toyota",
    type: "Sedan",
    fuel: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    price: 24800,
    image: car1,
  },
  {
    id: 6,
    name: "BMW X5",
    year: 2023,
    brand: "BMW",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    price: 52000,
    image: car2,
  },
];

const bodyTypes = ["Sedan", "SUV", "Hatchback", "Pickup", "Coupe"];
const brands = ["Toyota", "BMW", "Mercedes-Benz", "Ford", "Honda"];

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(["SUV"]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sort, setSort] = useState("newest");
  const [favorites, setFavorites] = useState([]);

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const matchesSearch =
        `${car.name} ${car.brand} ${car.year}`
          .toLowerCase()
          .includes(search.toLowerCase());

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
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/60" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              CAR2.0 / OUR INVENTORY
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Find Your{" "}
              <span className="text-blue-500">Perfect Car</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Discover quality vehicles, compare prices, and find
              the perfect car for your next journey.
            </p>
          </div>

          <div className="text-sm text-slate-300">
            Home <span className="mx-2 text-blue-400">/</span>
            <span className="text-white">Inventory</span>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[270px_1fr]">
          {/* Sidebar filters */}
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

            {/* Search */}
            <label className="mb-2 block text-sm font-semibold">
              Search cars
            </label>

            <div className="mb-7 flex items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-blue-500">
              <Search size={18} className="text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Make, model, year..."
                className="min-w-0 flex-1 py-3 text-sm outline-none"
              />
            </div>

            {/* Price */}
            <div className="mb-7">
              <div className="mb-3 flex justify-between text-sm font-semibold">
                <label>Maximum price</label>
                <span className="text-blue-600">
                  ${maxPrice.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="10000"
                max="100000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-blue-600"
              />

              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>$10,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Body type */}
            <div className="mb-7">
              <h3 className="mb-3 text-sm font-semibold">Body type</h3>

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
                        toggleItem(type, selectedTypes, setSelectedTypes)
                      }
                      className="h-4 w-4 accent-blue-600"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <h3 className="mb-3 text-sm font-semibold">Brand</h3>

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
                        toggleItem(brand, selectedBrands, setSelectedBrands)
                      }
                      className="h-4 w-4 accent-blue-600"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Car results */}
          <section className="min-w-0">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">Explore Our Cars</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Showing {filteredCars.length} vehicles
                </p>
              </div>

              <select
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

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCars.map((car) => (
                  <article
                    key={car.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.name}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-3 top-3 rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                        {car.year}
                      </span>

                      <button
                        onClick={() => toggleFavorite(car.id)}
                        aria-label={
                          favorites.includes(car.id)
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
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

                    <div className="p-5">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                            {car.brand}
                          </p>
                          <h3 className="mt-1 text-lg font-bold">
                            {car.name}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Fuel size={15} />
                          {car.fuel}
                        </span>

                        <span className="flex items-center gap-1">
                          <Settings2 size={15} />
                          Auto
                        </span>

                        <span className="flex items-center gap-1">
                          <Users size={15} />
                          {car.seats} seats
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <p className="text-xl font-extrabold text-blue-600">
                          ${car.price.toLocaleString()}
                        </p>

                        <button
                          onClick={() =>
                            alert(`Selected: ${car.name} ${car.year}`)
                          }
                          className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          Details
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <Search className="mx-auto mb-4 text-slate-400" size={38} />
                <h3 className="text-lg font-bold">No cars found</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
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
