
let colImg = document.querySelectorAll('.colgate-img');
let addToCart = document.querySelectorAll('.add-to-cart');
let cart = document.querySelector('.shop-cart')
let cartCount = document.querySelector('.cart-count');
let cartUl = document.querySelector('.cart-ul')
let itemCount = document.querySelector('.item-count');
// addToCart.forEach(cart => {
//   cart.addEventListener('click',()=> {
//       console.log('added to cart')
//       cartCount.innerText += cart[i];
//       i++;
//   })
// })
console.log(cartUl)

for(let i = 0; i<addToCart.length;i++){
  let count = 1;
  addToCart[i].addEventListener('click',()=> {
    cartCount.innerText = count;
    itemCount.innerText = count;
    count++;
  });
}
cart.addEventListener('click', ()=> {
  cartUl.classList.toggle('cart-see');
})

