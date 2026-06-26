let array = [ 1, 2, 3,44, 55,66]

let nuevo = array.map(function (array) {
    return array + 2
})
console.log(nuevo)



//

let arroz = ["Bueno", "Amable", "Bondadoso", "El mejor"]

let DIOS = arroz.map(function (arroz) {
    return arroz + "DIOSS"    
})
console.log(DIOS)

// 

let full = [2, 4, 5, 6, 7, 8, ,9]

let conver = full.map(num => {
    return num * 3
});
console.log(conver)

////



/// desctruturación

const objeto = {
    camisa : "azul",
    logo: "mejor"
}

console.log(objeto.camisa);

//// 
 
const propiedades = {
    casa_1: 1200000,
    casa_2: 1600000,
    casa_3: 5200000,
    casa_4: 8200000
}

/// funcion map

const numerol = [ 2, 4 ,6 ,8 , 10];

const funciones = numerol.map((numerol) =>{
    return numerol * 5;
})

console.log(funciones)