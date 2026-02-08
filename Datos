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

