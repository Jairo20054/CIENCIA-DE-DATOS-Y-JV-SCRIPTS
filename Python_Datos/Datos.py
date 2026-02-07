import numpy as np
import pandas as pd  # <--- ¡Esta es la línea que faltaba!

# 1. Definimos el diccionario
datos_dict = {
    'ID_Pedido': [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    'Fecha': ['2024-01-01', '2024-01-02', '2024-01-02', '2024-01-03', '2024-01-04', 
              '2024-01-05', '2024-01-05', '2024-01-06', '2024-01-07', '2024-01-08'],
    'Producto': ['Laptop', 'Mouse', 'Monitor', 'Laptop', 'Teclado', 'Mouse', 'Monitor', 'Laptop', 'Teclado', 'Smartwatch'],
    'Categoria': ['Hardware', 'Accesorio', 'Hardware', 'Hardware', 'Accesorio', 'Accesorio', 'Hardware', 'Hardware', 'Accesorio', 'Gadget'],
    'Precio_USD': [1200, 25, 300, 1200, 50, 25, 300, 1200, 50, 150],
    'Cantidad': [1, 5, 2, 1, 3, np.nan, 1, 2, np.nan, 1],
    'Ciudad': ['CDMX', 'Bogotá', 'Madrid', 'CDMX', 'Lima', 'Bogotá', 'Madrid', 'Santiago', 'Lima', 'CDMX']
}

# 2. Creamos el DataFrame
df = pd.DataFrame(datos_dict)

# 3. Ver la forma y el resultado
forma = df.shape
conversión = df.astype(float)
print(f"La forma de la matriz es: {forma}")
print(df.info()) # sirve para saber los tipos de daos 
print(conversión)

# Bases de dtaos (base para repasar)
bases_de_dtaos = {
    "ID_Cliente": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Nombre": ["Ana", "Luis", "Marta", "Jose", "Sofia", "Carlos", "Diana", "Pedro", "Lucia", "Andres"],
    "Producto": ["Laptop", "Mouse", "Monitor", "Teclado", "Impresora", "Laptop", "Tablet", "Mouse", "Monitor", "Celular"],
    "Categoria": ["Hardware", "Accesorio", "Hardware", "Accesorio", "Hardware", "Hardware", "Gadget", "Accesorio", "Hardware", "Gadget"],
    "Precio_USD": [1200, 25, 300, 50, 180, 1200, 350, 25, 300, 600],
    "Cantidad": [1, 2, 1, 3, 1, 2, 1, 4, 2, 1],
    "Ciudad": ["CDMX", "Bogota", "Madrid", "Lima", "Santiago", "CDMX", "Quito", "Bogota", "Madrid", "CDMX"],
    "Fecha": ["2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05",
              "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10"],
}

df_bases_de_dtaos = pd.DataFrame(bases_de_dtaos)
print(df_bases_de_dtaos.head())

