import Link from "next/link";
import { notFound } from "next/navigation";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "no-store", 
  });

  if (!res.ok) return undefined;
  return res.json();
}

interface PageProps {
  params: { name: string };
}

export default async function PokemonDetail({ params }: PageProps) {
  const pokemon = await getPokemon(params.name);

  if (!pokemon) {
    notFound();
  }

  const image = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;

  return (
    <div className="container mt-4">
      <Link href="/pokemon" className="btn btn-outline-secondary mb-4">
        &larr; Kembali ke Pencarian
      </Link>

      <div className="card shadow-lg border-0 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
            <img 
              src={image} 
              alt={pokemon.name} 
              className="img-fluid" 
              style={{ maxHeight: "300px", filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))" }}
            />
          </div>
          
          <div className="col-md-7">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold text-capitalize mb-3">{pokemon.name}</h1>
              
              <div className="mb-4">
                {pokemon.types.map((t: any) => (
                  <span key={t.type.name} className="badge bg-danger me-2 fs-6 text-capitalize">
                    {t.type.name}
                  </span>
                ))}
              </div>

              <h5 className="text-muted mb-3">Basic Stats</h5>
              <div className="row mb-4">
                <div className="col-6 mb-3">
                  <div className="border p-2 rounded text-center">
                    <small className="text-muted">Height</small>
                    <div className="fw-bold fs-5">{pokemon.height / 10} m</div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border p-2 rounded text-center">
                    <small className="text-muted">Weight</small>
                    <div className="fw-bold fs-5">{pokemon.weight / 10} kg</div>
                  </div>
                </div>
              </div>

              <h5 className="text-muted mb-2">Abilities</h5>
              <ul className="list-group list-group-flush">
                {pokemon.abilities.map((a: any) => (
                  <li key={a.ability.name} className="list-group-item text-capitalize">
                    • {a.ability.name}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}