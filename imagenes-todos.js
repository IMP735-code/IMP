// imagenes-todos.js
// Coloca este archivo en la raíz de tu proyecto

// URLs base de GitHub para cada categoría
const GITHUB_URLS = {
  algebra: "https://raw.githubusercontent.com/IMP735-code/IMP/main/algebra/",
  calculo: "https://raw.githubusercontent.com/IMP735-code/IMP/main/calculo/",
  geometria: "https://raw.githubusercontent.com/IMP735-code/IMP/main/geometria/",
  mecanica: "https://raw.githubusercontent.com/IMP735-code/IMP/main/mecanica/"
};

// Array combinado de TODAS las imágenes con categorías
const todosLosProblemas = [
  // ÁLGEBRA
  {
    url: GITHUB_URLS.algebra + "algebra-racionalizacion.png",
    texto: "Álgebra - Racionalización",
    categoria: "Álgebra"
  },
  {
    url: GITHUB_URLS.algebra + "ecuaciones-exponenciales.png",
    texto: "Ecuaciones Exponenciales",
    categoria: "Álgebra"
  },
  {
    url: GITHUB_URLS.algebra + "sistemas-lineales.png",
    texto: "Sistemas de ecuaciones lineales",
    categoria: "Álgebra"
  },
  {
    url: GITHUB_URLS.algebra + "polinomios.png",
    texto: "Operaciones con polinomios",
    categoria: "Álgebra"
  },

  // CÁLCULO
  {
    url: GITHUB_URLS.calculo + "limites.png",
    texto: "Límites y continuidad",
    categoria: "Cálculo"
  },
  {
    url: GITHUB_URLS.calculo + "derivadas.png",
    texto: "Derivadas - Regla de la cadena",
    categoria: "Cálculo"
  },
  {
    url: GITHUB_URLS.calculo + "integrales.png",
    texto: "Integrales definidas",
    categoria: "Cálculo"
  },
  {
    url: GITHUB_URLS.calculo + "serie-taylor.png",
    texto: "Series de Taylor",
    categoria: "Cálculo"
  },

  // GEOMETRÍA
  {
    url: GITHUB_URLS.geometria + "triangulos.png",
    texto: "Teorema de Pitágoras",
    categoria: "Geometría"
  },
  {
    url: GITHUB_URLS.geometria + "circunferencia.png",
    texto: "Ecuación de la circunferencia",
    categoria: "Geometría"
  },
  {
    url: GITHUB_URLS.geometria + "vectores.png",
    texto: "Vectores en el plano",
    categoria: "Geometría"
  },
  {
    url: GITHUB_URLS.geometria + "cuerpos-solidos.png",
    texto: "Volúmenes de cuerpos sólidos",
    categoria: "Geometría"
  },

  // MECÁNICA
  {
    url: GITHUB_URLS.mecanica + "cinematica.png",
    texto: "Movimiento rectilíneo uniformemente acelerado",
    categoria: "Mecánica"
  },
  {
    url: GITHUB_URLS.mecanica + "dinamica.png",
    texto: "Segunda ley de Newton",
    categoria: "Mecánica"
  },
  {
    url: GITHUB_URLS.mecanica + "energia.png",
    texto: "Conservación de la energía",
    categoria: "Mecánica"
  },
  {
    url: GITHUB_URLS.mecanica + "torque.png",
    texto: "Momento de fuerza y equilibrio",
    categoria: "Mecánica"
  }
];

// INSTRUCCIONES:
// 1. Reemplaza los nombres de archivo con los reales que tengas en GitHub
// 2. Agrega o elimina objetos según tus imágenes
// 3. Mantén la estructura: { url, texto, categoria }
// 4. Las categorías deben coincidir con los filtros: "Álgebra", "Cálculo", "Geometría", "Mecánica"
