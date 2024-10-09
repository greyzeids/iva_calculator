window.onload = inici;

function inici() {
    // Aquí se escriben todos los eventos y aquellas acciones que queremos que se ejecuten al inicio de cargar la página
    let input = document.getElementById("quantitat");
    let button = document.getElementById("calcular");
    let caixa1 = document.getElementById("caixa1");
    let caixa2 = document.getElementById("caixa2");
    let caixa3 = document.getElementById("caixa3");

    let sumaTotal = 0;

    input.focus();

    button.addEventListener("click", calcularIVA);
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            calcularIVA();
        }
    });

    caixa2.addEventListener("click", reiniciar);

    function calcularIVA() {
        let quantitat = parseFloat(input.value) || 1;
        let iva = parseFloat((quantitat * 0.21).toFixed(2));
        let total = parseFloat((quantitat + iva).toFixed(2));

        caixa1.innerText = `L'IVA de ${quantitat}€ és ${iva}€`;

        caixa2.innerHTML += `${quantitat}€ + ${iva}€ = ${total}€<br>`;

        sumaTotal += total;
        caixa3.innerText = `${sumaTotal}€`;

        input.value = "";
        input.focus();
    }

    function reiniciar() {
        caixa1.innerText = "";
        caixa2.innerHTML = "";
        caixa3.innerText = "";
        sumaTotal = 0;

        input.value = "";
        input.focus();
    }
}
