// config.js - Centro de control de tus imágenes
const GALERIA_CONFIG = {
    // Estas 4 imágenes aparecerán en la sección "Problemas recientes" del index.html
    recientes: [
        "recientes/problema-15.png",
        "recientes/problema-14.png",
        "recientes/problema-13.png",
        "recientes/problema-12.png"
    ],

    // Todas estas aparecerán en todos-problemas.html (puedes agregar muchísimas)
    todos: [
        "todos/problema-1.png",
        "todos/problema-2.png",
        "todos/problema-3.png",
        "todos/problema-4.png",
        "todos/problema-5.png",
        "todos/problema-6.png",
        "todos/problema-7.png",
        "todos/problema-8.png",
        "todos/problema-9.png",
        "todos/problema-10.png",
        "todos/problema-11.png"
    ],

    seccion2: [
        {
            imagen: "seccion-2/problema-1.png",
            titulo: "Derivada de funciones compuestas",
            descripcion: "Aplicación de la regla de la cadena para encontrar la derivada de funciones compuestas. Se requiere identificar correctamente las funciones internas y externas, luego aplicar la regla multiplicando las derivadas correspondientes.",
            nivel: "Intermedio",
            tiempo: "12 min"
        },
        {
            imagen: "seccion-2/problema-2.png",
            titulo: "Integral definida con sustitución",
            descripcion: "Problema que involucra el cálculo de una integral definida utilizando el método de sustitución (cambio de variable). Es fundamental cambiar correctamente los límites de integración y simplificar la expresión resultante.",
            nivel: "Avanzado",
            tiempo: "18 min"
        },
        {
            imagen: "seccion-2/problema-3.png",
            titulo: "Optimización con derivadas",
            descripcion: "Ejercicio de aplicación práctica donde se debe maximizar o minimizar una función mediante el cálculo de derivadas. Se requiere encontrar puntos críticos y verificar si son máximos o mínimos usando la segunda derivada.",
            nivel: "Intermedio",
            tiempo: "20 min"
        },
        {
            imagen: "seccion-2/problema-4.png",
            titulo: "Integral por partes",
            descripcion: "Problema que requiere la aplicación del método de integración por partes. Se debe elegir adecuadamente u y dv, aplicar la fórmula y simplificar hasta obtener la solución completa. Puede requerir aplicar el método más de una vez.",
            nivel: "Avanzado",
            tiempo: "22 min"
        }
    ]
};
