const myfunción = () => console.log(a+b);
myfunción(4 + 7)

// funciones flecha

const bubalu = (b,c) =>  b *c;
console.log(bubalu(5,8));

// funciones de orden superior

function superior(func, param) {
    return func(param)
}
superior(bubalu, 5,8)

// forEach

let consola = 0
[4,5,6].forEach ( numer => { 
    consola += Number;
    console.log(consola)
})

// segundo
const apellidos = ["jairo", "castillo"]

apellidos.forEach ( apellidos => {
    const p = document.createElement("p");
    p.textContent = apellidos;
    document.body.appendChild(p);
})

// tercero 

const mejor = [ 2, 3, 4, 5];
mejor.forEach( mejor => {
    return mejor * 2;
})
console.log(mejor)

---------------------------------------------------------------
//
function sumar (b,c) {
    return b + c;
}
console.log(sumar( 5, 7));

//2
const suman= ( b, f) => {
    return b * f;
}
console.log(suman(17,6));

//3 
const mejorr = (b,n)=> console.log(b-n);
mejor(45, 7);

//4 numero mayor
let camino = [2,3,2, 3, 98, 6, 7, 8, 9, 10];
function mayor(mejort){
    maximo = Math.max(...mejort)
    console.log(maximo)
}
mayor(camino);


