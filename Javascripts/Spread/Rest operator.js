const casa = {
    barrio: "villa clara",
    ciudad: "cali",
    precio: 100000
}

const nuevos = {
    ...casa,
    precio: 2000000,
}

console.log(nuevos);

// NUmeros 
const numeros = [1, 2, 3, 4, 5];

const copia = {
    ...numeros,
}

console.log(copia);

// agregar numero 4

const numeros = [1, 2, 3, 4, 5];

const copia = [
    ...numeros,
    4
]

console.log(copia);

// Agregar numero 0 al inicio 

const numeross = [1, 2, 3, 4, 5,6]

const copiar = [...numeross, numeross[0]]
console.log(copiar);

// segundo ejercicio 

const regla = {colegio = "fidelian", precio : 200}

const copie = {
    ...regla,
    precio: 5000
}
console.log(copie);
