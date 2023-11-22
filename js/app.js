// Variables
const resultados = document.querySelector('#resultado');

// Eventos
// Esperamos que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos();
});

// funciones
function mostrarAutos() {
  // itero todo el arreglo de autos

  autos.forEach((auto) => {
    // aplicando destructuracion
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;

    // creo un parrafo para almacenar los datos iterados
    const autoHTML = document.createElement('P');

    // agregamos el contenido al parrafo
    autoHTML.textContent = `Marca: ${marca} - Modelo: ${modelo} - ${year} - Precio: ${precio} - ${puertas} Puertas - Color: ${color} - Transmisión: ${transmision}`;

    // agregamos la referencia a resultados
    resultados.appendChild(autoHTML);
  });
}
