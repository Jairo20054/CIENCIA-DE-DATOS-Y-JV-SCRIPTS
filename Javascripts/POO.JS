// ======================================================
// EJERCICIOS DE PROGRAMACIÓN ORIENTADA A OBJETOS EN JS
// ======================================================


// ======================================================
// NIVEL 1: CLASES, CONSTRUCTOR Y MÉTODOS
// ======================================================


// ------------------------------------------------------
// EJERCICIO 1: CLASE PERSONA
// ------------------------------------------------------

// Crea una clase llamada Persona.

// La clase debe tener las siguientes propiedades:
// - nombre
// - edad
// - ciudad

// Agrega un método llamado presentarse().

// El método debe mostrar un mensaje como:
// "Hola, soy Jairo, tengo 25 años y vivo en Cali."

// Crea dos objetos diferentes de la clase Persona.

// Ejecuta el método presentarse() para cada persona.


// SOLUCIÓN DEL EJERCICIO

class Personal {
    constructor (nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
    presentarse() {
        console.log(`Hola, muy buenos dias mi nombre es ${this.nombre} y tengo ${this.edad} años y actualmente vivo en ${this.ciudad}`)
    } 
}
const Personal = new Personal("Jairo Viafara", 25, "Cali")

Personal.presentarse()

// ------------------------------------------------------
// EJERCICIO 2: CLASE PRODUCTO
// ------------------------------------------------------

// Crea una clase llamada Producto.

// La clase debe tener las siguientes propiedades:
// - nombre
// - precio
// - cantidad

// Agrega los siguientes métodos:
// - mostrarProducto()
// - calcularTotal()

// El método calcularTotal() debe retornar:
// precio * cantidad

// Ejemplo de resultado esperado:
// Producto: Teclado
// Cantidad: 3
// Total: $450000

// Recuerda utilizar this para acceder a las propiedades.


// solución 

class Productoss {
    constructor(nombre, precio, cantidad) {
        this.nombre= nombre;
        this.precio= precio;
        this.cantidad = cantidad;
    }
    mostrarProducto(){
        console.log(`el productoes ${this.nombre}`)
    }
    CalculaTotal() {
        return this.cantidad * this.precio;
    }
}

const PrecioFinal = new Productoss("Jabon", 10000, 20)

PrecioFinal.mostrarproducto()
console.log(PrecioFinal.CalculaTotal())

// Ejemplo:
// return this.precio * this.cantidad;

// SOLUCIÓN
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




// ------------------------------------------------------
// EJERCICIO 3: CLASE EQUIPO
// ------------------------------------------------------

// Crea una clase llamada Equipo.

// La clase debe tener las siguientes propiedades:
// - nombre
// - ciudad
// - cantidadJugadores

// Agrega un método llamado verificarPlantilla().

// Condiciones:
// - Si el equipo tiene 25 jugadores o más,
//   mostrar: "La plantilla está completa."

// - Si tiene menos de 25 jugadores,
//   mostrar: "El equipo necesita más jugadores."

// Crea dos equipos diferentes.

// Ejecuta verificarPlantilla() para cada equipo.

// SOLUCIÓN

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



// ======================================================
// NIVEL 2: VALIDACIONES Y MODIFICACIÓN DE PROPIEDADES
// ======================================================


// ------------------------------------------------------
// EJERCICIO 4: CUENTA BANCARIA
// ------------------------------------------------------

// Crea una clase llamada CuentaBancaria.

// La clase debe tener las siguientes propiedades:
// - titular
// - saldo

// Agrega los siguientes métodos:
// - depositar(cantidad)
// - retirar(cantidad)
// - consultarSaldo()

// Reglas:
// - No permitir depósitos menores o iguales a cero.
// - No permitir retiros negativos.
// - No permitir retiros superiores al saldo disponible.
// - Después de cada operación, mostrar el saldo actualizado.

// Ejemplo de uso:
//
// const cuenta = new CuentaBancaria("Jairo", 500000);
//
// cuenta.depositar(200000);
// cuenta.retirar(100000);
// cuenta.consultarSaldo();

// SOLUCIÓN

//pseudocodigo
// Creare la clase Cuenta Bancaria, luego se creara el constructor el cual tendra los argumentos
// Titular y saldo
// Luego se crearan 3 metodos 1-depositar, el cual tendra las siguientes condiciones If el this.saldo =< a 0
// 2- Retiros negativos, if this.saldo menor que saldo o 0 entonces saldra un console.log("su saldo es negativo")
// 3- Valores superiores al saldo, if el argumento this.saldo es mayor a this.saldo console.log("el saldo a retirar es superior al disponible")

class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo= saldo;
    }
    depositar(saldo) {
        if (this.saldo <= 0) {
            console.log("No se puede retirar depósitos menores o iguales a cero.")
}
    Retirar(saldo) 
        if (this.saldo < 0) {
            console.log("No se puede retirar un saldo negativo")
    } else { if (this.salso > this.saldo) {
        console.log("El saldo a retrirar es superior al disponible")
    }

}
const cuenta = new CuentaBancaria("Jairo Andres Viafara", 1000000)

cuenta.depositar(300000)
cuenta.Retirar(400000)


// ------------------------------------------------------
// EJERCICIO 5: CONTROL DE INVENTARIO
// ------------------------------------------------------

// Crea una clase llamada Articulo.

// La clase debe tener las siguientes propiedades:
// - nombre
// - precio
// - stock

// Agrega los siguientes métodos:
// - vender(cantidad)
// - reabastecer(cantidad)
// - mostrarStock()

// Reglas:
// - No vender más unidades de las disponibles.
// - No aceptar cantidades negativas o iguales a cero.
// - Al vender, descontar unidades del stock.
// - Al reabastecer, aumentar el stock.

// Ejemplo de resultado:
//
// "Se vendieron 3 unidades de Mouse."
// "Stock disponible: 7"

R//
class Articulo {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad) {
        if (cantidad <= 0) {
            console.log("no se pueden verder unidades menor o igual a cero")
            return
        } 
        
        if (cantidad > this.stock ) {
            console.log("no hay suficiente stock") 
            return
        
            this.stock -= cantidad;

        } console.log(`se vendieron un total de ${cantidad}`)
    } 

    rebastecer(cantidad) {
        this.stock += cantidad;
        return
        console.log(`se agrego la siguiente ${cantidad} y el stock es ${this.stock}`)
    }

    MostrarStock(){
        console.log(`El Stock total es igual ${this.stock}`);
    }

}

