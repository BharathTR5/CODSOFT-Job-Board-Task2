const bar= document.querySelector('#bar');
const menu = document.querySelector('ul');
if(bar){
  bar.addEventListener('click', ()=>{
    menu.classList.toggle("active")
  })
}

const sortBtns=document.querySelectorAll('.job-id > *');
const sortItems=document.querySelectorAll('.jobs-container > *');

sortBtns.forEach((btn) => {
  btn.addEventListener('click', ()=>{
    sortBtns.forEach((btn)=>{
      btn.classList.remove('active')});
      btn.classList.add('active');

      const dataTarget = btn.getAttribute('data-target');

      sortItems.forEach((item)=>{
       item.classList.add('delete');
       
       if(dataTarget === item.getAttribute('data-item')){
        item.classList.remove('delete');
       }
       if(dataTarget === 'all'){
        item.classList.remove('delete');
       }
      })
    })
  });