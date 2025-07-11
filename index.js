/* description  page *//* description  page *//* description  page */

// for quantity 
const plus = document.querySelector('.plus')
minus = document.querySelector('.minus')
num = document.querySelector('.num')

let a = 1;

plus.addEventListener('click', ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a)
})

minus.addEventListener('click', ()=>{
  if(a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
})

// for cart
const cartbtn = document.querySelector('.cartbtn');
const addToCart = document.querySelector('.add-to-cart');
const addedToCart = document.querySelector('.added-to-cart');
const cart = document.querySelector('.bi-cart-fill');

cartbtn.addEventListener('click', () => {
  addToCart.classList.add("add-to-cart-animation");
  addedToCart.classList.add("added-to-cart-animation");
  console.log("addtocart");
  cart.style.animation = "cart 2000ms ease-in-out forwards"
});
// slider start


