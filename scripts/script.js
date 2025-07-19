

let sideMenu = document.querySelector('.side-menu')
let menuBar = document.querySelector('#menubar')

function clickMenu(){

  // sideMenu.classList.toggle('display')
  if(sideMenu.classList.contains('display')){
    sideMenu.classList.remove('display')
    menuBar.classList.remove('fa-xmark')
  }
  else{
    sideMenu.classList.add('display')
    menuBar.classList.add('fa-xmark')
  }
}

let slides = document.querySelector('.slides')
let slideImg = document.querySelectorAll('.slide-img')
let count = 0;

const slideShow = ()=>{
  setInterval(()=>{
    slideImg.forEach((e)=>{
      for(i=0; i<slideImg.length; i++){
        slides.style.transform = `translateX(-${100 * count}%)`;
        count++;
      }
    })
  },2000)

} 
slideShow