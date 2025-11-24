import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center mt-5 pt-5">
        <div className="p-5 bg-light rounded-3 border border-danger border-2">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Pokemon Tidak Ditemukan!</h2>
            <p className="lead">
                Maaf, Pokemon yang Anda cari belum terdaftar di Pokedex ini atau salah eja.
            </p>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" 
                alt="Psyduck Confused"
                className="mb-4"
                width={150}
            />
            <br />
            <Link href="/pokemon" className="btn btn-danger px-4">
                Coba Cari Lagi
            </Link>
        </div>
    </div>
  );
}