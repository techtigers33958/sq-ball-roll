// Checks if name (name of servo motor) = "servo_1"
//
//
// if yes, then servo pin is set to value (an angle)
//
//
// if no, it will move on to the next one ("servo_2"
// or "servo_3")
radio.onReceivedValue(function (name, value) {
    if (name == "servo_1") {
        pins.servoWritePin(AnalogPin.P0, value)
    } else if (name == "servo_2") {
        pins.servoWritePin(AnalogPin.P2, value)
    } else if (name == "servo_3") {
        pins.servoWritePin(AnalogPin.P4, value)
    }
})
// Dispenses the ball:
//
// -pushes ball out
//
// -waits 1 sec
//
// -moves motor back
function dispenseBall () {
    radio.setGroup(70)
    pins.servoWritePin(AnalogPin.P10, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P10, 100)
}
// Manual control:
//
//
// -on demand, calls clearball
input.onButtonPressed(Button.AB, function () {
    clearBall()
})
// Manual control:
//
// -On demand, can force the ball to drop
//
// -used if challenge is left half done.
input.onButtonPressed(Button.B, function () {
    dispenseBall()
})
// Dispenses the ball:
//
//
// -used when ball gets stuck and needs to be pushed
// out
function clearBall () {
    pins.servoWritePin(AnalogPin.P0, 30)
    pins.servoWritePin(AnalogPin.P2, 30)
    pins.servoWritePin(AnalogPin.P4, 30)
}
// Resets program:
//
//
// -sets radio group to 70
//
// -resets the servo pins so it's ready for next use
function reset () {
    radio.setGroup(70)
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.servoWritePin(AnalogPin.P4, 0)
}
// Manual control:
//
//
// -On demand, can reset the program
//
// -used if challenge is left half done.
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
