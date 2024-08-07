document
  .getElementById('cotizacion-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const tipoSeguro = document.getElementById('tipo-seguro').value;
    const valorPropiedad = document.getElementById('valor-propiedad').value;

    let cotizacion;
    if (tipoSeguro === 'hogar') {
      cotizacion = valorPropiedad * 0.005;
    } else if (tipoSeguro === 'comercio') {
      cotizacion = valorPropiedad * 0.007;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>El costo estimado de tu póliza es: $${cotizacion.toFixed(
      2
    )}</p>`;

    console.log(`Tipo de Seguro: ${tipoSeguro}`);
    console.log(`Valor de la Propiedad: $${valorPropiedad}`);
    console.log(`Cotización: $${cotizacion.toFixed(2)}`);
  });

function fetchData() {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const resultContainer = document.getElementById('api-result');
      resultContainer.innerHTML = '';

      data.results.forEach((character) => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

        characterElement.innerHTML = `
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
        `;

        resultContainer.appendChild(characterElement);
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
}
