
function simulacaoDeCompra(){

    alert("Essa é uma simulação onde será necessário inserir os dados de alguns produtos pré-definidos.");

    alert("Podem ser utilizados os valores da tabela abaixo, ou valores pessoais definidos pelo usuário.");

    //Refrigerante//
    let precoRefrigerante = prompt("Digite o preço do refrigerante",);
    let quantidadeRefrigerante = prompt("Digite a quantidade de refrigerante",);
    
    //Macarrão//
    let precoMacarrao = prompt("Digite o preço do macarrão",);
    let quantidadeMacarrao = prompt("Digite a quantidade de macarrão",);
    
    //Ervilha//
    let precoErvilha = prompt("Digite o preço do ervilha",);
    let quantidadeErvilha = prompt("Digite a quantidade de ervilha",);
    
    //Arroz//
    let precoArroz = prompt("Digite o preço do arroz",);
    let quantidadeArroz = prompt("Digite a quantidade de arroz",);
    
    //Feijão//
    let precoFeijao = prompt("Digite o preço do feijão",);
    let quantidadeFeijao = prompt("Digite a quantidade de feijão",);
    
    //Vinho//
    let precoVinho = prompt("Digite o preço do vinho",);
    let quantidadeVinho = prompt("Digite a quantidade de vinho",);

    //Total sem vinho//
    let totalSVinho = (precoRefrigerante*quantidadeRefrigerante)+(precoMacarrao*quantidadeMacarrao)+(precoErvilha*quantidadeErvilha)+(precoArroz*quantidadeArroz)+(precoFeijao*quantidadeFeijao);

    //Total da compra//
    let totalCompra = (precoRefrigerante*quantidadeRefrigerante)+(precoMacarrao*quantidadeMacarrao)+(precoErvilha*quantidadeErvilha)+(precoArroz*quantidadeArroz)+(precoFeijao*quantidadeFeijao)+(precoVinho*quantidadeVinho);

    //Valor à pagar//
    let valorPessoaUm = 0;
    let valorPessoaDois = 0;

    if(totalCompra % 2 !== 0){
        valorPessoaUm = (totalCompra/2).toFixed(2);
        valorPessoaDois = (totalCompra/2).toFixed(2);

    }else{
        valorPessoaUm = (totalSVinho/2).toFixed(2);
        valorPessoaDois = (totalSVinho/2 + precoVinho*quantidadeVinho).toFixed(2); 
    }

    
    alert("A primeira pessoa terá de pagar um valor de R$ " + valorPessoaUm + ".");
    
    alert("A segunda pessoa terá de pagar um valor de R$ " + valorPessoaDois + ".");

    console.log("A primeira pessoa terá de pagar um valor de R$ " + valorPessoaUm + ".")
    
    console.log("A segunda pessoa terá de pagar um valor de R$ " + valorPessoaDois + ".")

} 


 