let pPonde = 0

//Toma los datos ingresados, crea lista y calcula prom
function tuPromedio(){
    let notasIngresadas = [];
    let valor1 = document.getElementById("valor1").value
        notasIngresadas.push(valor1)
    let valor2 = document.getElementById("valor2").value
        notasIngresadas.push(valor2)
    let valor3 = document.getElementById("valor3").value
        notasIngresadas.push(valor3)
    let valor4 = document.getElementById("valor4").value
        notasIngresadas.push(valor4)

        promPonderado(notasIngresadas)
    
   let final = document.getElementById("final")
       final.innerHTML = `<h3>PROMEDIO</h3><p>${pPonde}</p>`;
}

//GENERALIZACIÓN DEL PROMEDIO 
function promPonderado(listaNotas){
    //Variable donde voy a determinar por cuánto ponderar cada elemento diferente al primero.
    let m = 0.5/((listaNotas.length) - 1);
    let sumaNotas = 0

    for (const nota of listaNotas){
        sumaNotas += parseFloat(nota);
    }    

    pPonde = 0.5*parseFloat(listaNotas[0])+ m*(sumaNotas - listaNotas[0]);
    console.log("Tu promedio es: ", pPonde)
}

