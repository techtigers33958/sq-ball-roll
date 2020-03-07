radio.onReceivedValue(function (name, value) {
    if (name == "servo_1") {
        pins.servoWritePin(AnalogPin.P0, value)
    } else if (name == "servo_2") {
        pins.servoWritePin(AnalogPin.P2, value)
    } else if (name == "servo_3") {
        pins.servoWritePin(AnalogPin.P4, value)
    }
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
