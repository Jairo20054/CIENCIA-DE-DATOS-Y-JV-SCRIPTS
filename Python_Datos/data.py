import pandas as pd 

equipos = ["barcelona", "real madrid", "Valencia"]
torneo = [12, 2, 3]

estru = pd.Series(equipos, index=torneo)
la = estru.index
le = estru.values
li = estru.head(1) # como ver las filas si quiero ver las primeras
lo = estru.sort_values() # ordena de menor a mayor 
print(li)
