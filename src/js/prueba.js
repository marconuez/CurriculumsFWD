const div_pokemones = document.getElementById('Lista_Pokemones');
const contandorTotal = document.getElementById('contandorTotal');
const vect = [];
const totalPokemones = 0;



async function obtenerDatosAwait() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=150"
    try {
        const response = await fetch(apiUrl);
        if (!response.ok){
            throw new Error("No se pudo obtener la información...");
        }
        const data = await response.json();
        data.results.map(pokemon => {
            vect.push(pokemon)
            const variable = [...vect]
            // let urlParts = pokemon.url.split('/')
            // // const urlParts = url.split('/');
            // const id = urlParts[ urlParts.length - 2 ];

            // console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`);

        });
        
    } catch (error) {
        console.log("Error al obtener los datos", error);
    }
    
}


obtenerDatosAwait();

window.addEventListener('load', function(){ //Solo espera que se descarge el HTML

    let total = 0;
    let capturados = 0
    
    vect.map(pokemon => {
        console.log(pokemon)
        total++;
        

        const img = document.createElement('img'); //IMG POKEMON
        const contenedorTarjeta = document.createElement('div'); //CONTENEDOR DE TODO
        const contenedorIMG = document.createElement('div'); //CONTENEDOR DE LA IMG
        const contenedorNombre = document.createElement('div'); //CONTENENDOR DEL NOMBRE
        const Nombre = document.createElement('h3'); //NOMBRE POKEMON

        const X = document.createElement('div'); //NOMBRE POKEMON

        let urlParts = pokemon.url.split('/')
        // const urlParts = url.split('/');
        const id = urlParts[ urlParts.length - 2 ];

        // console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`);

        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        img.classList = 'img_class'
        
        contenedorTarjeta.classList = 'div_Pokemones no-capturado'
        Nombre.textContent = pokemon.name

        contenedorNombre.classList = 'Centro_Todo'
        Nombre.classList = 'Letras_blancas'

        contenedorIMG.classList = 'contenedorImg'
        // X.classList = 'X_class'

        contenedorIMG.appendChild(img) //✅
        contenedorIMG.appendChild(X) //✅


        contenedorNombre.appendChild(Nombre) //✅

        contenedorTarjeta.appendChild(contenedorIMG) //✅
        contenedorTarjeta.appendChild(contenedorNombre) //✅

        div_pokemones.appendChild(contenedorTarjeta) //✅
        
        
        contenedorTarjeta.addEventListener('click', function(){
            console.log('atrapado', pokemon.name)
            total = total - 1
            contandorTotal.textContent = total
            
            if(contenedorTarjeta.classList == 'capturado'){
                // contenedorTarjeta.classList.remove('capturado') 
                contenedorTarjeta.classList = 'no-capturado'
                X.classList.remove();
            }
            else{
                contenedorTarjeta.classList = 'div_Pokemones capturado'
                X.classList = 'X_class'
                // contenedorTarjeta.classList = 'capturado'
            }
        })
    })

    contandorTotal.textContent = total
    console.log(vect);

})