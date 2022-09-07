addEventListener("DOMContentLoaded",()=>{

    let num1 = Number(prompt(`Ingresa tu primer numero: `))
    let num2 = Number(prompt(`Ingresa tu segundo numero: `))
    let num3 = Number(prompt(`Ingresa tu tercer numero: `))
    let num4 = Number(prompt(`Ingresa tu cuarto numero: `))
    let solucion= (num1 + num2 + num3 + num4)/4
    
    console.log(`3. Un programa que lea 4 números y calcule la media. Media= (num1 + num2 + num3 + num4)/4`)
    console.log(`El promedio es: ${solucion}`)
})