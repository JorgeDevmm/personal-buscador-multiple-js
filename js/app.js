// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor resultados
const resultados = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 13;

// Generar un objeto con la búsqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};

// Eventos
// Esperamos que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  // mostrarAutos(); // muestra los autos al cargar

  // LLena las opciones de años
  llenarSelect();
});

marca.addEventListener('change', (e) => {
  datosBusqueda.marca = e.target.value;
  const resultadoFinal = filtrarAuto();

  mostrarAutos(resultadoFinal);
});
year.addEventListener('change', (e) => {
  datosBusqueda.year = e.target.value;
});
minimo.addEventListener('change', (e) => {
  datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change', (e) => {
  datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change', (e) => {
  datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', (e) => {
  datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', (e) => {
  datosBusqueda.color = e.target.value;

  console.log(datosBusqueda);
});

// funciones
function mostrarAutos(autos) {
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

// Función que filtra en base a la busqueda
function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca);

  return resultado;
}

function filtrarMarca(auto) {

  const { marca } = datosBusqueda;

  // si existe un valor en la propiedad de marca, para evitar ''
  if (marca) {
    return auto.marca == datosBusqueda.marca;
  }
  // matener la referencia de los automoviles no filtrados
  return auto;
}
