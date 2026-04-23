// Generar número secreto
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

function comprobar() {
    let usuario = parseInt(document.getElementById("numeroUsuario").value);
    let res = document.getElementById("resultado");

    if (usuario < numeroSecreto) {
        res.innerHTML = "📉 Cantidad menor";
        res.style.color = "blue";
    }
    else if (usuario > numeroSecreto) {
        res.innerHTML = "📈 Cantidad mayor";
        res.style.color = "red";
    }
    else {
        res.innerHTML = "✅ ACERTASTE el número";
        res.style.color = "green";
    }
}

function reiniciar() {
    // Generar nuevo número
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
    // Borrar caja de texto y mensaje
    document.getElementById("numeroUsuario").value = "";
    document.getElementById("resultado").innerHTML = "";
}
