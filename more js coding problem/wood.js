/**
 * fixed: per item wood requirement
 * 1. Chair --> 3 cft
 * 2. table --> 10 cft
 * 3. bed --> 50 cft
 * 
 * vary: quantity
 */

function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairQuantity = 3;
    const perTableQuantity = 10;
    const perBedQuantity = 50;

    const chairWood = chairQuantity * perChairQuantity;
    const tableWood = tableQuantity * perTableQuantity;
    const bedWood = bedQuantity * perBedQuantity;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
    
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculation(1, 1, 1);
console.log('total wood requirement',totalWood);