
let deskMenu = document.querySelector('#desk-elips')
let sideMenu = document.querySelector('.side-menu')
let menuBar = document.querySelector('#menubar')
let nav = document.querySelector('#nav')

function clickMenu(){

  // sideMenu.classList.toggle('display')
  if(sideMenu.classList.contains('display')){
    sideMenu.classList.remove('display')
    menuBar.classList.remove('fa-xmark')
  }
  else{
    sideMenu.classList.add('display')
    menuBar.classList.add('fa-xmark')
    nav.style.position = 'sticky'
    nav.style.top = '0px'
    
  }
}
function elips() {
  if(deskMenu.style.maxHeight == '200px'){
    deskMenu.style.maxHeight = '0px'
    deskMenu.style.padding = '0'
  }else{
    deskMenu.style.maxHeight = '200px'
    deskMenu.style.padding = '1rem'
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