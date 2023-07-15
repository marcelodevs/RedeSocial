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

// ABRIR CHAT

document.querySelector(".row-1 span").addEventListener("click", () => {
    var chat = document.querySelector(".chat");
    var insta = document.querySelector("header");
    var main = document.querySelector("main");
    if (chat.style.display == 'block')
    {
        chat.style.display = 'none';
        insta.style.display = 'block';
        main.style.display = 'block';
    }
    else
    {
        chat.style.display = 'block';
        insta.style.display = 'none';
        main.style.display = 'none';
    }
});

// RECARREGAR PÁGINA

document.querySelector(".casa").addEventListener("click", function () {
    location.reload();
});

// BOTÃO VOLTAR

document.querySelector(".home").addEventListener("click", () => {
    location.href = "../app.html";
});

// INTERAÇÕES

function handleLikeClick(element) {
    if (element.src.endsWith("heart.png"))
    {
        element.src = "../../icon/heart-red.png";
        element.classList.add("clicked");
    } else
    {
        element.src = "../../icon/heart.png";
        element.classList.remove("clicked");
    }
}

// MOSTRAR STORYS

document.addEventListener("DOMContentLoaded", function () {
    var profileImages = document.querySelectorAll('.storys .img-app');
    var overlay = document.querySelector('.story-amply');
    var overlayImage = document.querySelector('.story-amply-img');

    profileImages.forEach(function (profileImage) {
        profileImage.addEventListener('click', function () {
            overlayImage.src = this.src;
            overlay.style.display = 'flex';
            document.body.classList.add('story-active');
            overlay.classList.add('show');
        });
    });

    overlay.addEventListener('click', function () {
        this.style.display = 'none';
        document.body.classList.remove('story-active');
        overlay.classList.remove('show');
    });
});
