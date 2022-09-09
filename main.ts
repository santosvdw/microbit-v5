// Morsecode vertalen
let morseString = ""

input.onButtonPressed(Button.A, function () {
    morseString += "0"
    basic.showLeds(`
    .....
    .....
    ..#..
    .....
    .....
    `)
    basic.pause(1500)
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
    basic.pause(1500)
    basic.clearScreen()
})

input.onGesture(Gesture.Shake,() => {
    basic.showString(morseString)
    morseString = ''
    basic.pause(3000)
    basic.clearScreen()
})
