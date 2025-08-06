function comprar() {
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value
    let quantidade = parseInt(document.getElementById('qtd').value)

    if (tipoDeIngresso == 'pista') {
        pista(quantidade);
    } else if (tipoDeIngresso == 'inferior') {
        inferior(quantidade);
    } else {
        superior(quantidade);
    }

}

function pista(qtd) {
    let valor = parseInt(document.getElementById("qtd-pista").innerHTML)
    if (qtd > valor) {
        alert("Quantidade solicitada é maior que o estoque disponível!")
    } else if (qtd < 0) {
        alert("Por favor, digite uma quantidade válida (maior que zero).")
    }
    else {
        alert('Compra Realizada com Sucesso!')
        let resultado = (valor - qtd)
        document.getElementById("qtd-pista").innerHTML = resultado
    }
}

function inferior(qtd) {
    let valor = parseInt(document.getElementById("qtd-inferior").innerHTML)
    if (qtd > valor) {
        alert("Quantidade solicitada é maior que o estoque disponível!")
    } else if (qtd < 0) {
        alert("Por favor, digite uma quantidade válida (maior que zero).")
    } else {
        alert('Compra Realizada com Sucesso!')
        let resultado = (valor - qtd)
        document.getElementById("qtd-inferior").innerHTML = resultado
    }
}

function superior(qtd) {
    let valor = parseInt(document.getElementById("qtd-superior").innerHTML)
    if (qtd > valor) {
        alert("Quantidade solicitada é maior que o estoque disponível!")
    } else if (qtd < 0) {
        alert("Por favor, digite uma quantidade válida (maior que zero).")
    } else {
        alert('Compra Realizada com Sucesso!')
        let resultado = (valor - qtd)
        document.getElementById("qtd-superior").innerHTML = resultado
    }
}