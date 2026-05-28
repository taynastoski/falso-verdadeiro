console.log ("---SISTEMA DE FATURAMENTO CORREÇÃO---");
console.log("");

function calcularTotalItem(precoUnitario, quantidade){
    return precoUnitario * quantidade;
}

let TotalDaCompra = calcularTotalItem(45,3);

console.log("Produto: Mouse Gamer");
console.log("Preço: R$ 45.00  : Quantidade: 3");
console.log("Valor Total a  pagar: R$ + TotalDaCompra");

console.log("");
console.log("---FIM---");