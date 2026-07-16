// ============================================================
// EJERCICIOS BÁSICOS
// ============================================================

// 1. Crea una variable con tu nombre y muéstrala en la consola.

let nombre = jairo;
console.log(nombre)

// 2. Crea una variable con tu edad y muestra el mensaje:
// "Tengo X años".

let edad = 25;
console.log(edad);

// 3. Crea dos variables numéricas y muestra su suma en la consola.

const nummero_1 = 10;
const numero_2 = 15;
suma = nummero_1 + numero_2;
console.log(suma);

// 4. Crea una función que reciba dos números y retorne su suma.

const sumatoria = (numero1, numero2) => {
    return numero1 + numero2;
}
console.log(sumatoria(45,50));

// 5. Crea una función que reciba un número y determine si es par o impar.

const par_o_impar = (Numero) => {
    if (numero % 2 === 0) {
        return "el numero es par"
    } else {"el numero es impar"}
}
console.log(par_o_impar(23));

// 6. Crea una función que reciba una edad y determine si la persona
// es mayor o menor de edad.

// 7. Crea una función que reciba el precio de un producto y calcule
// el valor correspondiente al IVA del 19 %.

// 8. Crea una función que reciba un nombre y retorne un saludo personalizado.

// 9. Crea un array con cinco frutas y muestra cada fruta en la consola.

// 10. Crea un array de números y muestra únicamente los números
// que sean mayores que 10.

// 11. Crea una función que reciba una palabra y retorne la cantidad
// de letras que contiene.

// 12. Crea una función que reciba una frase y la convierta completamente
// a letras mayúsculas.

// 13. Crea un objeto llamado usuario que contenga las propiedades:
// nombre, edad y correo.

// 14. Crea un objeto llamado producto que contenga las propiedades:
// nombre, precio y stock.

// 15. Crea una función que reciba un producto y muestre su nombre
// y su precio en la consola.


// ============================================================
// EJERCICIOS INTERMEDIOS
// ============================================================

// 1. Crea una función que reciba un array de números y retorne
// la suma total de todos sus elementos.

// 2. Crea una función que reciba un array de números y retorne
// el promedio de sus elementos.

// 3. Crea una función que reciba un array de números y retorne
// únicamente los números pares.

// 4. Crea una función que reciba un array de edades y cuente
// cuántas personas son mayores de edad.

// 5. Crea una función que reciba un array de productos y retorne
// únicamente los productos que tengan stock disponible.

// 6. Crea una función que reciba un array de productos y un precio máximo.
// La función debe retornar los productos cuyo precio sea menor
// al valor indicado.

// 7. Crea una función que ordene un array de productos desde
// el precio más bajo hasta el precio más alto.

// 8. Crea una función que reciba un correo electrónico y valide
// si contiene los caracteres "@" y ".com".

// 9. Crea una función que reciba una contraseña y valide si tiene
// como mínimo ocho caracteres.

// 10. Crea una función que simule un inicio de sesión comparando
// un nombre de usuario y una contraseña con los datos registrados.

// 11. Crea un array de propiedades. Cada propiedad debe tener:
// ID, ciudad, precio, número de habitaciones y parqueadero.

// 12. Crea una función que reciba las propiedades y una ciudad.
// La función debe retornar únicamente las propiedades de esa ciudad.

// 13. Crea una función que filtre y retorne únicamente las propiedades
// que tengan parqueadero.

// 14. Crea una función que busque y retorne una propiedad utilizando su ID.

// 15. Crea una función que actualice el precio de una propiedad
// utilizando su ID.

// 16. Crea una función que elimine una propiedad de un array
// utilizando su ID.

// 17. Crea una función que cuente cuántas propiedades existen
// en cada ciudad.

// 18. Crea una función que reciba una lista de tareas y retorne
// únicamente las tareas pendientes.

// 19. Crea una función que busque una tarea por su ID y cambie
// su estado de pendiente a completada.

