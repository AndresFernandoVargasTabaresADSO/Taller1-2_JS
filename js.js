addEventListener("DOMContentLoaded",()=>{
    console.log(`18. Calcular el sueldo de un empleado dados como datos de entrada: el nombre, hrs. De trabajo y el pago
    en hora. Pagohora=15300`)

    let nombre= String(prompt(`Ingresa tu nombre: `))
    let horasTrabajo= Number(prompt(`Ingrese las horas de trabajo: `))

    let pagoHora= 15300

    let solucion= (horasTrabajo*pagoHora)

    console.log(`Buenos dias Sr. ${nombre} trabajaste ${horasTrabajo} horas, tu total del pago es: ${solucion}`)
})