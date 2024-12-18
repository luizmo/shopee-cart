import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishlit = []

const item1 = await createItem("Hotwheels Ferr", 20.54, 1)
const item2 = await createItem("Hotwheels Audi", 39.54, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.displayCart(myCart)


await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)

await cartService.displayCart(myCart)

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)


