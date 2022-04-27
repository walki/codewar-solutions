function minUmbrellas(weather) {
    let homeCount = 0;
    let workCount = 0;
    
    let minUmbrellas = 0;
    let trip = 0;

    while (trip < weather.length) {
        if (goingToWork(trip) && isRaining(weather[trip])) {
            homeCount === 0 ? minUmbrellas++ : homeCount--;
            workCount++;
        }
        trip++;

        if (goingHome(trip) && isRaining(weather[trip])) {
            workCount === 0 ? minUmbrellas++ : workCount--;
            homeCount++;
        }
        trip++;
    }

    return minUmbrellas;
}

function goingToWork(trip){
    return trip % 2 == 0;
}

function goingHome(trip){
    return !goingToWork(trip);
}

function isRaining(forecast){
    return forecast === 'rainy' || forecast === 'thunderstorms';
}



module.exports = minUmbrellas;