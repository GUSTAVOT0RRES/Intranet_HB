const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.getElementsByClassName('close')[0];

// Exibe o popup ao clicar no botão de login
loginBtn.onclick = function () {
    loginPopup.style.display = 'flex'; // Altera para 'flex' para centralizar o conteúdo
}

// Fecha o popup ao clicar no botão de fechar
closeBtn.onclick = function () {
    loginPopup.style.display = 'none';
}

// Fecha o popup ao clicar fora do conteúdo do popup
window.onclick = function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
}
// Seletores
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

// Função para exibir a mensagem
forgotPasswordLink.onclick = function (event) {
    event.preventDefault(); // Previne comportamento padrão do link
    alert('Contate o time de TI para recuperar a sua senha!');
};
