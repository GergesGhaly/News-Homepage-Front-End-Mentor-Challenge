const menuIcon= document.querySelector('.icon-menu');
const menu =document.querySelector('.header ul')
const shadow =document.querySelector('.shdow')

function toggle (){
    menu.classList.toggle('show')
    shadow.classList.toggle('show')
}