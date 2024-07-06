const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600}
]

function sumOfAll(items){
    let totalPrice = 0;
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        totalPrice = totalPrice + element.price;
    }
    return totalPrice;
}

const expense = sumOfAll(shoppingCart);
console.log("Total price for your items is:", expense);