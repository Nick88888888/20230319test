let now = 3
let past = 3
let R = 150
let L = 150
let 速度改變 = 20
let 直走速度 = 500
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        now = 1
    } else if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        now = 2
    } else if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        now = 5
    } else if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        now = 4
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        now = 3
    } else {
        now = 6
    }
    if (now == 1) {
        L += 速度改變 + 30
        R += (速度改變 + 30) * -1
    } else if (now == 5) {
        L += (速度改變 + 30) * -1
        R += 速度改變 + 30
    } else if (now == 2) {
        L += 速度改變
        R += 速度改變 * -1
    } else if (now == 4) {
        L += 速度改變 * -1
        R += 速度改變
    } else if (past == 2 || past == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        R += 30
        L += 50
    } else if (past == 4 || past == 5) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        L += 30
        R += 50
    }
    if (L >= 1023) {
        L = 1023
    } else if (L <= 0) {
        L = 0
    }
    if (R >= 1023) {
        R = 1023
    } else if (R <= 0) {
        R = 0
    }
    if (now == 3) {
        R = 直走速度
        L = 直走速度
    }
    pins.analogWritePin(AnalogPin.P2, L)
    pins.analogWritePin(AnalogPin.P1, R)
    if (now != 6) {
        past = now
    }
    basic.pause(1)
})
