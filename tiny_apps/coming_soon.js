let comingSoon = (color, font) => {
    const canvas = document.createElement('canvas');
    canvas.id = 'coming-soon'
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = `4px solid ${color}`;

    const context = canvas.getContext('2d')

    context.font = ` 40px ${font}`
    context.fillStyle = `${color}`
    context.fillText('Coming Soon...', 10, 40)

    const display = document.getElementById('display');
    display.append(canvas)
}

