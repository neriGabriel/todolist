// CRIAR A LISTA

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("O campo precisa ser preenchido");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("input").value = "";
}

document.getElementById("buttonAdd").addEventListener("click", newElement);