const MostrarArticulo = new Articulo ("Cepillo", 200000,5);

MostrarArticulo.vender(cantidad)
MostrarArticulo.MostrarStock()

MostrarArticulo.rebastecer(4)
MostrarArticulo.MostrarStock()



// ------------------------------------------------------
// EJERCICIO 6: ESTUDIANTE Y CALIFICACIONES
// ------------------------------------------------------

// Crea una clase llamada Estudiante.

// La clase debe tener las siguientes propiedades:
// - nombre
// - calificaciones

// La propiedad calificaciones debe iniciar como un arreglo vacío.

// Agrega los siguientes métodos:
// - agregarCalificacion(nota)
// - calcularPromedio()
// - determinarEstado()

// Reglas:
// - Las calificaciones deben estar entre 0 y 5.
// - No agregar notas inválidas.
// - Si el promedio es igual o superior a 3,
//   el estudiante aprueba.
// - Si el promedio es inferior a 3,
//   el estudiante reprueba.

// Ejemplo de uso:
//
// const estudiante = new Estudiante("Laura");
//
// estudiante.agregarCalificacion(4.5);
// estudiante.agregarCalificacion(3.8);
// estudiante.agregarCalificacion(2.9);
//
// console.log(estudiante.calcularPromedio());
// console.log(estudiante.determinarEstado());





// ======================================================
// NIVEL 3: ENCAPSULAMIENTO
// ======================================================


// ------------------------------------------------------
// EJERCICIO 7: BILLETERA DIGITAL
// ------------------------------------------------------

// Crea una clase llamada BilleteraDigital.

// La clase debe tener:
// - propietario
// - #saldo

// El saldo debe ser una propiedad privada.

// Agrega los siguientes métodos:
// - recargar(cantidad)
// - pagar(cantidad)
// - verSaldo()

