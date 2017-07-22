// CRIANDO A FUNCÃO QUE ADICIONA UM ITEM NOVO





var btn = document.getElementById("buttonAdd")

function addNewElement() {

    // CRIANDO A FUNCAO QUE VAI ADICIONAR O ELEMENTO
    var ul = document.getElementById("lista");
    var li = document.createElement("li");
    li.className = "element";
    var input = document.getElementById("input");
    var inputValue = input.value;
    var p = document.createElement("p");
    var text = document.createTextNode(inputValue);
    p.appendChild(text);
    p.className = "textoItem";
    li.appendChild(p);

    if (!inputValue) {
        alert("Você precisa preecher o campo");
    } else {
        ul.appendChild(li);
    }
    input.value = "";

    // CRIANDO A FUNCAO QUE VAI ADICIONAR O BOTÃO DENTRO DO ELEMENTO
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    var close = document.getElementsByClassName("close");
    li.appendChild(span);
    span.appendChild(txt);
    span.className = ("close");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
};



// CRIAR ELEMENTO QUANDO APERTAR O ENTER
btn.addEventListener("click", addNewElement);
document.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        addNewElement();
    }
});

// APAGAR ELEMENTO QUANDO APERTAR O ESC
btn.addEventListener("click", addNewElement);
document.addEventListener("keyup", function(e) {
    var ul = document.getElementsByClassName("lista");
    var li = document.getElementsByClassName("element");
    for (i = 0; i < ul.length; i++) {
        if (e.keyCode == 27) {
            console.log(ul[i].lastChild);
            ul[i].lastChild.style.display = "none";
        }
    }
});
















































// var btn = document.getElementById("buttonAdd");

// // CRIAR ELEMENTOS NOVOS NA LISTA
// function createNewElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("input").value;
//     var input = document.getElementById("input");
//     var p = document.createElement("p");
//     var t = document.createTextNode(inputValue);
//     p.className = "textoItem";
//     p.appendChild(t);
//     li.appendChild(p);


//     if (!inputValue) {
//         alert("O campo precisa ser preenchido");
//     } else if (input.value.length > 50) {
//         alert("O numero máximo de caracteres é 50, voce digitou " + input.value.length + " caracteres.");
//     } else {
//         lista.appendChild(li);
//     }
//     document.getElementById("input").value = "";




//     // CRIANDO UM BOTÃO PARA FECHAR O ELEMENTO CRIADO

//     var span = document.createElement("span");
//     var txt = document.createTextNode("\u00D7");
//     var close = document.getElementsByClassName("close");

//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }



// btn.addEventListener("click", createNewElement);

// document.addEventListener('keyup', function(e) {
//     if (e.keyCode == 13) {
//         createNewElement();
//     }
// });