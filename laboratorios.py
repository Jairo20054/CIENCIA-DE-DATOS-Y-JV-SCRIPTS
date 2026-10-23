#Una institución permite prestar un portátil si el estudiante está activo, no tiene préstamos vencidos y existen equipos disponibles.
#Debes describir el sistema, identificar entrada–proceso–salida y diseñar el algoritmo en pseudocódigo.#

#Solución:
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

#FIN

#-----------------------------------------------------------------------------------------------------------------

#Diseña los campos de un registro de vehículos y un programa Python que calcule una tarifa de $3.000 COP por cada hora o fracción. El tiempo se recibe en minutos enteros positivos.

#INICIO

   # DEFINIR CAMPOS DEL REGISTRO = cedula , nombres_completos, Placa_vehiculo

  #  DEFINIR TARIFA_CONSTANTE = 3000

   # LEER DATOS DEL VEHÍCULO = cedula = input("ingrese la cedula"), nombres_Completos = input("ingrese Nombre completos"), 

  #  LEER MINUTOS_ESTADIA = Minutos_Estadias = Input(INT("Ingrese tiempo total"))

  #  SI [cedula = ISNAN || nombre_completos = "" ] ENTONCES console.log("ingre valores validos")

  #  Valor = Minutos_Estadias * TARIFA_CONSTANTE

  #    MOSTRAR [ ´el valor a pagar el es ${valor}´]

  #  SINO

    #    MOSTRAR [no puedes sair, no has realizado el pago]

#   FIN SI = usuario no ha pagado 

#  FIN

#SOLUCIONES 

CEDULA = input(int("Ingrese numero de cedula")),

Nombre_Completo = input("ingrese Nombre Completo")



