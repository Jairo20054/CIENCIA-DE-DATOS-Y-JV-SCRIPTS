<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="universo">
    <h1>Calculadora</h1>
    <div id="entrada">""</div>
    <div id="resultado">0</div>
    <div id="botones">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>-</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>x</button> 
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>/</button>
    <button>C</button>
    <button>0</button>
    <button>=</button>
    <button>+</button> 
    </div>
    </div>
    
    
    <script>
 const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".boton"); // ¡Importante: todos los botones!

function calculadora() {
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent.trim();

            if (valor === "C") {
                entrada.textContent = "";
                resultado.textContent = "0";
            } else if (valor === "=") {  // ¡Aquí estaba el error: era "0" en lugar de "="!
                try {
                    const operacion = entrada.textContent
                        .replace(/x/g, "*")
                        .replace(/÷/g, "/");  // Encadenado correctamente

                    const resultadoFinal = eval(operacion);

                    // Mostramos el resultado en la pantalla
                    resultado.textContent = resultadoFinal;
                    // Opcional: pasar el resultado a entrada para seguir operando
                    entrada.textContent = resultadoFinal;
                } catch (error) {
                    resultado.textContent = "Error";
                }
            } else {
                // Acumular números y operadores
                entrada.textContent += valor;
            }
        });
    });
}

// Llamada correcta a la función (fuera de la función)
calculadora();
    </script>
</body>
</html>
