#Una institución permite prestar un portátil si el estudiante está activo, no tiene préstamos vencidos y existen equipos Solicitud.
#Debes describir el sistema, identificar entrada–proceso–salida y diseñar el algoritmo en pseudocódigo.#

#Solución:
#sistema de inventario institución fidelina echeverry, el objetivo es poner controlar el prestamo de equipo a los estudiante.

#Entradas; nombre del estudiante, identificación, estado( activo/inactivo )#

#INICIO

   # LEER estado_estudiante
   # LEER prestamos_vencidos
    #LEER equipos_Solicitud

    #SI EK estudiante esta activo Y (AND) NO TIENE prestamos vencidos Y (AND) HAY EQUIPOS Solicitud  ENTONCES

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

# Recibe una lista de Inventarioes solicitadas por clientes.

# El programa debe revisar cada solicitud utilizando un ciclo.

# Si la Inventario es mayor que 0 y hay inventario suficiente,
# se aprueba y se descuentan las unidades solicitadas.

# Si la Inventario es mayor que 0, pero no hay inventario
# suficiente, se rechaza sin modificar el inventario.

# Si la Inventario es 0 o negativa, se considera inválida.

# Debes utilizar funciones para realizar las validaciones.

# Al finalizar, mostrar:
# - Inventario de solicitudes aprobadas.
# - Inventario de solicitudes rechazadas.
# - Inventario de solicitudes inválidas.
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

## Solución Inventario

#entradas
#Inventario_unidades = 10 , 
# Lista_Inventarioes = int(input("ingresa los numeros"))
# 

# def función(Inventarioes_unidades, Lista_Inventarioes):
   #while Inventario_unidades < 0 return "ingrese un numero mayor"
        #else if Lista_Inventarioes < 0 or "" 
        # return "ingrese un valor correcto"
        #    if Lista_Inventarioes >= 0 and Inventario_unidades > 0  
        # return "aprobado" + Inventario_unidades-= 1
        # if Lista_Inventarioes > 0 and Inventario_unidades < 0
        #  return "suficiente"
        # 1f Lista_Inventarioes == 0 or < 0 
        # return "operación invalida" 

#print(Lista_Inventarioes(8))

# Solución

Inventario = []

Lista_Inventarioes = int(input("ingrese la lista de Inventarioes"))

for i in range(Lista_Inventarioes):
    numero = int(input("ingrese # Inventario"))
    Inventario.append(numero)

#debajo de cada contidiconal va el contador cuentas las invalidadas, aprobadas etc..
def comprobación(Solicitud, Inventario) :
      
    if Solicitud <= 0 :
            return f"invalida"
    
    
    if Solicitud > Inventario:
        return f"rechazado"

    if Solicitud > 0 and Solicitud <= Inventario:
        return f"aprobado"

        Inventario -= Solicitud

#Contadores

invalida = 0
rechazado = 0
aprobado = 0

for solicitud in Inventario:
    resultado = comprobación(solicitud, Inventario)

    if resultado == "invalida":
        invalida += 1

    elif resultado == "rechazado":
        rechazado +=1
    else:
        aprobado +=1

print(f"solicitudes invalidas: {invalida}")
print(f"Solicitudes rechazadas: {rechazado}")
print(f"Solicitudes aprobadas: {aprobado}")


# EJERCICIO: CONTROL DE PARQUEADERO

# Un parqueadero tiene 15 cupos Solicitud.
# Recibe una lista de solicitudes de ingreso de vehículos.

# REGLAS:
# 1. Si la solicitud > 0 y hay cupos, se aprueba
#    y se descuentan los cupos utilizados.
# 2. Si no hay suficientes cupos, se rechaza.
# 3. Si la solicitud <= 0, es inválida.

# UTILIZAR:
# - Funciones (def y return).
# - Condicionales (if, elif, else).
# - Ciclo for.
# - Listas y append().
# - Contadores con += 1.

# MOSTRAR:
# - Solicitudes aprobadas.
# - Solicitudes rechazadas.
# - Solicitudes inválidas.
# - Total de vehículos ingresados.
# - Cupos restantes.

# CASOS DE PRUEBA:

# Caso 1: [5, 4, 3]
# Esperado: 3 aprobadas, 3 cupos restantes.

# Caso 2: [10, 7, 2]
# Esperado: 2 aprobadas, 1 rechazada, 3 cupos restantes.

# Caso 3: [0, -3, 8, 9, 2]
# Esperado: 2 aprobadas, 1 rechazada,
#           2 inválidas, 5 cupos restantes.

# ACTIVIDAD:
# 1. Escribir el pseudocódigo.
# 2. Desarrollar el programa en Python.
# 3. Ejecutar los tres casos.

#PSEUDOCODIGO
# Definir variable Cupos_Solicitud = []
# Definir lista de solicitudes como es una lista debe de ser un diccionario Lista_Solicitud= int(input("ingrese la lista de solicitudes"))

# def función(solicitud, Cupos_Solicitud):
# cliclo for solicitud in Lista_Diponible:
#agregar variable numero = int(input(Ingrese # de solicitud))
# lista_Solicitud.append(numero)

# Condicionales

# if Lista_Solicitud > Cupos-Solicitud 
# Cupos_Solicitud -= Lista_Solicitud
# retornar return f"cupo aprobado", Cupos_Solicitud
#Aprobada += 1

# if Cupos_Solicitud <= 0: 
#retornar return f"Operación rechazada", Cupos_Solicitud
#rechazada += 1

#if Lista_Solicitud <= 0
# retornar return f"es inválida"
#invalida +=1
