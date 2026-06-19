# My PlayStation Games

Aplicación desarrollada por TOMAS ALONSO ARIAS Y MAXIMILIANO LOPEZ, con Next.js para explorar videojuegos utilizando una API externa (RAWG API) y administrar una lista de favoritos.


## Descripción

Este proyecto permite consultar información de videojuegos de PlayStation consumiendo una API externa, visualizar detalles individuales y administrar una lista de favoritos persistida localmente.

La aplicación aplica conceptos de:

* Rutas y navegación en Next.js
* Componentes reutilizables
* Server Components y Client Components
* Context API
* Persistencia con Local Storage
* Consumo de APIs externas

---

## Funcionalidades

* Visualizar catálogo de juegos.
* Buscar juegos por nombre.
* Acceder al detalle de cada juego.
* Ver imagen, descripción y datos del juego.
* Agregar juegos a favoritos.
* Eliminar juegos de favoritos.
* Persistencia de favoritos utilizando Local Storage.

---

## Tecnologías utilizadas

* Next.js
* React
* JavaScript
* Tailwind CSS
* RAWG API

---

## Estructura del proyecto

```text
src/app
├── about
├── Favorite
├── components
├── context
├── ps-games
│   └── [id]
├── services
├── test-api
├── layout.jsx
└── page.jsx
```

---

## Instalación

Clonar el repositorio:

```bash
git clone <https://github.com/tomasalonso002/tp2_programacion3.git>
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

## Rutas principales

| Ruta             | Descripción              |
| ---------------- | ------------------------ |
| `/`              | Página principal         |
| `/ps-games`      | Catálogo de juegos       |
| `/ps-games/[id]` | Detalle del juego        |
| `/Favorite`          | Lista de favoritos       |
| `/about`         | Información del proyecto |

---

## Estado Global

La aplicación utiliza Context API para compartir el estado de favoritos entre componentes.

---

## Persistencia

Los favoritos se almacenan utilizando Local Storage para mantener la información luego de recargar la página.
