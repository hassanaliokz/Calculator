let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll("button"));
let output = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        text = e.target.innerHTML;
        console.log(text, "button was pressed");
        if (text == "=") {
            output = eval(output);
            display.value = output;
        } else if (text == "AC") {
            output = ""
            display.value = "";
        } else if (text == "DEL") {
            output = output.slice(0, -1);
            display.value = output;
        } else {
            output += text;
            display.value = output;
        }
    })
})
document.addEventListener("keydown", (e) => {
    let key = e.key;
    if (/[0-9+\-*/%.=]|Enter|Backspace/.test(key)) {
        e.preventDefault(); // Prevent default action for these keys
        if (key === "Enter") {
            output = eval(output);
            display.value = output;
        } else if (key === "Backspace") {
            output = output.slice(0, -1);
            display.value = output;
        } else {
            output += key;
            display.value = output;
        }
    }
    console.log(key);
});