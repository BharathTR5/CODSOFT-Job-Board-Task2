const categories = Array.from(jCategory);

const displayItems = (items)=>{
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';

  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>
      item.title.toLowerCase().includes(searchData)
    );
    displayItems(filterData);
  })

  items.forEach((item)=>{
    const {index, image, title, salary, jobType} = item;
    const jList = document.createElement('div');
    jList.className = 'jlist'
    jList.innerHTML= `
      <img src="${image}" alt="">
        <h3>${title}</h3>
        <p>${salary}</p>
        <span id="key">${jobType}</span>
    `   
    rootElement.appendChild(jList);

    jList.addEventListener('click', ()=>{
      window.location.href=`job-details.html?id=${index}`;
    })

    
  })
}

displayItems(categories)