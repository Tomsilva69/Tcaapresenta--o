document.addEventListener("DOMContentLoaded", function () {
    const prices = document.querySelectorAll(".price");
    const quantities = document.querySelectorAll(".quantity");
    const totals = document.querySelectorAll(".total");
    const subtotal = document.querySelector(".subtotal");
    const grandTotal = document.querySelector(".grand-total");
    const checkoutButton = document.querySelector(".checkout");
 

    window.onload = function() {

        document.querySelector('.subtotal').textContent = "R$ 1767,00";
       document.querySelector('.grand-total').textContent = "R$ 1767,00";
    }
    
    function updateTotal(index) {
        const price = parseFloat(prices[index].textContent.replace("R$ ", ""));
        const quantity = parseInt(quantities[index].textContent);
        const total = price * quantity;
        totals[index].textContent = "R$ " + total.toFixed(2);
    }

    
    function updateSubtotalAndGrandTotal() {
        let subtotalAmount = 0;
        totals.forEach((total) => {
            subtotalAmount += parseFloat(total.textContent.replace("R$ ", ""));
        });
        subtotal.textContent = "R$ " + subtotalAmount.toFixed(2);
        grandTotal.textContent = "R$ " + subtotalAmount.toFixed(2);
        return  grandTotal.textContent;
    }

   
    
    const minusButtons = document.querySelectorAll(".minus");
    const plusButtons = document.querySelectorAll(".plus");

    minusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let currentQuantity = parseInt(quantities[index].textContent);
            if (currentQuantity > 0) {
                currentQuantity--; // c = c - 1
                quantities[index].textContent = currentQuantity;
                updateTotal(index);
                updateSubtotalAndGrandTotal();
            }
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let currentQuantity = parseInt(quantities[index].textContent);
            currentQuantity++;
            quantities[index].textContent = currentQuantity;
            updateTotal(index);
            updateSubtotalAndGrandTotal();
        });
    });

    
    const removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let currentQuantity = parseInt(quantities[index].textContent);
            currentQuantity=0;
            quantities[index].textContent = currentQuantity;
            updateTotal(index);
            updateSubtotalAndGrandTotal();
            const row = button.closest("tr");
            row.parentNode.removeChild(row);

        });
    });

        checkoutButton.addEventListener("click", () => {
            // const subtotal2 = document.querySelectorAll(".subtotal").innerText;
            var grandtotal2 = document.querySelector(".grand-total").textContent;   //";//document.querySelector(".grandTotal").innerText;
            // localStorage.setItem('subtotal2', );
            
            localStorage.setItem('grandtotal', grandtotal2 , "sub", grandTotal );
            window.location.href = "Compra.html";
            // return "Texto para ser adicionado"
            // 1) criar uma classe para indicar o elemento onde o total será adicionado na páina compra.html
            //2) conseguir puxar o valor de total para essa função aqui
            // let totalFinal = updateSubtotalAndGrandTotal()
        });

        

});