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