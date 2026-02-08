import numpy as np

# Crear una matriz 3x3
matriz = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print("Matriz 3x3:")
print(matriz)
print()

# Propiedades de la matriz
print("Shape (forma):", matriz.shape)  # (3, 3) - 3 filas, 3 columnas
print("Size (tamaño):", matriz.size)   # 9 elementos en total
print("Dtype (tipo):", matriz.dtype)   # tipo de datos
print("Ndim (dimensiones):", matriz.ndim)  # 2 dimensiones
print("Itemsize:", matriz.itemsize)    # tamaño de cada elemento en bytes
print()

# Acceder a elementos específicos
print("Elemento en fila 0, columna 0:", matriz[0, 0])  # 1
print("Elemento en fila 1, columna 2:", matriz[1, 2])  # 6
print("Elemento en fila 2, columna 1:", matriz[2, 1])  # 8
print()

# Acceder a filas y columnas
print("Primera fila:", matriz[0])      # [1, 2, 3]
print("Segunda columna:", matriz[:, 1])  # [2, 5, 8]
print()

# Operaciones con matrices
print("Suma de todos los elementos:", matriz.sum())
print("Promedio:", matriz.mean())
print("Valor máximo:", matriz.max())
print("Valor mínimo:", matriz.min())
print()

# Transpuesta de la matriz
print("Matriz transpuesta:")
print(matriz.T)
