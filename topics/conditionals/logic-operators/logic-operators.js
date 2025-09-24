// if there is freezing rain AND it's dark
// then I will stay at home
if (thereIsFreezingRain && lightLevel < 10) { // the "&&" means AND, because we can't just write AND. 
    stayAtHome();
}

// If there is freezing rain OR there is deep snow
// then I will stay at home
if (thereIsFreezingRain || snowLevel > 5) { // the "||" means OR, because we can't just write OR.
    stayAtHome();
}

// if NOT (there is freezing rain), then I'll go for a walk 
if ( !thereIsFreezingRain) {
    goForAWalk();
} // this is basically saying that if there is no freezing rain, using the NOT(!) attribute, then I will go for a walk

// another way that we can write it is:

if (thereIsFreezingRain) {
    // do nothing
}
else {
    goForAWalk();
}

// but it's just easier and clearer to write it the first way ^ 