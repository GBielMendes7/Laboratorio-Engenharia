var palavra = document.getElementById("verificar");
palavra.addEventListener("click", ePalindromo, false);

function conferir(array){
    let arrayt = "";
    for (let i = array.length - 1; i >= 0; i--) {
        arrayt += array[i];
    }
    return arrayt;
}

function ePalindromo(){
    let texto = document.getElementById("palavra").value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textoIn = conferir(textoSemEspaco);

    if (textoSemEspaco == textoIn)
        document.getElementById("resultado").innerHTML = texto +" é palíndromo"
    else
        document.getElementById("resultado").innerHTML = texto +" não é palíndromo"

}