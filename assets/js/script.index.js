console.log("Hello, World!");

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