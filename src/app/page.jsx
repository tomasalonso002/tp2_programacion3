"use client";

import { useState } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-between">
      {/* Encabezado simple */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            PlayStation Games Library
          </h1>         
        </div>
      </header>

      {/* Contenido Principal: Solo el mensaje de bienvenida y explicación */}
      <main className="container mx-auto max-w-3xl px-4 py-20 flex-1 flex flex-col justify-center items-center text-center">
        <div className="bg-gray-800/40 p-8 sm:p-12 rounded-2xl border border-gray-700/50 backdrop-blur-md shadow-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            ¡Bienvenido a la Plataforma!
          </h2>
          
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
            Este sitio web es una herramienta de desarrollo creada con el fin de realizar una 
            <span className="text-purple-400 font-semibold"> prueba de API gratuita</span> conectada a una completa base de datos de videojuegos.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            El propósito principal de este proyecto es permitirle al usuario explorar de manera interactiva el catálogo 
            completo de juegos de <strong className="text-blue-400">PlayStation</strong>, ofreciendo acceso directo a sus descripciones detalladas. 
          </p>

          <div className="border-t border-gray-700/60 pt-6">
            <p className="text-gray-400 text-sm sm:text-base italic">
              💡 Nota de uso: A través de las opciones de navegación, podrás ver las fichas técnicas y utilizar la función de agregar a favoritos la cual solo tiene la funcion de eliminar. 
            </p>
          </div>
        </div>
      </main>
      
    </div>
  );
}