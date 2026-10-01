function buscarClima() {

    let cidade = document.getElementById("cidade").value;
    let chave = "662796792c2fc235edc78e54b279c9eb";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(json => {

            document.getElementById("resultado").innerHTML = `
          <h2>${json.name}</h2>
          <p>Temperatura: ${json.main.temp} °C</p>
          <p>Clima: ${json.weather[0].description}</p>
        `;

        })
        .catch(error => {
            console.error("Erro:", error);

            document.getElementById("resultado").innerHTML = `
          <p>Erro ao buscar os dados.</p>
        `;
        });

}