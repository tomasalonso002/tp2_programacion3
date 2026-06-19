export default function GamesLayout({ children }) {
  return (
    <section>
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          🎮 Catálogo PlayStation
        </h2>


        <p className="text-gray-600">
          Explora juegos y guarda tus favoritos.
        </p>
      </div>

      {children}

    </section>
  );
}