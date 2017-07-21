var btn = document.getElementById("buttonAdd");

// CRIAR ELEMENTOS NOVOS NA LISTA
function createNewElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var input = document.getElementById("input");
    var p = document.createElement("p");
    var t = document.createTextNode(inputValue);
    p.className = "textoItem";
    p.appendChild(t);
    li.appendChild(p);

    if (!inputValue) {
        alert("O campo precisa ser preenchido");
    } else if (input.value.length > 50) {
        alert("O numero máximo de caracteres é 50, voce digitou " + input.value.length + " caracteres.");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("input").value = "";



    // CRIANDO UM BOTÃO PARA FECHAR O ELEMENTO CRIADO

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    var close = document.getElementsByClassName("close");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    document.addEventListener('keyup', function(e) {
        for (i = 0; i < close.length; i++) {
            if (e.keyCode == 27) {
                close[i] = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
    });
}



btn.addEventListener("click", createNewElement);

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        createNewElement();
    }
});