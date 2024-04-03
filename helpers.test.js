const {mean, median, mode} = require('./helpers');


test('mean', function(){
    let answer = mean([1, 2, 3, 4]);
    expect(answer).toEqual(2.5);
    let answer2 = mean([45, 33, 25, 67]);
    expect(answer2).toEqual(42.5);
    let answer3 = mean([0, 1, 2, 3, 4, 5, 6]);
    expect(answer3).toEqual(3);
})

test('median', function(){
    let answer = median([1, 2, 3, 4, 5]);
    expect(answer).toEqual(3);
    let answer2 = median([6, 3, 5, 9, 1, 6]);
    expect(answer2).toEqual(5.5);
})

test('mode', function(){
    let answer = mode([1, 1, 2, 3, 4, 5]);
    expect(answer).toEqual(1);
    let answer2 = mode([1, 1, 2, 2, 3, 4, 5]);
    expect(answer2).toEqual([1, 2]);
    let answer3 = mode([1, 2, 3, 4, 5]);
    expect(answer3).toEqual([1, 2, 3, 4, 5]);
    let answer4 = mode([1, 5, 7, 3, 4, 5, 9]);
    expect(answer4).toEqual(5);
})