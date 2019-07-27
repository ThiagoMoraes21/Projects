function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for(let i = 0; i < 25; i++) {
    // get random numbers
    let width = getRandomSize(200, 400);
    let height = getRandomSize(200, 400);

    // get random size image
    let img = document.createElement('img');
    img.src = `http://lorempixel.com/${width}/${height}`;
    
    // append image
    document.getElementById('photos').appendChild(img);
}
