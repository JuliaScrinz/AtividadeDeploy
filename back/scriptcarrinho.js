// tornar eles visiveis

let arr = localStorage.getItem("arr")

let produto1 = document.querySelector("#produto1")

let produto2 = document.querySelector("#produto2")

let produto3 = document.querySelector("#produto3")

let produto4 = document.querySelector("#produto4")

let produto5 = document.querySelector("#produto5")

let produto6 = document.querySelector("#produto6")

let produto7 = document.querySelector("#produto7")

let produto8 = document.querySelector("#produto8")

let produto9 = document.querySelector("#produto9")

let produto10 = document.querySelector("#produto10")

let produto11 = document.querySelector("#produto11")


console.log(localStorage)

arr = JSON.parse(localStorage.getItem("arr"))

for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i][0]) {
        case "Concha da Ariel":
            produto1.style.visibility = "visible"
            produto1.style.position = "relative"
            break

        case "Dente do Monstro":
            produto2.style.visibility = "visible"
            produto2.style.position = "relative"
            break

        case "Fertilizante":
            produto3.style.visibility = "visible"
            produto3.style.position = "relative"
            break

        case "Lucca":
            produto4.style.visibility = "visible"
            produto4.style.position = "relative"
            break

        case "dinoovo":
            produto5.style.visibility = "visible"
            produto5.style.position = "relative"
            break

        case "Peixe Abajuor":
            produto6.style.visibility = "visible"
            produto6.style.position = "relative"
            break

        case "Raspadinha do Titanic":
            produto7.style.visibility = "visible"
            produto7.style.position = "relative"
            break

        case "Cetro Narval":
            produto8.style.visibility = "visible"
            produto8.style.position = "relative"
            break

        case "Salgasoxo":
            produto9.style.visibility = "visible"
            produto9.style.position = "relative"
            break

        case "Sushi Kraken":
            produto10.style.visibility = "visible"
            produto10.style.position = "relative"
            break

        case "Bobolha":
            produto11.style.visibility = "visible"
            produto11.style.position = "relative"
            break

    }

}



// total do preço

let total = 0

let soma = JSON.parse(localStorage.getItem("arr"))

let totalCompra = Number(document.querySelector("#totalCompra"))

soma.forEach(produto => {
    total += produto[1] * produto[2]
    document.querySelector("#totalCompra").innerHTML = total;
});






console.log(total)

// limpar itens

function clearItems() {
    produto1.style.visibility = "hidden"
    produto1.style.position = "absolute"
    let array = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === "Concha da Ariel") {
            array.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array));


}

function clearItems2() {
    produto2.style.visibility = "hidden"
    produto2.style.position = "absolute"
    let array2 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array2.length; i++) {
        if (array2[i][0] === "Dente do Monstro") {
            array2.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array2));
}

function clearItems3() {
    produto3.style.visibility = "hidden"
    produto3.style.position = "absolute"
    let array3 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array3.length; i++) {
        if (array3[i][0] === "Fertilizante") {
            array3.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array3));
}

function clearItems4() {
    produto4.style.visibility = "hidden"
    produto4.style.position = "absolute"
    let array4 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array4.length; i++) {
        if (array4[i][0] === "Lucca") {
            array4.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array4));
}

function clearItems5() {
    produto5.style.visibility = "hidden"
    produto5.style.position = "absolute"
    let array5 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array5.length; i++) {
        if (array5[i][0] === "dinoovo") {
            array5.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array5));
}

function clearItems6() {
    produto6.style.visibility = "hidden"
    produto6.style.position = "absolute"
    let array6 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array6.length; i++) {
        if (array6[i][0] === "Peixe Abajuor") {
            array6.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array6));
}

function clearItems7() {
    produto7.style.visibility = "hidden"
    let array7 = JSON.parse(localStorage.getItem("arr"));
    produto7.style.position = "absolute"

    for (let i = 0; i < array7.length; i++) {
        if (array7[i][0] === "Raspadinha do Titanic") {
            array7.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array7));
}

function clearItems8() {
    produto8.style.visibility = "hidden"
   produto8.style.position = "absolute"
   let array8 = JSON.parse(localStorage.getItem("arr"));

   for (let i = 0; i < array8.length; i++) {
       if (array8[i][0] === "Cetro Narval") {
           array8.pop(i);
           break;
       }
   }

   localStorage.setItem("arr", JSON.stringify(array8));
}

function clearItems9() {
    produto9.style.visibility = "hidden"
    produto9.style.position = "absolute"
    let array9 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array9.length; i++) {
        if (array9[i][0] === "Salgasoxo") {
            array9.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array9));


}

function clearItems10() {
    produto10.style.visibility = "hidden"
    produto10.style.position = "absolute"
    let array10 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array10.length; i++) {
        if (array10[i][0] === "Sushi Kraken") {
            array10.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array10));


}

function clearItems11() {
    produto11.style.visibility = "hidden"
    produto11.style.position = "absolute"
    let array11 = JSON.parse(localStorage.getItem("arr"));

    for (let i = 0; i < array11.length; i++) {
        if (array11[i][0] === "Bobolha") {
            array11.pop(i);
            break;
        }
    }

    localStorage.setItem("arr", JSON.stringify(array11));


}

// finalizar

function finalizar() {
    alert("Pedido realizado! Agradecemos a sua confiança")
}

