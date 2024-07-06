/**
 * if ticket number is less than 100, then per ticket price will be 100tk
 * if ticket number is more than 100, but less than 200. Then first 100 ticket price will be 100tk and rest tickets will be 90tk per piece
 * if you purchase more than 200 ticekts than 
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ---> 70tk
 */


function amount(totalTickets){
    const first100Price = 100;
    const second200Price = 90;
    const restTicketPrice = 70;

    if (totalTickets <= 100) {
        const totalMoney = totalTickets * first100Price;
        return totalMoney;
    } else if (totalTickets <= 200){
        const first100Quantity = 100 * first100Price;
        const restQuantity = totalTickets - 100;
        const restMoney = restQuantity * second200Price;
        const totalMoney = first100Quantity + restMoney;
        return totalMoney;
    } else {
        const first100Quantity = 100 * first100Price;
        const second100Quantity = totalTickets - 100;
        const second100Money = second100Quantity * second200Price;
        const restQuantity = totalTickets - 200;
        const restMoney = restQuantity * restTicketPrice;
        const totalMoney = first100Quantity + second100Money + restMoney;
        return totalMoney;
    }
}

const totalNeededTickets = 201;
const calling = amount(totalNeededTickets);
console.log('Total ticket Prices:', calling);