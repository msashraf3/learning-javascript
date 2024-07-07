const numbers = [45, 65, 23, 98, 19];

for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    console.log(element);
}

// new way to declare the for loop. This is called for of loop, there is another loop called for in. we gonna learn that later

for(const element of numbers){
    console.log(element);
}

const products = [
    {id: 1, name: 'xiaomi phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'macbook air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron Laptop', price: 19000},
    {id: 6, name: 'samsung Phone note 7', price: 19000},
    {id: 7, name: 'nokia old age Phone gone', price: 19000},
    {id: 8, name: 'phone one', price: 19000},
    {id: 9, name: 'M1 chip not cheap lapTOP', price: 19000},
];

for(const product of products){
    console.log(product);
}

function matchedProducts(products, search){
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptoP');
console.log(result);