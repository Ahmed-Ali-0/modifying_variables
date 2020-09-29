let modifying_Variables = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        modifying_Variables = modifying_Variables + 1
        basic.showNumber(modifying_Variables)
    }
})
