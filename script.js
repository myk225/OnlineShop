const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
const productsContainer=document.querySelector('.products');
const searchInput=document.querySelector('.search');
const categoriesContainer=document.querySelector('.cats');
const priceRange=document.querySelector('.range');
const priceValue=document.querySelector('.span');
  console.log(productsContainer);
const displayProducts=(filteredProducts)=>{
    productsContainer.innerHTML= filteredProducts.map(
        (x)=>
            `
    <div class="product">
    <img src=${x.img} alt=" kysa h">
    <span class="name">${x.name}</span>
    <span class="price">$${x.price}</span>
    </div>
    `
        
    ).join('');

}
searchInput.addEventListener('keyup',(event)=>{
          const value=event.target.value.toLowerCase();
          if(value){
              displayProducts(data.filter((item)=>{ return item.name.toLowerCase().indexOf(value)!== -1}))
          }else{
            displayProducts(data);
          }
})
// const set=(x)=>{
//     `
//     <div class="product">
//     <img src=${x.img} alt=" kysa h">
//     <span class="name">${x.name}</span>
//     <span class="price">${x.price}</span>
//     </div>

//     `
// }
displayProducts(data);

const setCategories= ()=>{
  const allCats=data.map(item=>item.cat)
  console.log(allCats);
  const categories=["All",...allCats.filter((item,i)=>allCats.indexOf(item)===i )]
  // allCats.forEach((element,i)=> {
  //   `
  //   <span>element</span> `
  // })
  categoriesContainer.innerHTML=categories.map(cat=>`

  
  <span class='cat'>${cat}</span>


  `).join('');

  categoriesContainer.addEventListener('click',(e)=>{
    const selectedCat=e.target.textContent;
    console.log(selectedCat);
    selectedCat === 'All'? displayProducts(data) : displayProducts(data.filter(item=>item.cat===selectedCat));
  }); 

} 

setCategories();

const setPrice=()=>{
  const prices=data.map(item=>item.price);
  console.log(...prices);
  const minPrice=Math.min(...prices);
  const maxPrice=Math.max(...prices);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value= maxPrice;
  priceValue.textContent="$"+maxPrice;
   priceRange.addEventListener('input',(e)=>{
    priceValue.textContent='$'+e.target.value;
    e.target.value===maxPrice? displayProducts(data) : displayProducts(data.filter(item=>item.price<=e.target.value));
   })


  
}
setPrice();