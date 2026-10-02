# Ejercicios de práctica SQL — MySQL

## Nivel básico — Tabla `productos`

1. Crear una base de datos llamada `tienda_practica`. = FINALIZADO
2. Seleccionar la base de datos `tienda_practica`. = FINALIZADO
2. Seleccionar la base de datos `tienda_practica`.
3. Crear una tabla llamada `productos` con los campos: id, nombre, categoría, precio, stock y fecha de creación.
4. Insertar al menos 5 productos diferentes. = FINALIZADO
5. Mostrar todos los productos. = FINALIZADO
6. Mostrar únicamente el nombre y el precio de los productos. = FINALIZADO
7. Mostrar los productos cuyo precio sea mayor a $200.000 = FINALIZADO
8. Mostrar únicamente los productos de la categoría `Tecnologia`. = FINALIZADO
9. Ordenar todos los productos desde el más caro hasta el más barato. = FINALIZADO
10. Mostrar los 3 productos más caros.= Finalizado
11. Mostrar los productos cuyo stock sea mayor a 10 unidades. = FINALIZADO
12. Mostrar los productos cuyo precio esté entre $100.000 y $700.000. = FINALIZADO
13. Mostrar los productos creados después del 2 de septiembre de 2026. = FINALIZADO
14. Cambiar el stock del producto con id 1 a 30 unidades. = FINALIZADO
15. Aumentar en 5 unidades el stock de un producto. = FINALIZADO
16. Cambiar el precio de un producto. = FINALIZADO
17. Eliminar el producto con id 5. = FINALIZADO
18. Contar cuántos productos existen. = FINALIZADO
19. Encontrar el producto más caro. = FINALIZADO
20. Encontrar el producto más barato. = FINALIZADO
21. Calcular el precio promedio de los productos. = FINALIZADO
22. Calcular la suma total del stock disponible. = FINALIZADO

---

# Nivel intermedio — Tablas `clientes` y `ventas`

23. Crear una tabla llamada `clientes` con los campos: id, nombre, ciudad y correo.
24. Crear una tabla llamada `ventas` con los campos: id, cliente_id, fecha y total.
25. Crear una relación entre `ventas` y `clientes` utilizando una llave foránea.
26. Insertar al menos 5 clientes.
27. Insertar al menos 10 ventas asociadas a diferentes clientes.
28. Mostrar todos los clientes.
29. Mostrar todas las ventas.
30. Mostrar el nombre del cliente junto con la fecha y el valor de cada venta utilizando `INNER JOIN`.
31. Mostrar solamente las ventas realizadas por clientes de Cali.
32. Calcular el valor total vendido.
33. Calcular el promedio de las ventas.
34. Encontrar la venta más alta.
35. Encontrar la venta más baja.
36. Contar cuántas ventas existen.
37. Mostrar cuánto dinero ha comprado cada cliente.
38. Mostrar cuántas compras ha realizado cada cliente.
39. Mostrar solamente los clientes cuyo total comprado sea superior a $400.000.
40. Mostrar solamente los clientes que tengan más de una venta.
41. Ordenar los clientes desde el que más dinero ha comprado hasta el que menos.
42. Mostrar los 3 clientes que más dinero han comprado.
43. Mostrar cuánto dinero se ha vendido por ciudad.
44. Mostrar cuántos clientes existen en cada ciudad.
45. Mostrar las ciudades que tengan más de un cliente.

---

# Nivel práctico — Tabla `movimientos`

46. Crear una base de datos llamada `bd_grande`.
47. Crear una tabla llamada `movimientos` con los campos:
   - id
   - cliente_id
   - producto_id
   - cantidad
   - precio
   - ciudad
   - fecha

