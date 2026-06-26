const objeto = {
    usuario : "jviafara",
    precio: 0
}


console.log(objeto?.usuario ?? "Invitado") 
console.log(objeto?.precio ?? 10000)

// valor verdadero 

const operación = 20;

const validador = operación >20 ? "mayor de edad" : "menor de edad";

// ejemplo 3 

const objetis = {
    usuario : "camila",
    precio : 300
}
console.log(objetis?.usuario ?? "usuario no existe");