/* header scripts */
window.addEventListener("load", function() {
  const apresentation_typing_effect_text = document.querySelector('.apresentation-typing-effect-text');
  
  apresentation_typing_effect_text.style.opacity = 1; // Definimos a opacidade para 1 para fazer o fade-in
});


window.addEventListener("load", function() {
  const apresentation_typing_effect_text = document.querySelector('.apresentation-typing-effect');
  
  apresentation_typing_effect_text.style.opacity = 1; // Definimos a opacidade para 1 para fazer o fade-in
});






/* main scripts */


/* footer scripts */

const galleryItem = document.getElementsByClassName("gallery-item");

const lightBoxContainer = document.createElement("div");

const lightBoxContent = document.createElement("div");

const lightBoxImg = document.createElement("img");

const lightBoxPrev = document.createElement("div");

const lightBoxNext = document.createElement("div");




lightBoxContainer.classList.add("lightbox");

lightBoxContent.classList.add("lightbox-content");

lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");

lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");




lightBoxContainer.appendChild(lightBoxContent);

lightBoxContent.appendChild(lightBoxImg);

lightBoxContent.appendChild(lightBoxPrev);

lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox(index += n);
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);


/*
function verificarConexao() {
    if (navigator.onLine) {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Conexão não detectada em, liga a net e clica no Ok");
        location.reload();
    }
}

window.onload = function() {
    verificarConexao();
};

window.onload = function() {
    setTimeout(verificarConexao, 3000); //Ajustado para 4000ms
};      */


const horaAtual = new Date().getHours();
let mensagem;

if (horaAtual >= 4 && horaAtual < 12) {
  mensagem = "Olá, bom dia!";
} else if (horaAtual >= 12 && horaAtual < 18) {
  mensagem = "Olá, boa tarde!";
} else {
  mensagem = "Olá, boa noite!";
}

const mensagemSaudacao = document.getElementById("mensagemSaudacao");
mensagemSaudacao.textContent = mensagem;










const textElement = document.getElementById('mensagemSaudacao');

const textToType = ""; // Substitua pelo seu próprio texto
textElement.textContent = mensagem; // Limpa o conteúdo do elemento

const divTeste = document.getElementById('apresentation-mensage');

let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    textElement.textContent += textToType.charAt(charIndex);
    charIndex++;

    // Ajuste a largura da borda direita de acordo com o comprimento do texto digitado
    const textWidth = textElement.offsetWidth;
    divTeste.style.width = `${textWidth}px`;

    setTimeout(typeText, 100); // Ajuste o tempo entre cada caractere
  }
}

// Inicia o efeito de digitação após o carregamento da página
window.addEventListener('load', () => {
  setTimeout(typeText, 1000); // Adia o início do efeito por 1 segundo (opcional)
});

window.addEventListener("load", function() {
  const apresentation_typing_effect_text = document.querySelector('.apresentation-typing-effect-text');
  
  apresentation_typing_effect_text.style.opacity = 1; // Definimos a opacidade para 1 para fazer o fade-in
});













document.addEventListener("DOMContentLoaded", function () {
  const isAutoRedirect = window.performance.getEntriesByType("navigation")[0].type === "navigate" && window.location.hash === "#news";

  if (isAutoRedirect) {
    document.getElementById("popup-container").style.display = "flex";

    document.getElementById("close-popup").addEventListener("click", function () {
      document.getElementById("popup-container").style.display = "none";
    });
  }
});




