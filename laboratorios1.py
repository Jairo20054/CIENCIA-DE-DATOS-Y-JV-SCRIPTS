#Una institución permite prestar un portátil si el estudiante está activo, no tiene préstamos vencidos y existen equipos disponibles.
#Debes describir el sistema, identificar entrada–proceso–salida y diseñar el algoritmo en pseudocódigo.#

Solución:
#sistema de inventario institución fidelina echeverry, el objetivo es poner controlar el prestamo de equipo a los estudiante.

#Entradas; nombre del estudiante, identificación, estado( activo/inactivo )#

#INICIO

   # LEER estado_estudiante
   # LEER prestamos_vencidos
    #LEER equipos_disponibles

    #SI EK estudiante esta activo Y (AND) NO TIENE prestamos vencidos Y (AND) HAY EQUIPOS disponibles  ENTONCES

      #  reakizar prestamo

 #   SINO

   #  no se reakiza ek prestamo.   

   # FIN SI

  #  si akguna condición fakka, se niega ek prestamo.

FIN

#-----------------------------------------------------------------------------------------------------------------

#Diseña los campos de un registro de vehículos y un programa Python que calcule una tarifa de $3.000 COP por cada hora o fracción. El tiempo se recibe en minutos enteros positivos.

#INICIO

   # DEFINIR CAMPOS DEL REGISTRO = cedula , nombres_completos, Placa_vehiculo

  #  DEFINIR TARIFA_CONSTANTE = 3000

   # LEER DATOS DEL VEHÍCULO = cedula = input("ingrese la cedula"), nombres_Completos = input("ingrese Nombre completos"), placa_vehiculo = input("Ingrese Placa Vehiculo") 

  #  LEER MINUTOS_ESTADIA = Minutos_Estadia = input("ingrese los minutos de estadia")

  #  SI [cedula ISNAN || nombre_completos = "" ||placa_vehiculo ISNAN] ENTONCES Ingresar valores correctos

  #  [Volor_Final= Minutos_Estadias * Taria_Constante]

  #   [Verificar si sobran minutos]

   #     [Calcular las horas que se cobrarán]

   #     [´el valor a pagar es de ${Valor_Final}´]


  #  SINO

  #      MOSTRAR [mensaje de error]

  #  FIN SI

    # SOLUCIÓN

    
# 1. Definir la tarifa
TARIFA_HORA = 3000

# 2. Registrar los datos del vehículo
cedula = input("Ingrese el número de cédula: ").strip()
nombre_completo = input("Ingrese los nombres completos: ").strip()
placa_vehiculo = input("Ingrese la placa del vehículo: ").strip()

# 3. Validar los datos del registro
if not cedula.isdigit() or not nombre_completo or not placa_vehiculo:
    print("Error: ingrese datos válidos.")
else:
    try:
        minutos_estadia = int(
            input("Ingrese los minutos de estadía: ")
        )

        if minutos_estadia <= 0:
            print("Error: los minutos deben ser positivos.")
        else:
            # 4. Calcular las horas cobrables
            horas = (minutos_estadia + 59) // 60

            # 5. Calcular el costo
            valor_final = horas * TARIFA_HORA

            # 6. Mostrar el resultado
            print("\n--- REGISTRO DEL VEHÍCULO ---")
            print("Cédula:", cedula)
            print("Nombre:", nombre_completo)
            print("Placa:", placa_vehiculo)
            print("Minutos de estadía:", minutos_estadia)
            print("Horas cobradas:", horas)
            print(f"Valor a pagar: ${valor_final:,} COP")

    except ValueError:
        print("Error: debe ingresar los minutos como un número entero.")


## - # EJERCICIO: CONTROL DE INVENTARIO

# Una tienda comienza con 10 unidades de un producto.

# Recibe una lista de cantidades solicitadas por clientes.

# El programa debe revisar cada solicitud utilizando un ciclo.

# Si la cantidad es mayor que 0 y hay inventario suficiente,
# se aprueba y se descuentan las unidades solicitadas.

# Si la cantidad es mayor que 0, pero no hay inventario
# suficiente, se rechaza sin modificar el inventario.

# Si la cantidad es 0 o negativa, se considera inválida.

# Debes utilizar funciones para realizar las validaciones.

# Al finalizar, mostrar:
# - Cantidad de solicitudes aprobadas.
# - Cantidad de solicitudes rechazadas.
# - Cantidad de solicitudes inválidas.
# - Inventario restante.


# CASOS DE PRUEBA

# Caso 1: [4, 3]
# Esperado: 2 aprobadas, saldo 3.

# Caso 2: [10, 1]
# Esperado: 1 aprobada, 1 rechazada, saldo 0.

# Caso 3: [0, -2, 2]
# Esperado: 2 inválidas, 1 aprobada, saldo 8.


# ACTIVIDAD:
# 1. Realiza el pseudocódigo.
# 2. Desarrolla el programa en Python.
# 3. Ejecuta los tres casos de prueba.

## Inventario

#entradas
#cantidad_unidades = 10 , 
# Lista_cantidades = Input("ingrese las cantidades")
# while cantidad_unidades < 0 Print("ingrese un numero mayor")
        #else(if Lista_cantidades < 0 or "") print("ingrese un valor correcto")
# if (Lista_cantidades >= 0) print("") 