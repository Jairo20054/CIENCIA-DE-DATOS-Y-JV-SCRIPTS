import numpy as np
import pandas as pd  # <--- ¡Esta es la línea que faltaba!

##

import pandas as pd
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

df = pd.DataFrame(bases_de_dtaos)
#df[['ID_Cliente', 'Precio_USD']]= df[['ID_Cliente', 'Precio_USD']]
##print(df[['ID_Cliente', 'Precio_USD']].astype(float))
base = bases_de_dtaos.loc[[1,2]]
print(base)## sirve para sacar el promedio, desviación estar, min y maximo


