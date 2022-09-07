addEventListener("DOMContentLoaded",()=>{
    console.log(`11. Escribir un programa que calcule el volumen de un elipsoide
    V = (4/3) * PI * a * b *c`)

    let numa= Number(prompt(`Escribe la altura del elipsoide:  `))
    let numb= Number(prompt(`Escribe el largo del elipsoide: `))
    let numc= Number(prompt(`Escribe el ancho del elipsoide: `))

    let solucion= ((4/3)* Math.PI * numa * numb * numc)

    console.log(`El volumen del elipsoide es: ${solucion}`)
})