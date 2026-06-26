const peticion = async = (usuario) => {
    try {
        usuario = await fetch (/api/users)
        if (!usuario){throw new error ("error con el usuario")}
    }
    catch (error) { }

}

// desctructuración

const User = {
    name : "camilo",
    Apellido: "Gonzales",
    Ciudad : "cali",
}

console.log(User.Apellido);

// ejercicio 2 

const {nombre= "stiven", Ciudad = "Cali", Apellido = "Castillo"} = Objeto; 

console.log(Objeto.Apellido)

////////////

const peticion = async = (usuario) => {
    try {
        usuario = await fetch (/api/users)
        if (!usuario){throw new error ("error con el usuario")}
    }
    catch (error) { }

}

//////////////

const peticiones = async = (capa) => {
    try {
        usuario = await fetch(http(AuthenticatorResponse));
        if(usuario.ok) {
            throw new error ("error en el servidor")
        }
    }
    catch(error) {
        ("Error de autenticación")
    }
}