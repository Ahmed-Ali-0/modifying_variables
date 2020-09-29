let modifying_Variables = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        modifying_Variables = modifying_Variables + 1
        basic.showNumber(modifying_Variables)
    } else if (input.buttonIsPressed(Button.B)) {
        modifying_Variables = 0
        basic.showNumber(modifying_Variables)
    }
})
