let searchform=document.querySelector('.search-form')

document.querySelector('#search-btn').addEventListener("click",()=>{
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    loginform.classList.remove('active')
    shoppingcart.classList.remove('active')
})
let shoppingcart=document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').addEventListener("click",()=>{
    shoppingcart.classList.toggle('active')
    navbar.classList.remove('active')
    loginform.classList.remove('active')
    searchform.classList.remove('active')
})
let loginform =document.querySelector('.login-form')

document.querySelector('#login-btn').addEventListener("click",()=>{
    loginform.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active')
})
let navbar =document.querySelector('.navbar')

document.querySelector('#menu-btn').addEventListener("click",()=>{
    navbar.classList.toggle('active')
    loginform.classList.remove('active')
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active')
})
window.addEventListener("onscroll",()=>{
    navbar.classList.remove('active')
    loginform.classList.remove('active')
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active')
})
// initialize swipper

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });