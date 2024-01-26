let args = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2]
};

let poster = (result) => {
    document.getElementById("system_response").innerHTML = "Result: " + result;
};

let runAddition = () => {
    let [num1, num2] = args()
    let result = num1 + num2;
    poster(result)
};

let runSubtraction = () => {
    let [num1, num2] = args()
    let result = num1 - num2;
    poster(result)
};

let runMultiplication = () => {
    let [num1, num2] = args()
    let result = num1 * num2;
    poster(result)
};

