const minUmbrellas = require('./man-and-umbrellas');


// Each morning a man walks to work, and each afternoon he walks back home.

// If it is raining in the morning and he has an umbrella at home, 
// he takes an umbrella for the journey so he doesn't get wet,
// and stores it at work. 
// Likewise, if it is raining in the afternoon 
// and he has an umbrella at work, he takes an umbrella for the journey home.

// Given an array of the weather conditions, 
// your task is to work out the minimum number of umbrellas 
// he needs to start with in order that he never gets wet. 
// He can start with some umbrellas at home and some at work, 
// but the output is a single integer, the minimum total number.

// The input is an array/list of consecutive half-day weather forecasts. 
// So, e.g. the first value is the 1st day's morning weather
// and the second value is the 1st day's afternoon weather. 

//The options are:

// "clear",
// "sunny",
// "cloudy",
// "rainy",
// "overcast",
// "windy"
// "thunderstorms".
// e.g. for three days, 6 values:
// weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]

//N.B. He never takes an umbrella if it is not raining.

test('nothing' , () => {
    expect( minUmbrellas([])).toEqual(0);
});

test('[clear, clear] no rain, no umbrella' , () => {
    expect( minUmbrellas(['clear', 'clear'])).toEqual(0);
});

test('[rainy, clear] 1 umbrella at home, ends up at work' , () => {
    expect( minUmbrellas(['rainy', 'clear'])).toEqual(1);
});

test(' clr, rny -  1 umbrella at work, ends up at home' , () => {
    expect( minUmbrellas(['clear', 'rainy'])).toEqual(1);
});

test(' rny, rny -  1 umbrella at home, ends up at home' , () => {
    expect( minUmbrellas(['rainy', 'rainy'])).toEqual(1);
});

test(' clr, clr, clr, clr -  0 umbrellas' , () => {
    expect( minUmbrellas(['clear', 'clear','clear', 'clear'])).toEqual(0);
});

test(' rny, clr, rny, clr -  2 umbrellas, both end up at work' , () => {
    expect( minUmbrellas(['rainy', 'clear','rainy', 'clear'])).toEqual(2);
});

test(' clr, rny, rny, clr -  1 ends up at work' , () => {
    expect( minUmbrellas(['clear', 'rainy','rainy', 'clear'])).toEqual(1);
});

test(' clr, rny, clr, rny -  2 umbrellas, both end up at home' , () => {
    expect( minUmbrellas(['clear', 'rainy', 'clear','rainy'])).toEqual(2);
});
