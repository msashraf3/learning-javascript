const shoppingCart = [
    {name: 'shoe', price: 1200 , quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700 , quantity: 4},
    {name: 'belt', price: 600 , quantity: 3},
]

function sumOfAll(items){
    let totalPrice = 0;
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        totalPrice = totalPrice + (element.price * element.quantity);
    }
    return totalPrice;
}

const expense = sumOfAll(shoppingCart);
console.log("Total price for your items is:", expense);