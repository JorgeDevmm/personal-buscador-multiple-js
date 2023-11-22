// Variables
const resultados = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 13;

// Eventos
// Esperamos que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(); // muestra los autos al cargar

  // LLena las opciones de años
  llenarSelect();
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

function llenarSelect() {
  // recorremos desde max al min
  for (let i = max; i >= min; i--) {
    // creamos un elemento option,y asignamos el valor y contenido por cada iteración
    const opciones = document.createElement('option');
    opciones.setAttribute('value', i);
    opciones.textContent = i;

    year.appendChild(opciones); // Agrega las opciones de años al select
  }
}
