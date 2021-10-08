// initial state for the game
posX = posY = 10;
    gridSize = 20;
    tableSize = 25;
    appleX = appleY = 15;

    // only values manipulated by key (directional values)
    moveX = moveY = 0;

    body = []; // {x: posX, y: posY}
    segments = 5;


const generateGame = (color) => {
    canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = '500'
    canvas.height = '500'
    canvas.style.border = `4px solid ${color}`

    ctx = canvas.getContext('2d')
    document.getElementById('display')
    display.append(canvas)

    

    // logic for game

    const game = () => {
        posX += moveX;
        posY += moveY;

        // Filling canvas with black
        ctx.fillStyle='#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Changing color to player color
        ctx.fillStyle='#2ED9EB'

        // Game board edge detection
        if (posX < 0) {
            posX = tableSize - 1;
        }
        if (posX > tableSize - 1) {
            posX = 0;
        }
        if (posY < 0) {
            posY = tableSize - 1;
        }
        if (posY > tableSize - 1) {
            posY = 0;
        }

        // Drawing new segments
        for (let i = 0; i < body.length; i++) {
            ctx.fillRect(body[i].x * gridSize, body[i].y * gridSize, gridSize - 2, gridSize -2)

            // Resets segments if snake runs into itself
            if (body[i].x === posX && body[i].y === posY) {
                segments = 5;
            }
        }

        body.push({x: posX, y: posY})

        // Removes last segment if body becomes too long
        while (body.length > segments) {
            body.shift();
        }

        // Eating
        if (appleX === posX && appleY === posY) {
            segments++;
            appleX = Math.floor(Math.random() * tableSize);
            appleY = Math.floor(Math.random() * tableSize);
        }

        // Drawing the apple
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2)
    }


    // control our d-pad
    const keyDown = e => {
        switch(e.keyCode) {
            case(65):
                moveX = -1;
                moveY = 0;
                break;
            case(87):
                moveX = 0;
                moveY = -1;
                break;
            case(68):
                moveX = 1;
                moveY = 0
                break;
            case(83):
                moveX = 0
                moveY = 1
                break;
        }
    }


    document.addEventListener('keydown', keyDown);
    setInterval(game, 200);
    
        
}

document.addEventListener("DOMContentLoaded", generateGame)