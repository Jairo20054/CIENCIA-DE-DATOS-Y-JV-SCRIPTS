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
