addEventListener("DOMContentLoaded",()=>{
    console.log(`10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 + 
    b * x + c, siendo X un valor constante.`)

    let numa= Number(prompt(`Escribe el valor de a: `))
    let numb= Number(prompt(`Escribe el valor de b: `))
    let numc = Number(prompt(`Escribe el valor de c: `))
    let numx = Number(prompt(`Escribe el valor de X siendo un valor constante: `))

    let solucion= (numa * Math.pow(numx,2)+ numb * numx + numc)

    console.log(`La raiz es: ${solucion}`)
})