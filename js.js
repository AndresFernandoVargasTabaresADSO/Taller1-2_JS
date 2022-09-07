addEventListener("DOMContentLoaded",()=>{
    console.log(`4. Escribir un programa que calcule el área de un triángulo:    Base = 7 altura = 4 área del triángulo = (base * altura)/2`)

    let lado1 = Number(prompt(`Escribe la base de tu triangulo: `))
    let lado2 = Number(prompt(`Ingresa la altura de tu triangulo: `))
    let solucion= (lado1 * lado2)/2
    
    console.log(`El area de tu triangulo es: ${solucion}`)
})