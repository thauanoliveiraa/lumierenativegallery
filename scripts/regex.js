/* REGEX TESTE 1 */



/* REGEX NOME */



/* REGEX EMAIL */




const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const botaoSubmit = document.getElementById('botaoSubmit');
const nomeErro = document.getElementById('nomeErro');
const emailErro = document.getElementById('emailErro');

// Adicione um ouvinte de evento para o campo de nome
inputNome.addEventListener('input', validarCampos);
inputEmail.addEventListener('input', validarCampos);

function validarNome() {
    const nome = inputNome.value.trim(); // Remove espaços em branco no início e no final
}

function validarCampos() {
    const nome = inputNome.value.trim(); // Remove espaços em branco no início e no final
    const email = inputEmail.value.trim(); // Remove espaços em branco no início e no final
    const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]*$/; // Expressão regular para aceitar letras, espaços, apóstrofos e hífens
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expressão regular para validar email

    const caracteresProibidosNome = "¨'1234567890-\\´\"!@#$%&()_+=/,.;?]}~^[{ª`¹²³⁴⁵⁶⁷⁸⁹⁰•√π÷×§∆£¢€¥^°={}\%©®™✓[]<>♪ΠΩμ¶↑↓←→′″≠∞≈‰℅№₱₹¢—–·±★†‡„“”«»‚‘’‹›¡¿‽";


    const caracteresProibidosEmail = "¨'-\\´\"#$%&()_+=/,;?]}~[{ª`¹²³⁴⁵⁶⁷⁸⁹⁰•√π÷×§∆£¢€¥^°={}\%©®™✓<>♪ΠΩμ¶↑↓←→′ ″≠∞≈‰℅№₱₹¢—–·±★†‡„“ ” « » ‚ ‘ ’ ‹ ›¡¿‽";

    // Verifique o comprimento do nome
    const nomeValido = nome.length >= 3 && nome.length <= 35;

    // Verifique se o nome contém caracteres proibidos
    const nomeSemCaracteresProibidos = !containsProhibitedCharacters(nome, caracteresProibidosNome);

    // Verifique se o email corresponde à expressão regular
    const emailValido = regexEmail.test(email);

    // Verifique se o email não contém caracteres proibidos
    const emailSemCaracteresProibidos = !containsProhibitedCharacters(email, caracteresProibidosEmail);

    spanValidacaoNome(nomeValido);

    function spanValidacaoNome(nomeValido) {
        if (!nomeValido) {
            nomeErro.textContent = 'O nome deve ter no mínimo 3 e no máximo 35 caracteres.';
        } else if (!nomeSemCaracteresProibidos) {
            nomeErro.textContent = 'Nome inválido';
        } else {
            nomeErro.textContent = '';
        }
    }

    spanValidacaoEmail(emailValido);

    function spanValidacaoEmail(emailValido) {
        if (!emailValido) {
            emailErro.textContent = 'Email inválido';
        } else if (!emailSemCaracteresProibidos) {
            emailErro.textContent = 'Email inválido';
        } else {
            emailErro.textContent = '';
        }
    }

    // Ative ou desative o botão de envio com base na validação dos campos
    if (nomeValido && nomeSemCaracteresProibidos && emailValido && emailSemCaracteresProibidos) {
        botaoSubmit.removeAttribute('disabled'); // Ative o botão de envio
    } else {
        botaoSubmit.setAttribute('disabled', 'true'); // Desative o botão de envio
    }
}


// Função para verificar se o texto contém caracteres proibidos
function containsProhibitedCharacters(texto, caracteresProibidos) {
    for (let i = 0; i < texto.length; i++) {
        if (caracteresProibidos.includes(texto[i])) {
            return true; // O texto contém um caractere proibido
        }
    }
    return false; // O texto não contém caracteres proibidos
}

inputNome.addEventListener('keypress', function (e) {
    const teclaPressionada = String.fromCharCode(e.keyCode);

    // Lista de caracteres proibidos
    const caracteresProibidosNome = "¨'1234567890-\\´\"!@#$%&()_+=/,.;?]}~^[{ª`¹²³⁴⁵⁶⁷⁸⁹⁰•√π÷×§∆£¢€¥^°={}\%©®™✓[]<>♪ΠΩμ¶↑↓←→′″≠∞≈‰℅№₱₹¢—–·±★†‡„“”«»‚‘’‹›¡¿‽";

    if (caracteresProibidosNome.includes(teclaPressionada)) {
        e.preventDefault(); // Impede a entrada do caractere proibido
    }
});


inputEmail.addEventListener('keypress', function (e) {
    const teclaPressionada = String.fromCharCode(e.keyCode);

    // Lista de caracteres proibidos
    const caracteresProibidosEmail = "¨'-\\´\"#$%&()_+=/,;?]}~[{ª`¹²³⁴⁵⁶⁷⁸⁹⁰•√π÷×§∆£¢€¥^°={}\%©®™✓<>♪ΠΩμ¶↑↓←→′ ″≠∞≈‰℅№₱₹¢—–·±★†‡„“ ” « » ‚ ‘ ’ ‹ ›¡¿‽!*:º¬§";

    if (caracteresProibidosEmail.includes(teclaPressionada)) {
        e.preventDefault(); // Impede a entrada do caractere proibido
    }
});