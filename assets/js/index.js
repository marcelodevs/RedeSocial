function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minuts = date.getMinutes();

    var dataHour = document.querySelector('.data-hours');
    dataHour.innerText = minuts < 10 ? hour + ":0" + minuts : hour + ":" + minuts;
}

setInterval(updateClock, 500);

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

const texto = document.querySelector('.login h3');
typeWrite(texto);

document.querySelector('.regis').addEventListener("click", function () {
    var formLogin = document.querySelector('.form-login');
    var formRegis = document.querySelector(".form-regis");
    if (formLogin.style.display = 'flex')
    {
        formRegis.style.display = 'flex';
        formLogin.style.display = 'none';
    } else
    {
        ormRegis.style.display = 'none';
        formLogin.style.display = 'flex';
    }
});

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
