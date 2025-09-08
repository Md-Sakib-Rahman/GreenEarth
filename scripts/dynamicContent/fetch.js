const urlAll = "https://openapi.programming-hero.com/api/";
const urlCat = "https://openapi.programming-hero.com/api/categories";
const catContainer = document.getElementById('cat-container');
const prodContainer = document.getElementById('prod-container')
async function fetchProd(q='plants'){
    try{
        const url=urlAll+q;
        const res = await fetch(url)
        const prods = await res.json()
        return prods.plants;
    } catch(err) {
        console.log("Error => ", err)
    }
}
function updateProd(prods){
    prodContainer.innerHTML='';
    prods.forEach(prod => {
        const div =document.createElement('div');
        div.classList.add(
         'Product-Cart',
         'flex',
         'flex-col',
         'justify-start',
         'items-start',
         'gap-5',
         'bg-white',
         'p-4',
         'rounded-xl',
         'max-h-[500px]',
        )
        div.innerHTML=`
            <div
              class="w-full h-[200px] bg-[url('${prod.image}')] bg-cover bg-center bg-no-repeat"
            >
             
            </div>
            <div>
              <h2 class="font-bold mb-2">${prod.name}</h2>
              <p class="text-gray-500">
                ${prod.description}
              </p>
              <div class="w-full flex justify-between items-center mt-2">
                <div class="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-xl">
                  <h2>${prod.category}</h2>
                </div>
                <div>
                  <h2 class="font-bold"><span>${prod.price}</span>$</h2>
                </div>
              </div>
            </div>
            <div class="w-full">
              <button class="bg-[#15803D] text-white w-full py-4 rounded-xl">
                Add to Cart
              </button>
            </div>
        `
        
        prodContainer.appendChild(div);
    })
}
async function fetchCat(){
    try{
        const res = await fetch(urlCat)
        const categories = await res.json()
        return categories
    } catch(err){
        console.log("Error => ", err)
    }
}
function updateCat(cats){
    cats.categories.forEach(cat => {
        const button = document.createElement('button');
        button.classList.add('cat-btn', 'min-lg:w-full', 'hover:text-white', 'hover:bg-[#15803D]', 'px-2', 'py-2', 'text-left', 'rounded-lg');
        button.id= cat.id;
        button.textContent= cat.category_name;
       
        button.addEventListener("click", (e) => {
      document.querySelectorAll(".cat-btn").forEach((btn) => {
        btn.classList.remove("text-white", "bg-[#15803D]");
      });
      e.target.classList.add("text-white", "bg-[#15803D]");
      
      fetchProd(`category/${e.target.id}`).then(prods =>{
            console.log(prods);
            updateProd(prods)
        })
    });

        catContainer.appendChild(button)

    });
}
fetchCat().then(categories => {
  console.log(categories);
  updateCat(categories);
});
fetchProd().then(prods =>{
    console.log(prods);
    updateProd(prods)
})
