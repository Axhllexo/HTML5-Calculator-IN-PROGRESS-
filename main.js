const display = document.getElementById("__display")
const savedDisplay = document.getElementById("__saved")

var power = 0
var STRING = ""
var save = ""
var symbol = ""
var answer = 0
var equation = ""
var isOnFirstNum = 0

function update() {
    display.value = STRING
    savedDisplay.value = save
}

function inputFunc(vari) {
    if (vari == 'power') {
        power = !power
        if (power == 1) {
            STRING = "0"
            save = "0"
            isOnFirstNum = 1
        } else if (power == 0) {
            STRING = ""
            save = ""
            isOnFirstNum = 0
        }
    }

    if (power == 1) {
        if (vari == '1') {
            if (isOnFirstNum == 1) {
                STRING = "1"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "1"
            }
        } else if (vari == '2') {
            if (isOnFirstNum == 1) {
                STRING = "2"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "2"
            }
        } else if (vari == '3') {
            if (isOnFirstNum == 1) {
                STRING = "3"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "3"
            }
        } else if (vari == '4') {
            if (isOnFirstNum == 1) {
                STRING = "4"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "4"
            }
        } else if (vari == '5') {
            if (isOnFirstNum == 1) {
                STRING = "5"
                isOnFirstNum = 0
            } else {
                STRING = STRING + "5"
            }
        } else if (vari == '6') {
            if (isOnFirstNum == 1) {
                STRING = "6"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "6"
            }
        } else if (vari == '7') {
            if (isOnFirstNum == 1) {
                STRING ="7"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "7"
            }
        } else if (vari == '8') {
            if (isOnFirstNum == 1) {
                STRING = "8"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "8"
            }
        } else if (vari == '9') {
            if (isOnFirstNum == 1) {
                STRING = "9"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "9"
            }
        } else if (vari == '0') {
            if (isOnFirstNum == 1) {
                STRING = "0"
                isOnFirstNum = 0
            } else {
                STRING = STRING +  "0"
            }
        } else if (vari == '.') {
            if (STRING.includes(".")) {
                return
            } else {
                STRING = STRING + "."
            }
        } else if (vari == 'ca') {
            STRING = "0"
            save = "0"
            isOnFirstNum = 1
        } else if (vari == 'equate') {
            isOnFirstNum = 1
            answer = 1
            save = ""
            if (symbol == "divide") {
                equation = parseInt(display.value, 10) / parseInt(savedDisplay.value, 10)
            } else if (symbol == "multiply") {
                equation = parseInt(display.value, 10) * parseInt(savedDisplay.value, 10)
            } else if (symbol == "add") {
                equation = parseInt(display.value, 10) + parseInt(savedDisplay.value, 10)
            } else if (symbol == "sub") {
                equation = parseInt(display.value, 10) - parseInt(savedDisplay.value, 10)
            }
            STRING = equation
        } else if (vari == '/') {
            isOnFirstNum = 1
            save = STRING
            STRING = "0"
            symbol = "divide"
        } else if (vari == '*') {
            isOnFirstNum = 1
            save = STRING
            STRING = "0"
            symbol = "multiply"
        } else if (vari == '+') {
            isOnFirstNum = 1
            save = STRING
            STRING = "0"
            symbol = "add"
        } else if (vari == '-') {
            isOnFirstNum = 1
            save = STRING
            STRING = "0"
            symbol = "sub"
        }
    }
    update()
}