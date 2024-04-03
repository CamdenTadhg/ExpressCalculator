const express = require('express');
const {mean, median, mode} = require('./helpers');
const ExpressError = require('./expressErrors');

const app = express();

app.get('/mean', (req, res, next) => {
    try{
        if (!req.query.nums) throw new ExpressError('nums are required', 400);
        const string = req.query.nums;
        const array = makeArray(string);
        console.log(array);
        for (let num of array){
            if (typeof num !== 'number'){
                console.log('entering if statement')
                throw new ExpressError(`${num} is not a number`, 400);
            }
        }
        const answer = mean(array);
        return res.json({response: {operation: 'mean', value: answer}});
    } catch(err){
        next(err);
    }
});

app.get('/median', (req, res, next) => {
    try{
        if (!req.query.nums) throw new ExpressError('nums are required', 400);
        const string = req.query.nums;
        const array = makeArray(string);
        for (let num of array){
            if (typeof num !== 'number'){
                throw new ExpressError(`${num} is not a number`, 400);
            }
        }
        const answer = median(array);
        return res.json({response: {operation: 'median', value: answer}});
    } catch(err) {
        next(err);
    }
})

app.get('/mode', (req, res, next) => {
    try{
        if (!req.query.nums) throw new ExpressError('nums are required', 400);
        const string = req.query.nums;
        const array = makeArray(string);
        for (let num of array){
            if (typeof num !== 'number'){
                throw new ExpressError(`${num} is not a number`, 400);
            }
        }
        const answer = mode(array);
        return res.json({response: {operation: 'mode', value: answer}});
    } catch(err) {
        next(err);
    }
});

function makeArray(string){
    const strArray = string.split(',');
    const array = [];
    for (let str of strArray){
        if (isNaN(parseInt(str)) === false){
            array.push(parseInt(str));
        }
        else {
            array.push(str);
        }
    }
    return array;
}

app.use((error, req, res, next) => {
    res.status(error.status).send(error.message);
})

app.listen(3000, function(){
    console.log('App on port 3000');
});



// write tests
//EXTRA CREDIT
// implement all route
// implement saving to a file
// implement timestamp for operation written to file
// implement honor the accept header