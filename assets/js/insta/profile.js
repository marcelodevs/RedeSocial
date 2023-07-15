// HORAS

function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minuts = date.getMinutes();

    var dataHour = document.querySelector('.data-hours');
    dataHour.innerText = minuts < 10 ? hour + ":0" + minuts : hour + ":" + minuts;
}

setInterval(updateClock, 500);

// FECHAR JANELA

document.querySelector(".off").addEventListener("click", function () {
    swal({
        title: "Fechar celular",
        text: "Tem certeza que deseja fechar o celular?",
        icon: "warning",
        buttons: ["Cancelar", "Sim"],
    }).then(function (confirm) {
        if (confirm)
        {
            window.location.href = "about:blank";
        }
    });
});

// BOTÃO VOLTAR

document.querySelector(".home").addEventListener("click", () => {
    location.href = "../app.html";
});
