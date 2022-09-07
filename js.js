addEventListener("DOMContentLoaded",()=>{
    console.log(`7. Escribir un programa que calcule el volumen de una esfera:
    Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3`)

    let radio= Number(prompt(`Escribe el radio de la esfera: `))

    let solucion= (4/3 * Math.PI * radio * radio * radio)

    console.log(`El volumen de tu esfera es: ${solucion}`)
})