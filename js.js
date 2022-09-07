addEventListener("DOMContentLoaded",()=>{
    console.log(`5. Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4  Longitud de la circunferencia = 2 * PI * radio Área de la circunferencia = PI * radio˄2`)

    let radio = Number(prompt(`Escribe el radio de tu circuferencia: `))
    let longitud= (2 * Math.PI * radio)
    let area= (Math.PI * radio * radio)
    
    console.log(`La longitug de tu circuferencia es: ${longitud}`)
    console.log(`El area de tu circuferencia es: ${area}`)
})