function poblarDatosPaises() {
    
    var url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(paises => {

       //crearlistaPaises(paises);
       adicionarDatosTablaPaises(paises);


    });


   function adicionarDatosTablaPaises(paises) {
    

    var tabla = document.getElementById("tablaPaises");
    
    
    for (const pais of paises) {
       
        var fila = tabla.insertRow(-1);
        var columnaNombre = fila.insertCell(0);
        var columnaCapitales = fila.insertCell(1);
        var columnaMoneda = fila.insertCell(2);
        var columnaBandera = fila.insertCell(3);
        var columnaPoblacion = fila.insertCell(4);

        columnaNombre.innerHTML = pais.name.official;
        columnaCapitales.innerHTML = pais.capital[0];
        columnaMoneda.innerHTML = pais.currencies;
        columnaBandera.innerHTML = pais.flags.png.svg;
        columnaPoblacion.innerHTML = pais.population;
        
    }


   }

    function crearlistaPaises(paises){
        
        var ul = crearNodo('ul');

        for (const pais of paises) {
            
            var li = crearNodoTexto("li", pais.name.common);
            adicionarNodoContenedor(ul,li);
        }

        adicionarNodoBody(ul);

    }

}