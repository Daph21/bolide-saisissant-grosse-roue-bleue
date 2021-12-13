control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    Clic += 1
    Distance = Clic / 10 * 175.08
    radio.sendValue("d", Distance)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showString("!")
    control.reset()
    Clic = 0
    Distance = 0
})
let Distance = 0
let Clic = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
Clic = 0
Distance = 0
