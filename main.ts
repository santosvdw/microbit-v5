// Morsecode vertalen
let morseString = "";

const codes = [ 
    ['01', 'A'],
    ['1000', 'B'],
    ['1010', 'C'],
    ['100', 'D'],
    ['0', 'E'],
    ['0010', 'F'],
    ['110', 'G'],
    ['0000', 'H'],
    ['00', 'I'],
    ['0111', 'J'],
    ['101', 'K'],
    ['0100', 'L'],
    ['11', 'M'],
    ['10', 'N'],
    ['111', 'O'],
    ['0110', 'P'],
    ['1101', 'Q'],
    ['010', 'R'],
    ['1', 'T'],
    ['001', 'U'],
    ['0001', 'V'],
    ['011', 'W'],
    ['1001', 'X'],
    ['1011', 'Y'],
    ['1100', 'Z'],
    ['01111', '1'],
    ['00111', '2'],
    ['00011', '3'],
    ['00001', '4'],
    ['00000', '5'],
    ['10000', '6'],
    ['11000', '7'],
    ['11100', '8'],
    ['11110', '9'],
    ['11111', '0'],
    ['000111000', 'SOS'],
    ['101001', 'CHARLEY'],
    ['000011', 'SANTOS'],
]



input.onButtonPressed(Button.A, function () {
    morseString += "0"
    basic.showLeds(`
    .....
    .....
    ..#..
    .....
    .....
    `)
    basic.pause(300)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    morseString += "1"
    basic.showLeds(`
    .....
    .....
    .###.
    .....
    .....
    `)
    basic.pause(300)
    basic.clearScreen()
})

const checkForMatch = () => {
    for (let i = 0; i < codes.length; i++) {
        if (codes[i][0] == morseString) {
            basic.showString(codes[i][1])
        } else if (morseString == '') {
            handleError()
        } else {
            handleError()
        }
    }
    morseString = ''
}

const handleError = () => {
    basic.showLeds(`
            #...#
            .#.#.
            ..#..
            .#.#.
            #...#
            `)
    basic.clearScreen()
    basic.pause(1000)
    morseString = ''

}

input.onGesture(Gesture.Shake, () => {
    checkForMatch()
   
})