// 20. Crea una función que calcule el total de una compra utilizando:
// cantidad de productos, precio unitario y porcentaje de descuento.


// ============================================================
// EJERCICIOS AVANZADOS
// ============================================================

// 1. Crea una función que agrupe las propiedades por ciudad
// utilizando un objeto.

// 2. Crea una función que reciba un array de propiedades y retorne
// la propiedad más económica.

// 3. Crea una función que reciba un array de propiedades y retorne
// la propiedad más costosa.

// 4. Crea una función que permita buscar propiedades utilizando
// los siguientes filtros: ciudad, precio máximo, cantidad mínima
// de habitaciones y disponibilidad de parqueadero.

// 5. Crea una función que calcule el precio total de una reserva
// utilizando: precio por noche, número de noches, costo de limpieza
// e impuestos.

// 6. Crea una función que reciba una fecha de entrada y una fecha
// de salida, y calcule cuántas noches dura la reserva.

// 7. Crea una función que valide si una propiedad está disponible
// durante un rango de fechas, comparándolo con una lista de
// reservas existentes.

// 8. Crea una función que reciba un array de usuarios y retorne
// un resumen con la cantidad de administradores, arrendadores
// y clientes.

// 9. Crea una función que reciba una lista de reservas y calcule
// cuánto dinero ha ganado cada propietario.

// 10. Crea una función que reciba un array de productos y genere
// un resumen con la cantidad total de productos, el valor total
// del inventario y el producto más caro.

// 11. Crea una función que utilice el método map para transformar
// una lista de propiedades en tarjetas resumidas.

// 12. Cada tarjeta resumida debe contener únicamente:
// ID, ciudad, precio, habitaciones y disponibilidad de parqueadero.

// 13. Crea una función que utilice filter y reduce para calcular
// el total de ingresos generado por las reservas confirmadas.

// 14. Crea una función que utilice destructuring para extraer
// y mostrar la información principal de una propiedad.

// 15. Crea una función que utilice el operador spread para agregar
// una propiedad nueva sin modificar el array original.

// 16. Crea una función que utilice rest parameters para recibir
// y sumar una cantidad indefinida de números.

// 17. Crea una función que utilice optional chaining para acceder
// de forma segura a la dirección de un usuario.

// 18. Si el usuario no tiene una dirección registrada, la función
// debe retornar un mensaje indicando que la dirección no está disponible.

// 19. Crea una función asincrónica que simule la consulta de propiedades
// desde una API utilizando una Promise.

// 20. La consulta simulada debe esperar un tiempo determinado antes
// de retornar la lista de propiedades.

// 21. Crea una función que utilice async y await para obtener
// una lista simulada de usuarios después de dos segundos.

// 22. Crea una función que maneje errores utilizando try y catch
// cuando falle una consulta simulada.

// 23. Cuando ocurra un error, muestra en la consola un mensaje claro
// explicando que no fue posible completar la consulta.


// ============================================================
// PROYECTO FINAL: SISTEMA CRUD DE PROPIEDADES
// ============================================================

// Crea un pequeño sistema de administración de propiedades
// utilizando JavaScript.

// Crea un array que funcione como almacenamiento de las propiedades.

// Crea una función para registrar una propiedad nueva.

// Cada propiedad debe tener un ID único, título, ciudad, precio,
// número de habitaciones y disponibilidad de parqueadero.

// Crea una función para listar todas las propiedades registradas.

// Crea una función para buscar una propiedad utilizando su ID.

// Crea una función para actualizar los datos de una propiedad
// utilizando su ID.

// Crea una función para eliminar una propiedad utilizando su ID.

// Valida que una propiedad exista antes de actualizarla o eliminarla.

// Muestra un mensaje cuando la propiedad buscada no exista.

// Organiza cada operación del sistema en una función independiente.

// Realiza pruebas creando, listando, actualizando y eliminando propiedades.