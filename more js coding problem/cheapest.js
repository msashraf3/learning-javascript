//this is an some of the objects inside of an array. we can also write it this way 

const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 34000, color: 'grey'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 52000, color: 'grey'},
    {name: 'oppo', camera: 12, storage: '32gb', price: 26000, color: 'grey'},
  {name: 'xiaomi', camera: 12, storage: '32gb', price: 20000, color: 'grey'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 84000, color: 'grey'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'grey'}
  ];
  
  function cheapestOfAll(phone){
    let cheapest = phone[0];
    for(i = 0; i < phone.length; i++){
      const element = phone[i];
      if(element.price < cheapest.price){
        cheapest = element;
      }
    }
    return cheapest;
  }
  
  console.log(phones);
  
  const calling = cheapestOfAll(phones);
  console.log(calling);