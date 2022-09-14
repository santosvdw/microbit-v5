// Morsecode vertalen
let morseString: string = "";   // Een variabele waar de input van de morsecode wordt opgeslagen
let error: boolean = false;   // Als er een error is wordt deze true

const codes = [ // Een lijst met per morsecode een lijst van de code en de letter (. = 0 en - = 1)
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
    ['00100010', 'INFORMATICA'],
    ['111000110', 'OSG']
]

input.onButtonPressed(Button.A, function () {
    // Als A wordt ingedrukt wordt er een 0 aan de morseString variabele toegevoegd
    morseString += "0"
    basic.showLeds(`
    .....
    .....
    ..#..
    .....
    .....
    `)
    music.playTone(Note.F4, music.beat(BeatFraction.Quarter),)
    // Dan wordt er een . op het scherm weergeven en wordt er een geluid afgespeeld
    basic.pause(300)
    basic.clearScreen()
    // Na 0.3 sec worden alle lichtjes uitgezet
})
input.onButtonPressed(Button.B, function () {
    // Als B wordt ingedrukt wordt er een 1 aan de morseString variabele toegevoegd
    morseString += "1"
    basic.showLeds(`
    .....
    .....
    .###.
    .....
    .....
    `)
    music.playTone(Note.F4, music.beat(BeatFraction.Half))
    // Dan wordt er een . op het scherm weergeven en wordt er een geluid afgespeeld
    basic.pause(300)
    basic.clearScreen()
    // Na 0.3 sec worden alle lichtjes uitgezet
})

input.onGesture(Gesture.Shake, () => {
    // Als er met de met de bit wordt geschudt gaat ie kijken of er data in staat (of er minimaal één 0 of 1 is)
    if (morseString == '') {
        // zo niet, wordt er een error weergeven
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        // Als de morseString variabele data bevat wordt er gekeken of er een match is
        checkForMatch()
    }
})

const checkForMatch = () => {
    // Dit is de functie die zoekt naar een match
    for (const code of codes) {
        // Deze loop is hetzelfde als een for(let i = 0; i < x; i++ ) loop
        if (code[0] == morseString) {
            // Er wordt per mini-lijst in de code lijst gezocht of het eerste deel overeen komt met de morseString
            error = false
            // Als dat zo is wordt de error variabele op false gezet
            showText(code[1])
            // naar de showText functie wordt een variabele gestuurd die moet worden weergeven.
            // die variabele is de vertaalde morsecode
            break;
            // De loop wordt afgebroken omdat er een match is gevonden.
        } else {
            // De morsecode is correct ingevoerd
            error = true
            // Als er de hele loop geen match is gevonden wordt de error variabele true. 
        }
    }

    if (error) {
        // Deze code wordt alleen uitgevoerd als de error variabele waar (true) is
        basic.showIcon(IconNames.No)
        // Laat een kruis zien op het scherm
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        // Speel een error muziekje
        basic.pause(1000)
        basic.clearScreen()
        // Zet alle lichtjes op het scherm uit
    }
    morseString = ''
    // Reset de variabele: de gebruiker kan nu opnieuw beginnen
}

const showText = (e: string) => {
    // Deze functie ontvangt een stuk tekst die wordt opgeslagen in de variabele 'e'
    basic.showString(e)
    // De tekst wordt op het scherm weergeven
    music.playTone(Note.FSharp5, 500)
    // Er wordt een geluidje gespeeld
    basic.pause(1000)
    basic.clearScreen()
    // De lichtjes op het scherm gaan uit

    // De morsecode is correct ingevoerd
}

