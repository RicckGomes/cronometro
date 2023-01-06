let numero = 0
input.onButtonPressed(Button.A, function () {
    numero = 0
    for (let numero = 0; numero <= 10; numero++) {
        basic.showNumber(numero)
        basic.pause(1000)
    }
    basic.showString("FIM")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    numero = 10
    while (numero >= 0) {
        basic.showNumber(numero)
        basic.pause(1000)
        numero += -1
    }
    basic.pause(1000)
    basic.showString("FIM")
    basic.clearScreen()
})