// Reglas:
// - No permitir recargas negativas o iguales a cero.
// - No permitir pagos superiores al saldo disponible.
// - No permitir pagos negativos.
// - El saldo solo debe modificarse mediante los métodos.

// No debe ser posible hacer:
//
// billetera.#saldo = 1000000;
//
// porque #saldo es una propiedad privada.





// ------------------------------------------------------
// EJERCICIO 8: USUARIO Y CONTRASEÑA PRIVADA
// ------------------------------------------------------

// Crea una clase llamada Usuario.

// La clase debe tener:
// - nombre
// - correo
// - #contraseña

// La contraseña debe ser privada.

// Agrega los siguientes métodos:
// - iniciarSesion(correo, contraseña)
// - cambiarContraseña(actual, nueva)

// Reglas:
// - iniciarSesion() debe verificar el correo y la contraseña.
// - Mostrar si el inicio de sesión fue exitoso.
// - Solo cambiar la contraseña si la contraseña actual es correcta.
// - La contraseña nueva debe tener mínimo 8 caracteres.
// - No permitir acceso directo a la contraseña privada.





// ======================================================
// NIVEL 4: HERENCIA
// ======================================================


// ------------------------------------------------------
// EJERCICIO 9: EMPLEADOS DE UNA EMPRESA
// ------------------------------------------------------

// Crea una clase padre llamada Empleado.

// La clase debe tener:
// - nombre
// - salarioBase

// Agrega un método llamado calcularSalario().

// Luego crea dos clases hijas:
// - Gerente
// - Desarrollador

// La clase Gerente debe recibir un bono del 30%.

// La clase Desarrollador debe recibir un bono del 15%.

// Debes utilizar:
// - extends
// - super()

// Ejemplo de uso:
//
// const gerente = new Gerente("Carlos", 5000000);
// const desarrollador = new Desarrollador("Ana", 3500000);
//
// console.log(gerente.calcularSalario());
// console.log(desarrollador.calcularSalario());





// ------------------------------------------------------
// EJERCICIO 10: VEHÍCULOS
// ------------------------------------------------------

// Crea una clase padre llamada Vehiculo.

// La clase debe tener:
// - marca
// - modelo
// - velocidad

// Agrega los siguientes métodos:
// - acelerar(cantidad)
// - frenar(cantidad)
// - mostrarInformacion()

// Reglas:
// - acelerar() debe aumentar la velocidad.
// - frenar() debe disminuir la velocidad.
// - La velocidad nunca puede ser negativa.

// Crea dos clases hijas:
// - Automovil
// - Motocicleta

// La clase Automovil debe agregar:
// - numeroPuertas

// La clase Motocicleta debe agregar:
// - cilindraje

// Debes utilizar herencia con extends y super().





// ======================================================
// NIVEL 5: POLIMORFISMO
// ======================================================


// ------------------------------------------------------
// EJERCICIO 11: SONIDOS DE ANIMALES
// ------------------------------------------------------

// Crea una clase padre llamada Animal.

// Agrega un método llamado hacerSonido().

// Crea las siguientes clases hijas:
// - Perro
// - Gato
// - Vaca

// Cada clase debe sobrescribir el método hacerSonido().

// Resultados esperados:
//
// Perro:
// "El perro dice: guau"
//
// Gato:
// "El gato dice: miau"
//
// Vaca:
// "La vaca dice: muu"

// Guarda los objetos en un arreglo:
//
// const animales = [
//   new Perro(),
//   new Gato(),
//   new Vaca()
// ];

// Recorre el arreglo y ejecuta hacerSonido().
//
// animales.forEach(animal => animal.hacerSonido());





// ------------------------------------------------------
// EJERCICIO 12: SISTEMA DE PAGOS
// ------------------------------------------------------

// Crea una clase padre llamada MetodoPago.

// Agrega un método llamado procesarPago(monto).

// Crea las siguientes clases hijas:
// - PagoTarjeta
// - PagoTransferencia
// - PagoEfectivo

// Cada clase debe sobrescribir procesarPago().

// Cada método de pago debe mostrar un mensaje diferente.

