const objeto = {
    usuario : "jviafara",
    precio: 0
}


console.log(objeto?.usuario ?? "Invitado") 
console.log(objeto?.precio ?? 10000)
