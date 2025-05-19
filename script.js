function Mensagem(){
    const mensagemDiv = document.getElementById("mensagem");

    if (mensagemDiv.style.display === "block") {
        mensagemDiv.style.display = "none";
    } else {
        mensagemDiv.textContent = "Bem-vindo! Continue explorando o meu mundo!";
        mensagemDiv.style.display = "block";
    }
}