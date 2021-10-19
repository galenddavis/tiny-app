
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'c', 'ENTER']
const ops = ['add', 'sub', 'multi', 'div']

const defaultState = {
    currentInput: '',
    total: 0, 
    currentOp: null
}

const generateMath = () => {
    // declare state
    let state = {...defaultState}

    // create div for calculator
    const math = document.createElement('div');
    math.id = 'math';
    math.style.border = `4px solid ${appList[0].color}`

    // draw 'lcd' screen
    const lcd  = document.createElement('span')
    lcd.id = 'lcd';
    lcd.className = 'math-module';
    lcd.innerHTML = state.total;

    math.append(lcd);
    
    const numbers = document.createElement('div');
    numbers.id = 'numbers'
    numbers.className = 'math-segment'

    // handle num inputs
    const handleNumInput = (numInput) => {
        if (numInput === '.') return;
        if (numInput === 'c') {
            state = {...defaultState}
            return lcd.innerHTML = 0;
        }

        state.currentInput += numInput;
        console.log(state)
        lcd.innerHTML = state.currentInput
    }

    // handle calculations
    const calculate = () => {
        let currentValue = parseFloat(state.currentInput)
        switch(state.currentOp) {
            case('add'):
                state.total += currentValue;
                break;
            case('sub'):
                state.total -= currentValue;
                break;
            case('multi'):
                state.total *= currentValue;
                break;
            case('div'):
                state.total /= currentValue;
                break;
        }

        state.currentInput = '';
        lcd.innerHTML = total;
    }

    const handleOpInput = (opInput) => {
        if (state.currentOp) {
            calculate()
            state.currentOp = opInput;
        } else {
            state.total = parseFloat(state.currentInput)
            state.currentInput = '';
            state.currentOp = opInput;
        }
        console.log(state)
    }

    // draw numbers
    nums.forEach(num => {
        let button = document.createElement('button')
        button.innerHTML = num;
        if (num === 'c') button.style.color = appList[0].color
        button.onclick = () => handleNumInput(num)
        numbers.append(button)
    })

    // draw ops buttons
    ops.forEach(op => {
        let button = document.createElement('button')
        button.innerHTML = op
        button.onclick = () => handleOpInput(op)
        options.append(button)
    })


    // function with switch statement to determine operation

    // function for the clear functionality
    // create "screen" for calculator that will show what we'er doing
    // create grid with all buttons
    // has on click that calls operation function
    // display = document.getElementById('display')
    
    math.append(numbers);
    display.append(math)
}