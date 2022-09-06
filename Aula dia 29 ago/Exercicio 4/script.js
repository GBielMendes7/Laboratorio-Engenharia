let lista = [];
    let botao = document.getElementById('Botao');

    botao.addEventListener('click', function(e){
        e.preventDefault();
        lista.push(document.getElementById('palavra').value);
        lista.sort();
        listar();
    });

    function listar(){
        for(i=0;i<lista.length;i++){
            let l = document.createElement("li");
            let t = document.createTextNode(lista[i]);
            l.appendChild(t);
            document.getElementById('Lista').appendChild(l);
        }
    }