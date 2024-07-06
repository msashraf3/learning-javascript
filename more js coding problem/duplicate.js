const name = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeDuplicate(names){
    let storeName = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        // console.log(name);
        /* we can write it this way or we can use this way as well
        if (storeName.includes(name)) {
            continue;
        }
        else{
            storeName.push(name);
        }
    } */
    if (storeName.includes(name) === false) {
        storeName.push(name);
    }
}
    return storeName;
}

console.log(removeDuplicate(name));
// const calling = removeDuplicate(name);
// console.log(calling);