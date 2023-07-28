function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minuts = date.getMinutes();

    var dataHour = document.querySelector('.data-hours');
    dataHour.innerText = minuts < 10 ? hour + ":0" + minuts : hour + ":" + minuts;
}

setInterval(updateClock, 500);

// MENU DE SAIR/VOLTAR

var menuItem = document.querySelector(".menu-bar");
document.querySelector(".home").addEventListener("click", () => {
    if (menuItem.style.display === 'flex')
    {
        menuItem.style.display = 'none';
    } else
    {
        menuItem.style.display = 'flex';
    }
});

// MOSTRAR SENHA

var senha = $('#senha');
var olho = $("#olho");

olho.mousedown(function () {
    senha.attr("type", "text");
});

olho.mouseup(function () {
    senha.attr("type", "password");
});
// para evitar o problema de arrastar a imagem e a senha continuar exposta
$("#olho").mouseout(function () {
    $("#senha").attr("type", "password");
});

// CADASTRO DE MÚLTIPLAS ETAPAS

document.querySelector("strong").addEventListener('click', function () {
    let formLogin = document.querySelector('.login-form');
    let formCadas = document.querySelector('.cadas-form');

    formLogin.style.display = 'none';
    formCadas.style.display = 'flex';

    const sections = formCadas.querySelectorAll("section");
    const prevBtns = formCadas.querySelectorAll(".prev-btn");
    const nextBtns = formCadas.querySelectorAll(".next-btn");
    const finishBtn = formCadas.querySelector(".finish-btn");
    const usernameSpan = formCadas.querySelector(".nameuser");

    let currentStep = 0;

    nextBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            sections[currentStep].classList.remove("active");
            currentStep = index + 1;
            sections[currentStep].classList.add("active");

            if (currentStep === sections[2])
            {
                usernameSpan.textContent = formCadas.querySelector("input[type='text']").value;
            }
        });
    });

    prevBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            sections[currentStep].classList.remove("active");
            currentStep = index;
            sections[currentStep].classList.add("active");
        });
    });

    finishBtn.addEventListener("click", () => {
        location.href = 'assets/app/app.html';
    });

});

// DESABILITAR O USO DO SHIFT

function preventShift(event) {
    // Impede a digitação de letras maiúsculas
    event.target.value = event.target.value.toLowerCase();

    // Impede o uso da tecla "Shift"
    if (event.shiftKey)
    {
        event.preventDefault();
        return false;
    }
}

// VERIFICA SE O NOME DO USUÁRIO JÁ EXISTE

$('.next-btn').on('click', function (e) {
    e.preventDefault();

    var nameUser = $('#username');

    $.ajax({
        url: 'https://localhost/dashboard/RedeSocial/assets/php/crud-user/select.php',
        method: 'get',
        data: {
            name: nameUser
        },
        dataType: 'json'
    }).done(function (result) {
        for (let i = 0; i < result.length; i++)
        {
            if (result[i].name == nameUser) nameUser.style.border = '1px solid red';
        }
    });
});
