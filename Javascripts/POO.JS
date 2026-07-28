//programación orientada a objetos
class jairo {
    constructor (edad, nombre){
        this.edad = edad;
        this.nombre = nombre;
    }

    función() {
        if(this.edad === 23) {
            return("el usuario tiene una dedad correcta")
        }
    }
    
}
const jairo = new jairo (25, jairo);

console.log(función())

// objeto 2

class Equipo {
    constructor(jugadores,ciudad,pais){
        this.jugadores = jugadores;
        this.ciudad = ciudad;
        this.pais = pais;
    }
    verificador() {
        console.log("equipo ganador de europa")
    }
}
const equipo = new Equipo (32, "cali", "colombia");
console.log(Equipo.verificador());

// tercer ejerccio de POO

class {
    constructor(imagen, propiedad, ciudad) {
        this.imagen = imagen;
        this.propiedad = propiedad;
        this.ciudad = ciudad;
    }
    lulu
}

class barcelona {
    #ligas
    #copas
    constructor (ligas, copas){
        this.#ligas = ligas
        this.#copas = copas
    }

    fifa() {
        if (#ligas === 6){
            console.log(`${this.#ligas} son las catidades ganadas por el equipo`)
        } else { console.log("no son las ligas ganadas")}
    }
}
const equipos = new barcelona(6, 7)

equipos.fifa()