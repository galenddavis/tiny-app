let generateArt = (color) => {
    const canvas = document.createElement('canvas')
    canvas.id = 'art';
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = `4px solid ${color}`
    canvas.style.background = '#000000'

    const context = canvas.getContext("2d")

    for (let x = 0; x < 255; x++) {
        for (y = 0; y < 255; y++) {
            if ((x ^ y) % 3) {
                context.fillRect(x**2, y*5, 120, 120);
                context.fillStyle = `rgb(${(x^y) * 3}, ${(x^y)}, 255)`
            };
        };
    };

    const display = document.getElementById('display')
    display.append(canvas)

};

// document.addEventListener("DOMContentLoaded", generateArt)

// Other Cool patterns
// (x << y) % 100
// (x^y) % 3