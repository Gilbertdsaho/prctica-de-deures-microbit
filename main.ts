input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 50; index++) {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
