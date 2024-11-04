const bar= document.querySelector('#bar');
const menu = document.querySelector('ul');
if(bar){
  bar.addEventListener('click', ()=>{
    menu.classList.toggle("active")
  })
}