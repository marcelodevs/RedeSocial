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
    Swal.fire({
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

document.querySelectorAll('.img-publi').forEach(imgPubli => {
    imgPubli.addEventListener('dblclick', () => {
        var likeElement = imgPubli.closest('.publi').querySelector('.like');
        handleLikeClick(likeElement);
    });
});

const publi = document.querySelector('.publi');
const comment = document.querySelector('.comments')
document.querySelector('.comment-btn').addEventListener('click', () => {
    publi.style.display = 'none';
    insta.style.display = 'none';
    comment.style.display = 'block';
});

// ABRIR CHAT

var insta = document.querySelector(".container");
var chat = document.querySelector(".chat");
document.querySelector(".row-1 span").addEventListener("click", () => {
    if (chat.style.display == 'flex')
    {
        chat.style.display = 'none';
        insta.style.display = 'block';
    }
    else
    {
        chat.style.display = 'flex';
        insta.style.display = 'none';
    }
});

// FECHAR CHAT

document.querySelector('.infor-user-back img').addEventListener('click', () => {
    var main = document.querySelector("main");
    if (chat.style.display == 'flex')
    {
        chat.style.display = 'none';
        insta.style.display = 'block';
        main.style.display = 'block';
    }
    else
    {
        chat.style.display = 'flex';
        insta.style.display = 'none';
        main.style.display = 'none';
    }
});

// ENTRAR NA CONVERSA

var infrChat = document.querySelectorAll('.infor-chat');
var message = document.querySelector('.chat-show');
infrChat.forEach(infor => {
    infor.addEventListener('click', function () {
        chat.style.display = 'none';
        message.style.display = 'block';
    });
});

document.querySelector('.head-chat img').addEventListener('click', () => {
    if (message.style.display == 'block')
    {
        chat.style.display = 'flex';
        message.style.display = 'none';
    }
    else
    {
        chat.style.display = 'none';
        message.style.display = 'block';
    }
});

// CONVERSAR

function getComment() {
    $.ajax({
        url: 'https://localhost/dashboard/RedeSocial/assets/php/crud-chat/select.php',
        method: 'get',
        dataType: 'json',
    }).done(function (result) {
        console.log(result);

        for (var i = 0; i < result.length; i++)
        {
            $('.msg').prepend('<div class="msg-you">' + result[i].msg + '</div>');
        }
    });
}

getComment();

function getUserInfo() {
    return $.ajax({
        url: 'https://localhost/dashboard/RedeSocial/assets/php/crud-chat/get_user_info.php',
        method: 'post',
        dataType: 'json',
    });
}

window.addEventListener('keypress', (e) => {
    if (e.key == "Enter")
    {
        e.preventDefault();

        var _msg = $('.message').val();

        // Obter as informações do usuário logado
        getUserInfo().done(function (userInfo) {
            var user_id = userInfo.id; // Supondo que o ID do usuário seja retornado pelo servidor
            var user_name = userInfo.name; // Supondo que o nome do usuário seja retornado pelo servidor

            $.ajax({
                url: 'https://localhost/dashboard/RedeSocial/assets/php/crud-chat/insert.php',
                method: 'post',
                data: {
                    message: _msg,
                    user_id: user_id,
                    user_name: user_name,
                },
                dataType: 'json',
            }).done(function (result) {
                console.log(result);
                getComment();
            });
        });
    }
});

const hiddenInput = document.getElementById('hiddenInput');
document.querySelector('.file').addEventListener('click', () => {

    hiddenInput.type = hiddenInput.type == 'hidden' ? 'file' : 'hidden';

    hiddenInput.click();
});

hiddenInput.type = 'hidden';

document.querySelector('.trailing-icon img').addEventListener('click', () => {
    Swal.fire({
        title: 'Áudio Error',
        text: 'Essa função não está disponível no momento, por favor, aguarde a próxima versão...',
        width: 600,
        padding: '3em',
        color: '#fff',
        background: 'rgb(0,0,123)',
        backdrop: 'rgba(0,0,0,0.4)'
    });
});

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
