botaoTema = document.querySelector("#botaoTema");
corpo = document.body;


botaoTema.addEventListener("click", () => {
    
    const estaNoModoEscuro = corpo.classList.toggle("dark-mode");
    
    if(estaNoModoEscuro){
        botaoTema.textContent = "Modo Claro";
    }else{
        botaoTema.textContent = "Modo Escuro";
    }
}
);




