const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//var totalBatteries = [4+5+3+4+4+6+5]
//console.log(totalBatteries);

//function ourReduce(totalBatteries) {
    //console.log(ourReduce);

const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
})
console.log(batteryBatches);
console.log(totalBatteries);

