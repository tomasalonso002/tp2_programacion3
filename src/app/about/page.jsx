export default function About() {
  return (
    <section className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Acerca del Proyecto
      </h1>

      <div className="space-y-6 text-gray-700">

        <p>
          Esta aplicación fue desarrollada utilizando Next.js con el objetivo
          de practicar el consumo de APIs externas, navegación mediante rutas
          y manejo de estado global.
        </p>

        <p>
          La aplicación consume información desde la API de videojuegos para
          mostrar un catálogo de juegos de PlayStation con detalles como
          imagen, descripción, fecha de lanzamiento y puntuación.
        </p>

        <p>
          Además, permite administrar una lista de favoritos agregando y
          eliminando juegos de manera dinámica.
        </p>

        <p>
          Los favoritos se almacenan utilizando Local Storage para conservar
          la información incluso después de actualizar la página.
        </p>

        <div className="border rounded-lg p-6 bg-gray-50">

          <h2 className="text-2xl font-semibold mb-3">
            Funcionalidades
          </h2>

          <ul className="list-disc ml-6 space-y-2">

            <li>
              Explorar juegos obtenidos desde una API externa.
            </li>

            <li>
              Buscar juegos por nombre.
            </li>

            <li>
              Ver información detallada de cada juego.
            </li>

            <li>
              Agregar juegos a favoritos.
            </li>

            <li>
              Eliminar juegos de favoritos.
            </li>

            <li>
              Mantener favoritos guardados con Local Storage.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}