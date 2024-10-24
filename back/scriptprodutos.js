let arr = []

let button = document.querySelector("#quantidade")

let button2 = document.querySelector("#quantidade2")

let button3 = document.querySelector("#quantidade3")

let button4 = document.querySelector("#quantidade4")

let button5 = document.querySelector("#quantidade5")

let button6 = document.querySelector("#quantidade6")

let button7 = document.querySelector("#quantidade7")

let button8 = document.querySelector("#quantidade8")

let button9 = document.querySelector("#quantidade9")

let button10 = document.querySelector("#quantidade10")

let button11 = document.querySelector("#quantidade11")

 function adicionar() {
    let novoArray = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem = document.getElementById("nomeProduto").innerHTML;
    novoArray.push(novoItem)
    let novoPreco = Number(document.getElementById("valor").innerHTML.slice(7));
    novoArray.push(novoPreco)
    let novaQuantidade = Number(document.querySelector("#quantidade").value)
    novoArray.push(novaQuantidade)

    arr.push(novoArray);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}

function adicionar2() {
    let novoArray2 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem2 = document.getElementById("nomeProduto2").innerHTML;
    novoArray2.push(novoItem2)
    let novoPreco2 = Number(document.getElementById("valor2").innerHTML.slice(7));
    novoArray2.push(novoPreco2)
    let novaQuantidade2 = Number(document.querySelector("#quantidade2").value)
    novoArray2.push(novaQuantidade2)
    arr.push(novoArray2);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}

function adicionar3() {
    let novoArray3 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem3 = document.getElementById("nomeProduto3").innerHTML;
    novoArray3.push(novoItem3)
    let novoPreco3 = Number(document.getElementById("valor3").innerHTML.slice(7));
    novoArray3.push(novoPreco3)
    let novaQuantidade3 = Number(document.querySelector("#quantidade3").value)
    novoArray3.push(novaQuantidade3)
    arr.push(novoArray3);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}

function adicionar4() {
    let novoArray4 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem4 = document.getElementById("nomeProduto4").innerHTML;
    novoArray4.push(novoItem4)
    let novoPreco4 = Number(document.getElementById("valor4").innerHTML.slice(7));
    novoArray4.push(novoPreco4)
    let novaQuantidade4 = Number(document.querySelector("#quantidade4").value)
    novoArray4.push(novaQuantidade4)
    arr.push(novoArray4);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}


function adicionar5() {
    let novoArray5 = [];
    if (localStorage.arr){
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem5 = document.getElementById("novoProduto5").innerHTML
    novoArray5.push(novoItem5);
    let novoPreco5 = Number (document.getElementById("valor5").innerHTML.slice(7));
    novoArray5.push(novoPreco5);
    let novaQuantidade5 = Number (document.getElementById("quantidade5").value);
    novoArray5.push(novaQuantidade5);
    arr.push(novoArray5);
    localStorage.arr = JSON.stringify(arr);
    console.log(localStorage.arr)
    alert("Produto adicionado")

}

function adicionar6() {
    let novoArray6 = [];
    if (localStorage.arr){
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem6 = document.getElementById("novoProduto6").innerHTML
    novoArray6.push(novoItem6);
    let novoPreco6 = Number (document.getElementById("valor6").innerHTML.slice(7));
    novoArray6.push(novoPreco6);
    let novaQuantidade6 = Number (document.getElementById("quantidade6").value);
    novoArray6.push(novaQuantidade6);
    arr.push(novoArray6);
    localStorage.arr = JSON.stringify(arr);
    console.log(localStorage.arr)
    alert("Produto adicionado")

}



function adicionar7() {
    let novoArray7 = [];
    if (localStorage.arr){
        arr = JSON.parse(localStorage.getItem("arr"))
    }
  

    let novoItem7 = document.getElementById("nomeProduto7").innerHTML;
    novoArray7.push(novoItem7);
    let novoPreco7 = Number (document.querySelector("#valor7").innerHTML.slice(7));
    novoArray7.push(novoPreco7);
    let novaQuantidade7 = Number (document.querySelector("#quantidade7").value);
    novoArray7.push(novaQuantidade7);
    arr.push(novoArray7);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr)
    alert("Produto adicionado")

}

function adicionar8() {
    let novoArray8 = [];
    if (localStorage.arr){
        arr = JSON.parse(localStorage.getItem("arr"))
    }
  

    let novoItem8 = document.getElementById("nomeProduto8").innerHTML;
    novoArray8.push(novoItem8);
    let novoPreco8 = Number (document.querySelector("#valor8").innerHTML.slice(7));
    novoArray8.push(novoPreco8);
    let novaQuantidade8 = Number (document.querySelector("#quantidade8").value);
    novoArray8.push(novaQuantidade8);
    arr.push(novoArray8);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr)
    alert("Produto adicionado")

}



function adicionar9() {
    let novoArray9 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem9 = document.getElementById("nomeProduto9").innerHTML;
    novoArray9.push(novoItem9)
    let novoPreco9 = Number(document.getElementById("valor9").innerHTML.slice(7));
    novoArray9.push(novoPreco9)
    let novaQuantidade9 = Number(document.querySelector("#quantidade9").value)
    novoArray9.push(novaQuantidade9)

    arr.push(novoArray9);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")

}

function adicionar10() {
    let novoArray10 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem10 = document.getElementById("nomeProduto10").innerHTML;
    novoArray10.push(novoItem10)
    let novoPreco10 = Number(document.getElementById("valor10").innerHTML.slice(7));
    novoArray10.push(novoPreco10)
    let novaQuantidade10 = Number(document.querySelector("#quantidade10").value)
    novoArray10.push(novaQuantidade10)

    arr.push(novoArray10);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}


function adicionar11() {
    let novoArray11 = [];
    if (localStorage.arr) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }

    let novoItem11 = document.getElementById("nomeProduto11").innerHTML;
    novoArray11.push(novoItem11)
    let novoPreco11 = Number(document.getElementById("valor11").innerHTML.slice(7));
    novoArray11.push(novoPreco11)
    let novaQuantidade11 = Number(document.querySelector("#quantidade11").value)
    novoArray11.push(novaQuantidade11)

    arr.push(novoArray11);
    localStorage.arr = JSON.stringify(arr)
    console.log(localStorage.arr);
    alert("Produto adicionado")
}








