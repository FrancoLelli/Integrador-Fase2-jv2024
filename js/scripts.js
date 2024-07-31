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
