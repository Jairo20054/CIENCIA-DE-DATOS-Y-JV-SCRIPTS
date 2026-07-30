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

// Segundo ejericico 

class mundo {
    constructor (continente, ciudad){
        this.continente = continente;
        this.ciudad = ciudad;
    }
    metodo(){
        console.log(" El continente es America y la ciudad es Cali")
    }
}

const Mimundo = new mundo ("ameria", "Cali")

Mimundo.metodo()

// 3 Ejercico

class personas {
    constructor (edad, nombre, ciudad) {
        this.edad = edad;
        this.nombre = nombre;
        this.ciudad = ciudad
    }
    metodo() {
        console.log(`minombre es ${this.nombre} , mi ${this.edad} y vivo en ${this.ciudad}`)
    }
}

const Mipersona = new persona("Jiaro", 25, "Cali")

Mipersona.metodo()

// Ejercicio 5 

class equipo {
    constructor(equipo, ciudad, jugadores){
        this.equipo = equipo;
        this.ciudad = ciudad; 
        this.jugadores = jugadores;
    }
    verificacion(){
        if(jugadores >= 25) {
            console.log("El equipo tiene una plantilla completa.")
        }else{console.log("necesitamos mas jugadores")}
    }
}

const miequipote = new equipo ("barcelona", "ciudad barcelona", 26)

miequipote.verificacion()

//EJERCICIO 6
//Crea una clase llamada Producto.

class producto {
    constructor(nombre, precio , cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarproducto(){
        console.log(`El producto es${this.nombre} y contiene ${this.cantidad}`)
    }

    calcularproducto() {
        return this.precio * this.cantidad; 
    }
}

const caracteristicasproductos = new producto("exito", 1100000000, 100)

caracteristicasproductos.mostrarproducto()


const total = caracteristicasproductos.calcularprecio()

console.log(`el precio total es${total}`)

//Crea una clase llamada Estudiante.

class estudiante {
    constructor(nota1, nota2, nota3) {
        this.nota1;
        this.nota2;
        this.nota3;
    }
    calularPromedio() {
        const promedio = this.nota + this.nota2+ this.nota3;
        if(promedio >= 3) {console.log("el estudiante aprueba")} else{console.log("El estudiante reprobo")}
    }

}

const Mipromedio = new estudiante(2.5, 3.6, 5.0)

Mipromedio.calularPromedio()