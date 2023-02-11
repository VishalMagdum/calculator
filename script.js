var input = document.getElementById('result')
var string = ""

var buttonArray = document.querySelectorAll('button')
buttonArray.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.id == "backspace") {
            string = string.slice(0, string.length - 1)
            input.value = string
        } else if (element.id == "clear") {
            string = ""
            input.value = string
        } else if (element.id == "equal") {
            result = eval(string)
            string = '' + result
            input.value = string

        } else {
            string = string.concat(element.value)
            input.value = string
            console.log(string)
        }

    })
})

let cal = function () {
    // console.log(event.key)
    if (event.key == 0 || event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == "c" || event.key == "C" || event.key == "%" || event.keyCode == 8 || event.keyCode == 16 || event.key == "/" || event.key == "*" || event.key == "-" || event.key == "+" || event.key == "=" || event.key == "." || event.key == "Enter") {

        if (event.keyCode == 8) {
            string = string.slice(0, string.length - 1)
            input.value = string
        } else if (event.key == "c" || event.key == "C") {
            string = ""
            input.value = string
        } else if (event.key == "=" || event.key == "Enter") {
            result = eval(string)
            string = '' + result
            input.value = string

        } else if (event.key == "Shift") {
            input.value = string

        } else {
            string = string.concat(event.key)
            input.value = string
            // console.log(string)
        }

    }
    else {
        // console.log(string)
        alert("invalid Key")
        input.value = string

    }


}

