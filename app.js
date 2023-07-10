alert("Simulador de Cuotas.")

function calcularCuotas(monto, cuotas) {
    let montoCuota = monto / cuotas;
    return montoCuota;
}
    let finalizado = false;
    while (!finalizado) {

    let monto = parseFloat(prompt("Ingrese el monto a solicitar:"));
    console.log("Monto ingresado:", monto);
    alert("Monto ingresado: " + monto);

    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    console.log("Cantidad de cuotas ingresada:", cuotas);
    alert("Cantidad de cuotas ingresada: " + cuotas);

    if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
        let mensajeError = "Por favor, ingrese un monto y una cantidad de cuotas válidos.";
        console.log("Error:", mensajeError);
        alert("Error: " + mensajeError);
    
    } else {

        let montoCuota = calcularCuotas(monto, cuotas);
        console.log("Monto de cada cuota:", montoCuota.toFixed(2));
        alert("Monto de cada cuota: $" + montoCuota.toFixed(2));

        let mensaje = "Detalle de Pagos:\n\n";
        mensaje += "Monto Total: $" + monto.toFixed(2) + "\n";
        mensaje += "Cantidad de Cuotas: " + cuotas + "\n";
        mensaje += "Monto por Cuota: $" + montoCuota.toFixed(2) + "\n";
        console.log("Resultado:\n", mensaje);
        alert(mensaje);

        let opcion = prompt("¿Desea realizar otra operación? (Sí/No)").toLowerCase();
        if (opcion === "no" || opcion === "n") {
        finalizado = true;
        }
    }
}

console.log("Gracias por su consulta.");
alert("Gracias por su consulta.");



