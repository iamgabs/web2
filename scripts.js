var palavra = "teste";

function renderizarCampos() {
    var div = document.getElementById("letras"); //div que conterá os campos
    var contagem = palavra.split("").length;
    
    for (let i = 0; i < contagem; i++) {
        div.innerHTML += `<input id="q${ i + 1 }" type="text" readonly maxlength="1"/>`;
    }
}

renderizarCampos();

function verificarLetra(letra) {
    var letras = palavra.split("");
    var posicoes = [];

    //Verificação das posições em que a letra aparece na palavra
    for (let i = 0; i < letras.length; i++) {
        if(letras[i] == letra)
            posicoes.push(i);
    }

    // 
    if(posicoes.length == 0) {
        //Lógica para inserir as partes do boneco
    } else {
        var contagem = palavra.split("").length;

        for (let i = 0; i < contagem; i++) {
            var elemento = document.getElementById(`q${i+1}`);
            elemento.textContent = letra;
            
        }

        //Lógica para achar o input na posição correta
    }
}