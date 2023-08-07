class Ahorcado{
    constructor(){
        this.diccionario = ['carro', 'rafa', 'cocinar'];
        this.idSeleccionado = 0;
        this.palabraSeleccionada = [];
        this.correcta = false;
        this.vectorRespuesta = [];
    }

    comienzaJuego(){
        const comienza = true;
        let conta = 0;
        
        while(comienza){
            if(conta == 0){
                this.generarRandom();
                this.seleccionarPalabra();
                this.dibujaJuego();
                conta = 1;
            }
            let opc = 0;

            console.log("Digita tu opcion");
            console.log("[1].Ingresar letra");
            console.log("[2].Terminar Juego");
            opc = 1
            switch (opc) {
                case 1:
                    this.ingresaletra('a')
                    break;
                case 2:
                    comienza = false
            }

        }
    }

    generarRandom(){
        this.idSeleccionado = Math.floor(Math.random() * (2 - 0) + 0)
        return this.idSeleccionado
    }

    seleccionarPalabra(){
        this.palabraSeleccionada = Array.from(this.diccionario[this.idSeleccionado])
        return this.diccionario[this.idSeleccionado]
    }

    dibujaJuego(){

        for (let index = 0; index < this.palabraSeleccionada.length; index++) {
            this.vectorRespuesta[index] = '_';
        }

        console.log(this.vectorRespuesta);
    }

    ingresaletra(letra){
        console.log(this.palabraSeleccionada);
        if(letra.length <= 1){
            console.log('digitaste: ' + letra)

            // const prueba = this.palabraSeleccionada.findIndex((item) =>  item == letra)
            this.palabraSeleccionada.indexOf(letra)

            for (let index = 0; index < this.palabraSeleccionada.length; index++) {
                if(this.palabraSeleccionada[index] == letra){ //encontramos posicion
                    this.vectorRespuesta[index] = letra
                }
            }


        }
        else{
            console.log('Digite una letra!!')
        }
    }
    
    validarJuego(){

        let variable = JSON.stringify(this.vectorRespuesta) === JSON.stringify(this.palabraSeleccionada)


        if(variable === true){
            // console.log(this.vectorRespuesta);
            console.log('Ganaste')
        }else{
            // console.log(this.vectorRespuesta);
            console.log('Sigue intentando');
        }
    }
}

const App = new Ahorcado();
App.comienzaJuego();