// Ejemplos:
//
// "Procesando pago de $150000 con tarjeta."
//
// "Procesando transferencia por $150000."
//
// "Registrando pago en efectivo de $150000."





// ======================================================
// PROYECTO PRÁCTICO: SISTEMA DE PROPIEDADES PARA NIDO
// ======================================================


// ------------------------------------------------------
// CLASE PROPIEDAD
// ------------------------------------------------------

// Crea una clase llamada Propiedad.

// La clase debe tener:
// - id
// - titulo
// - ciudad
// - precioMensual
// - habitaciones
// - disponible

// Agrega los siguientes métodos:
// - mostrarInformacion()
// - cambiarDisponibilidad()
// - calcularCosto(meses)

// calcularCosto(meses) debe retornar:
//
// precioMensual * meses





// ------------------------------------------------------
// CLASE APARTAMENTO
// ------------------------------------------------------

// Crea una clase llamada Apartamento.

// Apartamento debe heredar de Propiedad.

// Debe agregar las siguientes propiedades:
// - piso
// - tieneAscensor

// Debes utilizar:
// - extends
// - super()





// ------------------------------------------------------
// CLASE CASA
// ------------------------------------------------------

// Crea una clase llamada Casa.

// Casa debe heredar de Propiedad.

// Debe agregar las siguientes propiedades:
// - tienePatio
// - numeroPisos

// Debes utilizar:
// - extends
// - super()





// ------------------------------------------------------
// CLASE USUARIO
// ------------------------------------------------------

// Crea una clase llamada Usuario.

// La clase debe tener:
// - nombre
// - correo
// - propiedadesFavoritas

// propiedadesFavoritas debe iniciar como un arreglo vacío.

// Agrega los siguientes métodos:
// - agregarFavorito(propiedad)
// - eliminarFavorito(idPropiedad)
// - mostrarFavoritos()

// Reglas:
// - No permitir que el usuario agregue dos veces
//   la misma propiedad a favoritos.
// - eliminarFavorito() debe eliminar una propiedad por su id.
// - mostrarFavoritos() debe mostrar las propiedades guardadas.





// ------------------------------------------------------
// EJEMPLO DE USO DEL PROYECTO
// ------------------------------------------------------

// const apartamento = new Apartamento(
//   1,
//   "Apartamento moderno en Cali",
//   "Cali",
//   1500000,
//   3,
//   true,
//   8,
//   true
// );
//
// const usuario = new Usuario(
//   "Jairo",
//   "jairo@email.com"
// );
//
// usuario.agregarFavorito(apartamento);
// usuario.mostrarFavoritos();





// ======================================================
// RETOS ADICIONALES
// ======================================================

// 1. Evita agregar propiedades duplicadas a favoritos.

// 2. No permitas precios negativos.

// 3. No permitas cantidades negativas.

// 4. Valida que los campos obligatorios no estén vacíos.

// 5. Agrega métodos para actualizar información.

// 6. Crea arreglos con varios objetos.

// 7. Recorre los arreglos usando forEach().

// 8. Busca objetos utilizando find().

// 9. Elimina objetos utilizando filter().

// 10. Calcula totales utilizando reduce().





// ======================================================
// ELEMENTOS QUE DEBES PRACTICAR
// ======================================================

// Clase:
// class NombreClase {}

// Constructor:
// constructor() {}

// Propiedades:
// this.nombre = nombre;

// Métodos:
// nombreMetodo() {}

// Crear objetos:
// const objeto = new NombreClase();

// Ejecutar métodos:
// objeto.nombreMetodo();

// Retornar valores:
// return resultado;

// Herencia:
// extends

// Ejecutar el constructor padre:
// super();

// Propiedades privadas:
// #saldo

// Condicionales:
// if
// else

// Arreglos:
// []

// Métodos de arreglos:
// forEach()
// find()
// filter()
// reduce()





// ======================================================
// ERROR COMÚN
// ======================================================

// Incorrecto:
//
// calcularTotal() {
//   return precio * cantidad;
// }

// Correcto:
//
// calcularTotal() {
//   return this.precio * this.cantidad;
// }

// Dentro de una clase debes utilizar this
// para acceder a las propiedades del objeto.


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


