var splashScreen = document.querySelector('.Splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
    var container = document.querySelector('.container');
    container.classList.remove('hidden');
    var container = document.querySelector('.selection-wrapper');
    container.classList.remove('hidden');
  },610)
})
