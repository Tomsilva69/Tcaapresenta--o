// script.js
function adicionarAoCarrinho(produto) {
    // Armazena o produto no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redireciona para a página do carrinho
    window.location.href = 'addcart.html';
}
