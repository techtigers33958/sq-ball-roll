radio.onReceivedValue(function (name, value) {
    if (name == "servo_1") {
        pins.servoWritePin(AnalogPin.P0, value)
    } else if (name == "servo_2") {
        pins.servoWritePin(AnalogPin.P2, value)
    } else if (name == "servo_3") {
        pins.servoWritePin(AnalogPin.P4, value)
    }
})
function clearBall () {
    pins.servoWritePin(AnalogPin.P0, 30)
    pins.servoWritePin(AnalogPin.P2, 30)
    pins.servoWritePin(AnalogPin.P4, 30)
}
function reset () {
    radio.setGroup(70)
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.servoWritePin(AnalogPin.P4, 0)
}
function dispenseBall () {
    radio.setGroup(70)
    pins.servoWritePin(AnalogPin.P10, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P10, 100)
}
input.onButtonPressed(Button.AB, function () {
    clearBall()
})
input.onButtonPressed(Button.B, function () {
    dispenseBall()
})
input.onButtonPressed(Button.A, function () {
    reset()
})
pins.analogSetPeriod(AnalogPin.P0, 20000)
pins.servoSetPulse(AnalogPin.P0, 2000)
pins.servoWritePin(AnalogPin.P0, 0)
pins.analogSetPeriod(AnalogPin.P2, 20000)
pins.servoSetPulse(AnalogPin.P2, 2000)
pins.servoWritePin(AnalogPin.P2, 0)
pins.analogSetPeriod(AnalogPin.P4, 20000)
pins.servoSetPulse(AnalogPin.P4, 2000)
pins.servoWritePin(AnalogPin.P4, 0)
pins.analogSetPeriod(AnalogPin.P10, 20000)
pins.servoSetPulse(AnalogPin.P10, 2000)
