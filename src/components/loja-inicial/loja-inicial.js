let cart=document.querySelectorAll(".add-cart");
console.log(cart);

let products=[
  {
    name: 'BOX PREMIUM QIX + CHORÃO',
    price: 999,
    inCart:0

  },

  {
    name: 'MOCHILA HOCKS',
    price: 269,
    inCart:0

  },

  {
    name: 'RELÓGIO G-SHOCK',
    price: 499,
    inCart:0

  },

  {
    name: 'BONÉ ALIVE SIDE FIVE',
    price: 150,
    inCart:0

  },

  {
    name: 'GORRO ALIVE PRETO',
    price: 120,
    inCart:0

  },

  {
    name: 'TÊNIS QIX CHORÃO',
    price: 357,
    inCart:0

  },

  {
    name: 'BONÉ ALIVE STUFF STRAPBACK',
    price: 129,
    inCart:0

  },

  {
    name: 'CALÇA ALIVE JEANS BAGGY',
    price: 309,
    inCart:0

  },

]


for(let i=0;i,cart.length;i++)
  {
    cart[i].addEventListener('click', ()=>{


      cartNumbers(products[i]);
      totalCost(products[i]);

    })
}


function cartNumbers(products)
{

  let productNumbers=localStorage.getItem('cartNumbers');
  productNumbers=parseInt(productNumbers);
  if(productNumbers)
    {

      localStorage.setItem('cartNumbers',productNumbers+1);
      document.querySelector( '.count-number').textContent=productNumbers+1;


    }

    else{

    

  localStorage.setItem('cartNumbers',1);


  document.querySelector( '.count-number').textContent=1;
    }

}


function totalCost(product)
{

  let cartCost=localStorage.getItem('totalCost');
  if(cartCost!=null)
    {

      cartCost=parseInt(cartCost);
      localStorage.setItem('totalCost',cartCost+product.price);

    }
    else{

      localStorage.setItem('totalCost', product.price);

    }

  

}