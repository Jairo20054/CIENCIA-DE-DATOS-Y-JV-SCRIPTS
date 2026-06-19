interface tarjetadepropiedad {
 title: string
city: string
neighborhood: string
price: number
rooms: number
bathrooms: number
hasParking: boolean}

function tarjetadepropiedad({

titule,
city,
neighborhood,
price,
rooms,
hasParking
} : tarjetapropiedadProp) {
return (
<articule clasname ="tarjeta"> 
<h1> {titulo} </h1>
<h1> {ciudad} </h1>
<h1> {neighborhood} </h1>
<h1> {rooms} </h1>
<h1> {bathrooms} </h1>
</articule>
)
}




