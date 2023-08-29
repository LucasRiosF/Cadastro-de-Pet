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

function mensagens(mensagem, tipo) {
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

class Pet{
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

    add(parametro) {
        if (verificaInput()){
         mensagens("Preencha todos os campos", "erro");
        } else {
            this.ListaPetsArray.push(parametro);
            limparInput();
            mensagens("Cadastro feito com sucesso!", "sucesso");
        }
    }
}


const bibliotecaPets = new ListaPet();

function limparInput() {
    document.getElementById("input-tutor").value = "";
    document.getElementById("input-nome").value = "";
    document.getElementById("input-especie").value = "";
    document.getElementById("input-foto").value = "";
    document.getElementById("input-nascimento").value = "";

}

function renderizarConteudo() {
    const listaHtml = document.getElementById("container-lista");
    listaHtml.innerHTML = '';

    let array = bibliotecaPets.ListaPetsArray;

    array.forEach(pet => {
        const petDiv = `
        <div class='jogoDetalhe'>
                <p>Tutor: ${pet.tutor}<p>
                <p>Nome: R$${pet.nome}</p>
                <p>Espécie: ${pet.especie}</p>
                <p>Foto: ${pet.foto}</p>
                <img src="${pet.foto}" alt="${pet.tutor}">
            </div>
       `;

       listaHtml.innerHTML += petDiv;
    })
}