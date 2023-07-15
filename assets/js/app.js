function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minuts = date.getMinutes();

    var dataHour = document.querySelector('.data-hours');
    dataHour.innerText = minuts < 10 ? hour + ":0" + minuts : hour + ":" + minuts;
}

setInterval(updateClock, 500);

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

function openApp(element) {
    var overlay = document.querySelector('.overlay');
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';

    setTimeout(function () {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        element.classList.remove('active');
        location.href = element.classList.contains('yt') ? '../app/youtube/home.html' : '../app/insta/home.html';
    }, 1000); // Tempo em milissegundos para a tela branca (1000ms = 1s)
}

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
