document.addEventListener("DOMContentLoaded", () => {
  //Implement Your Code Here
  const burgerMenu = document.getElementsByClassName("menu")[0]

  //Appending burger to menu
  function getBurgers(){fetch('http://localhost:3000/burgers')
      .then(response => response.json())
      .then(json => json.forEach(loadBurger))
    }

  function loadBurger(burger){
    let div = document.createElement("div")
    div.className = "burger"
    div.dataset.id = burger.id
    div.innerHTML = `<h3 class="burger_title" name="title">${burger.name}</h3>
    <img src="${burger.image}">
    <p class="burger_description">${burger.description}</p>
    <button class="button">Add to Order</button>`
    burgerMenu.append(div)
  }
  //END of Apending burgers to menu
    
  //adding burgers to order 
  function add_burgerToOrder(e){
      const li = document.createElement("li")
      const orderList = document.getElementById("order-list")
      const burger = e.target.parentNode
      const burgerName = burger.children[0].textContent
      li.textContent = burgerName
      orderList.append(li)
    }
    //end adding burgers to order

//adding custom burgers
const customForm = document.getElementById("custom-burger")

customForm.addEventListener("submit", function(e){
 e.preventDefault()
  console.log("I hear a custom burger coming")
  let form = e.target
  const name = e.target.name.value
  const description = e.target.description.value
  const url = e.target.url.value
  const burger = {name: name, description: description, image: url}
  
  loadBurger(burger)
  add_burgerToOrder()
})

//END of adding custom burgers







    
    getBurgers()
    burgerMenu.addEventListener("click", function(e){
        if (e.target.className === "button"){
          add_burgerToOrder(e)
        } 
    })
// END OF THE DOM LISTENER
})
