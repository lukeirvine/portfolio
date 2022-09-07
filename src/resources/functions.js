// Uses the Fisher-Yates (aka Knuth) Shuffle algorithm
// found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffleArray = array => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Returns a number from min to max, including both min and max
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}