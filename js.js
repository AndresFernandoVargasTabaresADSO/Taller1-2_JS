addEventListener("DOMContentLoaded",()=>{
    console.log(`19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    puntos.`)

    let nota1= Number(prompt(`Ingresa tu nota del examen #1`))
    let nota2= Number(prompt(`Ingresa tu nota del examen #2`))
    let nota3= Number(prompt(`Ingresa tu nota del examen #3`))
    let nota4= Number(prompt(`Ingresa tu nota del examen #4`))

    let promedio=(nota1 + nota2 +nota3 + nota4)/4

    console.log(`Tu nota final es: ${promedio}`)
    
    if(promedio>=3.0){
        console.log(`Aprobaste`)
    }
    else{
        console.log(`Reprobaste!`)
    }
})