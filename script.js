

const contenedor = document.getElementById("contenedor")



    fetch("./datoscelu.json")
    .then(response => response.json())
    .then(data => {

        for(const celular of data){
            contenedor.innerHTML += `
            <div>
                <h2>${celular.name}</h2>
                <span>Modelo: ${celular.modelo}</span>
                <p>Pantalla: ${celular.patalla}</p>
                <p>Procesador: ${celular.procesador}</p>
                <p>Camara: ${celular.camara}</p>
                <p>Memoria: ${celular.memoriainterna}</p>
                <p>Bateria: ${celular.bateria}</p>
                <p>Mas Datos: ${celular.resistente}</p>
                 <img src=${celular.imagen}>
            </div>
            <hr>
            `
        }
    })