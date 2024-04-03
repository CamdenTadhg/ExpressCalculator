function mean(array){
    let sum = 0;
    for (let num of array){
        sum = sum + num;
    }
    return sum / array.length;
}

function median(array){
    array.sort();
    if (array.length % 2 !== 0){
        return array[array.length/2 - 0.5];
    } else {
        return (array[array.length/2] + array[array.length/2 - 1])/2
    }
}

function mode(array){
    //create a frequency map object
    let frequency = {};
    for (let num of array){
        if (num in frequency){
            frequency[num] += 1;
        } else {
            frequency[num] = 1;
        }
    }
    //find maximum frequency
    let max = 0;
    for (let val of Object.values(frequency))
        if (val >= max){
            max = val;
        }
    let stringMode = Object.keys(frequency).filter(key => frequency[key] === max)
    //convert string answers to integer answers
    let mode = [];
    for (let val of stringMode){
        mode.push(parseInt(val));
    }
    if (mode.length === 1){
        return mode[0];
    } else {
        return mode;
    }
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode
}