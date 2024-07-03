

window.onload = function() {


    // var subtotal = localStorage.getItem('subtotal2');
    var grandtotal = localStorage.getItem('grandtotal');
    //console.log(grandtotal);
            
    // document.getElementById('subtotal').innerText = subtotal;
    //document.getElementById('grandtotal').innerHtml ="aqui está o texto" + grandtotal;
    //document.getElementsByClassName('subtotal').innerText ="auma coisa qualqer";
    document.querySelector('.subtotal').textContent = grandtotal;
    document.querySelector('.grandtotal').textContent = grandtotal;
    }
     document.getElementById("customerDetailsForm").addEventListener("submit", function(event) {
         event.preventDefault(); // Evita que o formulário seja enviado normalmente
    
        // Aqui você pode adicionar a lógica para finalizar a compra com base nos dados fornecidos pelo cliente
         // Por enquanto, apenas exibimos uma mensagem de sucesso.
         window.location.href = "finalização.html";
     });