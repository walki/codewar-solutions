const isNarcissistic = require('./narcissistic-numbers');

// test('', () => {
//     expect(  ).toEqual( );
// });


// A Narcissistic Number is a number of length n in
// which the sum of its digits to the power of n
// is equal to the original number. 
// If this seems confusing, refer to the example below.

test('0 is not narcissistic', () => {
    expect(isNarcissistic(0)).toEqual(true);
});

test('1  1^1 = 1', () => {
    expect(isNarcissistic(1)).toEqual(true);
});

test('2 -> 2^1 = 2', () => {
    expect(isNarcissistic(2)).toEqual(true);
});

test('9 -> 9^1 = 9', () => {
    expect(isNarcissistic(9)).toEqual(true);
});

test('10 -> 1^2 + 0^2 = 2 ', () =>{
    expect(isNarcissistic(10)).toEqual(false);
});

test('152 -- make me do the math ', () =>{
    expect(isNarcissistic(152)).toEqual(false);
});

test('153 -- make me do the math ', () =>{
    expect(isNarcissistic(153)).toEqual(true);
});

test('154 -- make me do the math ', () =>{
    expect(isNarcissistic(154)).toEqual(false);
});

test('54748 -- make me do the math ', () =>{
    expect(isNarcissistic(54748)).toEqual(true);
});
