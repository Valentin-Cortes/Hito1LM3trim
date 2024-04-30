document.addEventListener("DOMContentLoaded", function () {
    fetch('https://www.el-tiempo.net/api/json/v2/home')
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(data => {
        displayWeatherInfo(data.ciudades);í
    })
    .catch(error => {
        console.error('Error al obtener los datos del tiempo:', error);
    });

});

function displayWeatherInfo(ciudades) {
    const weatherInfoDiv = document.getElementById('weather-info');

    // Este IF verifica que existan datos de tiempo
    if (!ciudades || ciudades.length === 0) {
        weatherInfoDiv.innerHTML = '<p>No se encontraron datos del tiempo disponibles</p>';
        return;
    }

    // Esta variable almacena el HTML que se va a mostrar
    let html = '<h2>El tiempo en varias ciudades:</h2>';
    ciudades.forEach(ciudad => {
        const nombreCiudad = ciudad.name;
        const descripcionCielo = ciudad.stateSky.description;
        const temperaturaMax = ciudad.temperatures.max;
        const temperaturaMin = ciudad.temperatures.min;

        html += `
            <div class="ciudad">
                <h3>${nombreCiudad}</h3>
                <p><strong>Descripción:</strong> ${descripcionCielo}</p>
                <p><strong>Temperatura Máxima:</strong> ${temperaturaMax}°C</p>
                <p><strong>Temperatura Mínima:</strong> ${temperaturaMin}°C</p>
            </div>
        `;
    });

    weatherInfoDiv.innerHTML = html;
}




