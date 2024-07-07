const nayok ={
    name: 'Sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{name: 'no. 1, year: 2015'}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like sakib khan')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(nayok);
console.log(nayok.act);
nayok.act();