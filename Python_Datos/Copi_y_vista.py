import numpy as np

arr = np.array([1, 2, 3, 4, 5])
copia = arr.copy()
arr [2] = 20
print(arr)
print(copia)

## segunda copia

import numpy as np
segundo = np.array([1,2, 3, 4, 5, 6])
tercero = segundo.copy()
segundo [3]= 31
print(segundo)
print(tercero)

## tercero 

import numpy as np
tercero = np.array([2, 4, 6, 8, 9,12])
copiass = tercero.copy()
tercero [4] = 41
print(tercero)
print(copiass)

## Vista

import numpy as np 

vista = np.array([2, 4, 6, 8,12, 14])
lulo = vista.view()
vista [2] = 34
print(vista)
print(lulo)

#.base 
import numpy as nnp

base = np.array([2, 4, 6, 8,10])
base1 = base.copy()
base2 = base.view()

print(base1.base) #verifica si comparten la misma memoria o si es independiente
print(base2.base) #verifica si comparten la misma memoria o si es independiente
