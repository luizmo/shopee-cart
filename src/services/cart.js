async function addItem(userCart, item) {
  userCart.push(item)
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if( index !== -1 ) {
    userCart.splice(index, 1)
  }
  console.log(userCart)
}

async function displayCart(userCart) {
  console.log("\n Shopee Cart List")
  userCart.forEach((item, index) => {
    console.log(`${index +1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
  })
}

async function removeItem(userCart, item) {
 const indexFound = userCart.findIndex((p) => p.name === item.name)
  
  if (indexFound == -1 ) {
    console.log('Item não encontrado')
    return
  }

  if (userCart[indexFound].quantity > 1 ){
    userCart[indexFound].quantity -= 1
    userCart[indexFound].subtotal = () => {
      return userCart[indexFound].price * userCart[indexFound].quantity
    }
    return
  }

  if(userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1)
    return
  }

}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(`\n Total: ${result}`)
}

export {
  addItem, 
  calculateTotal, 
  deleteItem, 
  displayCart,
  removeItem
}