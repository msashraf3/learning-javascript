function mileToKillometer(mile){
    const killometer = mile * 1.609344;
    return killometer;
}

const mile = 69;
const killometer = mileToKillometer(mile);
console.log(killometer);