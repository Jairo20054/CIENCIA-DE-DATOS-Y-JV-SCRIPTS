Claro. Te propongo una ruta de práctica en MySQL/phpMyAdmin desde nivel básico hasta intermedio, y además una base de datos que puedes poblar con más de **200.000 registros** sin escribirlos uno por uno.

## Ejercicios básicos

Primero crea una base de datos de práctica:

```sql
CREATE DATABASE tienda_practica;

USE tienda_practica;
```

Crea una tabla de productos:

```sql
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    precio DECIMAL(10,2),
    stock INT,
    fecha_creacion DATE
);
```

Inserta algunos datos:

```sql
INSERT INTO productos (nombre, categoria, precio, stock, fecha_creacion) VALUES
('Mouse Logitech', 'Tecnologia', 85000, 25, '2026-09-01'),
('Teclado Mecanico', 'Tecnologia', 180000, 12, '2026-09-02'),
('Silla Oficina', 'Muebles', 650000, 8, '2026-09-03'),
('Monitor 24 pulgadas', 'Tecnologia', 720000, 15, '2026-09-04'),
('Escritorio', 'Muebles', 450000, 6, '2026-09-05');
```

Ahora practica estos ejercicios:

1. Mostrar todos los productos:

```sql
SELECT * FROM productos;
```

2. Mostrar solo nombre y precio:

```sql
SELECT nombre, precio
FROM productos;
```

3. Productos con precio mayor a 200000:

```sql
SELECT *
FROM productos
WHERE precio > 200000;
```

4. Productos de categoría Tecnología:

```sql
SELECT *
FROM productos
WHERE categoria = 'Tecnologia';
```

5. Ordenar de mayor a menor precio:

```sql
SELECT *
FROM productos
ORDER BY precio DESC;
```

6. Mostrar los 3 más caros:

```sql
SELECT *
FROM productos
ORDER BY precio DESC
LIMIT 3;
```

7. Cambiar el stock de un producto:

```sql
UPDATE productos
SET stock = 30
WHERE id = 1;
```

8. Eliminar un producto:

```sql
DELETE FROM productos
WHERE id = 5;
```

---

# Nivel intermedio

Ahora crea tablas relacionadas.

```sql
CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    ciudad VARCHAR(50),
    correo VARCHAR(100)
);
```

```sql
CREATE TABLE ventas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    fecha DATE,
    total DECIMAL(12,2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

Inserta clientes:

```sql
INSERT INTO clientes (nombre, ciudad, correo) VALUES
('Carlos Perez', 'Cali', 'carlos@email.com'),
('Ana Gomez', 'Bogota', 'ana@email.com'),
('Luis Torres', 'Medellin', 'luis@email.com'),
('Maria Lopez', 'Cali', 'maria@email.com');
```

Inserta ventas:

```sql
INSERT INTO ventas (cliente_id, fecha, total) VALUES
(1, '2026-09-01', 350000),
(2, '2026-09-02', 720000),
(1, '2026-09-03', 120000),
(3, '2026-09-04', 950000),
(4, '2026-09-05', 410000);
```

Practica estos ejercicios:

### JOIN

Mostrar cliente y venta:

```sql
SELECT
    clientes.nombre,
    ventas.fecha,
    ventas.total
FROM ventas
INNER JOIN clientes
ON ventas.cliente_id = clientes.id;
```

### SUM

Total vendido:

```sql
SELECT SUM(total) AS total_vendido
FROM ventas;
```

### AVG

Promedio de ventas:

```sql
SELECT AVG(total) AS promedio_ventas
FROM ventas;
```

### GROUP BY

Ventas por cliente:

```sql
SELECT
    clientes.nombre,
    SUM(ventas.total) AS total_comprado
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id
GROUP BY clientes.id, clientes.nombre;
```

### HAVING

Clientes que han comprado más de $400.000:

```sql
SELECT
    clientes.nombre,
    SUM(ventas.total) AS total_comprado
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id
GROUP BY clientes.id, clientes.nombre
HAVING SUM(ventas.total) > 400000;
```

---

# Base de datos para practicar con más de 200.000 registros

Puedes crear una tabla grande así:

```sql
CREATE DATABASE bd_grande;

USE bd_grande;
```

```sql
CREATE TABLE movimientos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    producto_id INT,
    cantidad INT,
    precio DECIMAL(10,2),
    ciudad VARCHAR(50),
    fecha DATETIME
);
```

Ahora, en MySQL 8 puedes generar 200.000 registros con una consulta recursiva.

Primero aumenta el límite:

```sql
SET SESSION cte_max_recursion_depth = 250000;
```

Luego:

```sql
INSERT INTO movimientos
(cliente_id, producto_id, cantidad, precio, ciudad, fecha)

