function verificaInput(){
    let tutor = document.getElementById("input-tutor").value;
    let nome = document.getElementById("input-nome").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let nascimento = document.getElementById("input-nascimento").value;

    if (tutor == "" || nome == "" || especie == "" || foto == "" || nascimento == "") {
        console.log("Os dados estao vazios");
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

function mensagem(mensagem, tipo) {
    let mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    let tela = `
    <p class='${tipo}'>${mensagem}</p>
    `

    mensagemDiv.innerHTML += tela;

    setTimeout (function() {
        mensagemDiv.innerHTML = "";
    }, 4000);
}

class pet{
    constructor(tutor, nome, especie, foto, nascimento){
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.nascimento = nascimento;
    }
}

function cadastrarPet(){
    let tutor = document.getElementById("input-tutor").value;
    let nome = document.getElementById("input-nome").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let nascimento = document.getElementById("input-nascimento").value;

    const pet = new Pet(tutor, nome, especie, foto, nascimento);
    console.log(pet);

    bibliotecaPets.add(pet);

    renderizarConteudo();
}

class ListaPet {
    constructor(){
        this.ListaPetsArray = [];
    }
}

add(parametro) {
    if (verificaInput()){
     Msg("Preencha todos os campos", "erro");
    } else {
        this.ListaPetsArray.push(parametro);
        limparInput();
        Msg("Cadastro feito com sucesso!", "sucesso");
    }
}