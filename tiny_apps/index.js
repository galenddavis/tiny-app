let appList = [
    "app",
    "blog",
    "shop",
    "note",
    "game",
    "grave",
    "art"
]

const display = document.getElementById('display')
const appTitle = document.getElementById('app-name')
const options = document.getElementById('options')
const carrots = document.querySelectorAll('.carrot')

appTitle.innerText = appList[0]
debugger

// toggle theme for grave
// const toggleDark = () => {
//     document.body.style.backgroundColor = '#000000'
//     document.body.style.color = '#FFFFFF'
//     appTitle.style.color = 'red'
//     carrots.forEach(carrot => carrot.style.color = 'white')
// }

// const toggleLight = () => {
//     document.body.style.backgroundColor = "#FFFFFF"
//     document.body.style.color = "#000000"
//     appTitle.style.color = "rgb(0, 209, 231)"
//     carrots.forEach(carrot => carrot.style.color = "black")
// }

const cleanUp = () => {
    display.innerHTML = '';
}

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerHTML = selectedApp;
    if (selectedApp === 'art') {
        cleanUp()
        generateArt('#5433be');
        appTitle.style.color = '#5433be';
        appTitle.style.fontFamily = 'Permanent Marker', cursive;
    } else if (selectedApp === 'game') {
        cleanUp()
        generateGame('#e624af');
        appTitle.style.color = '#e624af';
        appTitle.style.fontFamily = 'DotGothic16', sans-serif; 
    } else if (selectedApp === 'app') {
        cleanUp()       
        appTitle.style.color = '#3df9ea';
        appTitle.style.fontFamily = 'Ropa Sans', sans-serif;
    } else if (selectedApp === 'blog') {
        cleanUp()       
        appTitle.style.color = '#316436';
        appTitle.style.fontFamily = 'Felipa', cursive;
    } else if (selectedApp === 'shop') {
        cleanUp()       
        appTitle.style.color = '#b95358';
        appTitle.style.fontFamily = 'Major Mono Display', monospace;
    } else if (selectedApp === 'note') {
        cleanUp()       
        appTitle.style.color = '#7dcfa8';
        appTitle.style.fontFamily = 'Fredericka the Great', cursive;
    } else if (selectedApp === 'grave') {
        cleanUp()       
        appTitle.style.color = '#0e0e0e';
        appTitle.style.fontFamily = 'Creepster', cursive;
    } else {
        cleanUp();
    }
}

// assign button functionality
const rotateRight = () => {
    // if rotating right
    // move first element to the last element
    // this allows us to only care about appList[0]
    appList.push(appList.shift())
    setDisplay()
}

const rotateLeft = () => {
    appList.unshift(appList.pop())
    setDisplay();
}

const swapPages = (e) => {
    switch(e.keyCode) {
        case(37):
            rotateLeft();
            break;
        case(39):
            rotateRight();
            break;
    }
}

document.addEventListener('keydown', swapPages);

document.getElementById('right-button').onclick = rotateRight
document.getElementById('left-button').onclick = rotateLeft

document.addEventListener("DOMContentLoaded", () => {
    setDisplay()
})