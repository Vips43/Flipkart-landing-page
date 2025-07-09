

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