WITH RECURSIVE numeros AS (
    SELECT 1 AS n

    UNION ALL

    SELECT n + 1
    FROM numeros
    WHERE n < 200000
)

SELECT
    FLOOR(1 + RAND() * 10000),
    FLOOR(1 + RAND() * 500),
    FLOOR(1 + RAND() * 10),
    ROUND(10000 + RAND() * 990000, 2),

    CASE FLOOR(1 + RAND() * 5)
        WHEN 1 THEN 'Cali'
        WHEN 2 THEN 'Bogota'
        WHEN 3 THEN 'Medellin'
        WHEN 4 THEN 'Barranquilla'
        ELSE 'Cartagena'
    END,

    DATE_SUB(
        NOW(),
        INTERVAL FLOOR(RAND() * 1000) DAY
    )

FROM numeros;
```

Comprueba cuántos registros tienes:

```sql
SELECT COUNT(*)
FROM movimientos;
```

Debe darte:

```text
200000
```

Si quieres más de 200.000, por ejemplo **250.000**, cambia:

```sql
WHERE n < 200000
```

por:

```sql
WHERE n < 250000
```

---

# Consultas interesantes sobre los 200.000 registros

Cantidad total de movimientos:

```sql
SELECT COUNT(*) AS total
FROM movimientos;
```

Venta total:

```sql
SELECT SUM(cantidad * precio) AS ventas_totales
FROM movimientos;
```

Venta promedio:

```sql
SELECT AVG(precio) AS precio_promedio
FROM movimientos;
```

Ventas por ciudad:

```sql
SELECT
    ciudad,
    COUNT(*) AS movimientos,
    SUM(cantidad * precio) AS total
FROM movimientos
GROUP BY ciudad
ORDER BY total DESC;
```

Los 10 productos con más movimientos:

```sql
SELECT
    producto_id,
    COUNT(*) AS cantidad_movimientos
FROM movimientos
GROUP BY producto_id
ORDER BY cantidad_movimientos DESC
LIMIT 10;
```

Clientes que más dinero han movido:

```sql
SELECT
    cliente_id,
    SUM(cantidad * precio) AS total_comprado
FROM movimientos
GROUP BY cliente_id
ORDER BY total_comprado DESC
LIMIT 20;
```

Consultar solamente 2026:

```sql
SELECT *
FROM movimientos
WHERE YEAR(fecha) = 2026;
```

Consultar un rango de fechas:

```sql
SELECT *
FROM movimientos
WHERE fecha BETWEEN '2026-01-01' AND '2026-06-30';
```

---

## Ejercicios intermedios que te recomiendo resolver tú

Sin mirar la respuesta primero, intenta hacer estos:

1. Encontrar el movimiento más caro.
2. Encontrar el movimiento más barato.
3. Mostrar cuántas ventas tiene cada ciudad.
4. Encontrar los 5 clientes que más compran.
5. Mostrar productos que aparecen más de 400 veces.
6. Calcular ventas por año.
7. Calcular ventas por mes.
8. Mostrar solamente ventas superiores a $500.000.
9. Contar cuántos clientes diferentes existen.
10. Encontrar la ciudad con mayor facturación.

Por ejemplo, para clientes únicos:

```sql
SELECT COUNT(DISTINCT cliente_id)
FROM movimientos;
```

## También debes practicar índices

Con 200.000 registros empezarás a notar por qué los índices son importantes.

Por ejemplo:

```sql
CREATE INDEX idx_cliente
ON movimientos(cliente_id);
```

```sql
CREATE INDEX idx_producto
ON movimientos(producto_id);
```

```sql
CREATE INDEX idx_fecha
ON movimientos(fecha);
```

Y uno compuesto:

```sql
CREATE INDEX idx_ciudad_fecha
ON movimientos(ciudad, fecha);
```

Después puedes comparar consultas usando:

```sql
EXPLAIN
SELECT *
FROM movimientos
WHERE cliente_id = 500;
```

Esto ya te empieza a llevar de SQL básico a un nivel bastante más real.

Una buena ruta para ti sería dominar en este orden: **CREATE → INSERT → SELECT → WHERE → ORDER BY → UPDATE → DELETE → COUNT/SUM/AVG → GROUP BY → HAVING → JOIN → subconsultas → índices → vistas → procedimientos almacenados → transacciones**.