48. Generar 200.000 registros de prueba.
49. Comprobar que realmente existen 200.000 registros.
50. Mostrar los primeros 20 movimientos.
51. Contar la cantidad total de movimientos.
52. Calcular el valor total generado por todos los movimientos.
53. Calcular el precio promedio de los movimientos.
54. Encontrar el precio máximo.
55. Encontrar el precio mínimo.
56. Encontrar el movimiento más caro.
57. Encontrar el movimiento más barato.
58. Mostrar solamente los movimientos cuyo precio sea superior a $500.000.
59. Mostrar movimientos cuyo precio esté entre $200.000 y $600.000.
60. Mostrar movimientos realizados en Cali.
61. Mostrar movimientos realizados en Cali o Bogotá.
62. Mostrar movimientos que no sean de Cali.
63. Contar cuántos movimientos existen por ciudad.
64. Calcular la facturación total por ciudad.
65. Ordenar las ciudades desde la que más factura hasta la que menos.
66. Encontrar la ciudad con mayor facturación.
67. Mostrar los 10 productos que tienen más movimientos.
68. Mostrar los 5 clientes que más dinero han comprado.
69. Mostrar los productos que aparecen más de 400 veces.
70. Contar cuántos clientes diferentes existen.
71. Contar cuántos productos diferentes existen.
72. Mostrar cuántos productos distintos ha comprado cada cliente.
73. Calcular cuánto dinero ha gastado cada cliente.
74. Mostrar los clientes cuyo total comprado supere $5.000.000.
75. Mostrar los 20 clientes con mayor cantidad de movimientos.

---

# Ejercicios con fechas

76. Mostrar solamente los movimientos realizados durante 2026.
77. Mostrar los movimientos realizados entre enero y junio de 2026.
78. Mostrar los movimientos realizados en septiembre de 2026.
79. Mostrar los movimientos realizados durante un día específico.
80. Calcular las ventas por año.
81. Calcular las ventas por mes.
82. Contar cuántos movimientos existen por año.
83. Contar cuántos movimientos existen por mes.
84. Encontrar el mes con mayor facturación.
85. Mostrar la fecha más antigua registrada.
86. Mostrar la fecha más reciente registrada.

---

# Ejercicios con `GROUP BY` y `HAVING`

87. Agrupar los movimientos por ciudad.
88. Agrupar los movimientos por producto.
89. Agrupar los movimientos por cliente.
90. Contar cuántos movimientos tiene cada producto.
91. Mostrar productos con más de 300 movimientos.
92. Mostrar clientes con más de 20 movimientos.
93. Mostrar ciudades con más de 10.000 movimientos.
94. Calcular el precio promedio por ciudad.
95. Mostrar solamente las ciudades cuyo precio promedio sea superior a $400.000.

---

# Ejercicios con subconsultas

96. Mostrar los movimientos cuyo precio sea superior al precio promedio.
97. Mostrar los movimientos cuyo precio sea igual al precio máximo registrado.
98. Mostrar los clientes que hayan gastado más que el promedio de todos los clientes.
99. Encontrar los productos con más movimientos que el promedio de movimientos por producto.
100. Mostrar la ciudad que tenga la mayor facturación.

---

# Índices y rendimiento

101. Crear un índice para la columna `cliente_id`.
102. Crear un índice para la columna `producto_id`.
103. Crear un índice para la columna `fecha`.
104. Crear un índice para la columna `ciudad`.
105. Crear un índice compuesto utilizando `ciudad` y `fecha`.
106. Analizar con `EXPLAIN` una consulta que busque un cliente específico.
107. Analizar con `EXPLAIN` una consulta que busque un producto específico.
108. Analizar con `EXPLAIN` una consulta que utilice un rango de fechas.
109. Comparar una consulta antes y después de crear un índice.
110. Identificar si MySQL está utilizando el índice creado.

---

# Reto final

Crear una consulta que muestre los **10 clientes que más dinero compraron durante 2026**.

La consulta debe mostrar:

- `cliente_id`
- Cantidad de movimientos realizados.
- Cantidad total de productos comprados.
- Dinero total gastado.
- Solamente movimientos realizados durante 2026.
- Los resultados deben estar ordenados desde el cliente que más dinero gastó hasta el que menos.
- Mostrar únicamente los primeros 10 resultados.

---

# Ruta recomendada de aprendizaje

Practicar los temas en este orden:

1. `CREATE DATABASE`
2. `CREATE TABLE`
3. `INSERT`
4. `SELECT`
5. `WHERE`
6. `ORDER BY`
7. `LIMIT`
8. `UPDATE`
9. `DELETE`
10. `COUNT`
11. `SUM`
12. `AVG`
13. `MIN`
14. `MAX`
15. `GROUP BY`
16. `HAVING`
17. `INNER JOIN`
18. Subconsultas
19. Índices
20. `EXPLAIN`
21. Vistas
22. Procedimientos almacenados
23. Transacciones