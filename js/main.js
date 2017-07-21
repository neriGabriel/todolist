// CRIAR A LISTA
function addTodoListEvent() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var lista = document.getElementById("lista");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (!inputValue) {
        alert("O campo precisa ser preenchido");
    } else {
        lista.appendChild(li);
    }
    document.getElementById("input").value = "";


    // CLicar no X para fechar o item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
};

document.getElementById("buttonAdd").addEventListener("click", addTodoListEvent);