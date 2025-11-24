"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const starterPokemon = [
  { id: "bulbasaur", name: "Bulbasaur", type: "Grass" },
  { id: "charmander", name: "Charmander", type: "Fire" },
  { id: "squirtle", name: "Squirtle", type: "Water" },
  { id: "pikachu", name: "Pikachu", type: "Electric" },
  { id: "eevee", name: "Eevee", type: "Normal" },
  { id: "snorlax", name: "Snorlax", type: "Normal" },
];

export default function PokemonList() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/pokemon/${search.toLowerCase()}`);
    }
  };

  return (
    <div className="container">
      
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-danger">
            <h4 className="mb-3">Cari Pokemon</h4>
            <form onSubmit={handleSearch} className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Ketik nama pokemon (contoh: mewtwo, ditto)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="btn btn-danger">Cari</button>
            </form>
          </div>
        </div>
      </div>

      <h3 className="mb-3 border-bottom pb-2">Popular Pokemon</h3>
      <div className="row">
        {starterPokemon.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 text-center border-0 shadow-sm hover-card">
              <div className="card-body">
                <h5 className="card-title text-capitalize fw-bold">{p.name}</h5>
                <span className="badge bg-secondary mb-3">{p.type}</span>
                <br />
                <Link href={`/pokemon/${p.id}`} className="btn btn-outline-danger btn-sm stretched-link">
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}