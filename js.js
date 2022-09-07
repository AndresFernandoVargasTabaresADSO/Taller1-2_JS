addEventListener("DOMContentLoaded",()=>{
    console.log(`9. Escribir un programa que calcule el área y el volumen de un cilindro:
    A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    V = (PI * r2) * h`)

    let radio= Number(prompt(`Escribe el radio del cilindro`))
    let altura= Number(prompt(`Escribe la altura del cilindro: `))

    let a= (2 * (Math.PI * Math.pow(radio,2))+((2*Math.PI * radio)* altura))
    let v= (Math.PI * Math.pow(radio,2)* altura)

    console.log(`El area del cilindro es: ${a}`)
    console.log(`El volumen del cilindro es: ${v}`)
})