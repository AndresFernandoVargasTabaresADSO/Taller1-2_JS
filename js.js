addEventListener("DOMContentLoaded",()=>{
    console.log(`8. Escribir un programa que evalúe la siguiente expresión:
    (a+7*c)/(b+2-a)+2*b`)

    let numa= Number(prompt(`Escribe el valor de a: `))
    let numb= Number(prompt(`Escribe el valor de b: `))
    let numc= Number(prompt(`Escribe el valor de c: `))

    let solcuion= (numa + 7* numc)/(numb + 2 - numa)+ 2*numb

    console.log(`Resultado: ${solcuion}`)
})