let botao = document.getElementById("teste");

document.getElementById("teste").addEventListener("click", function(){
    carro.marca = document.getElementById("campoMarca").value;
    carro.modelo = document.getElementById("campoModelo").value;
    carro.ano = document.getElementById("campoAno").value;
    carro.cor = document.getElementById("campoCor").value;
    carro.km = document.getElementById("campoKm").value;
    carro.valor = document.getElementById("campoValor").value;

})
    
let carro = {
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
    km: "",
    valor: "",
    acelerar(){
		console.log('Acelerando...');
	},
	frear(){
		console.log('Freando');
	},
};
