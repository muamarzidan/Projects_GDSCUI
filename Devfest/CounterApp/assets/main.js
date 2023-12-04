function updateCounter(value) {
    var number = document.getElementById("number-counter");
    number.innerHTML = parseInt(number.innerHTML) + value;
}

function plusNumber() {
    updateCounter(1);
}

function minusNumber() {
    updateCounter(-1);
}

function reset() {
    var number = document.getElementById("number-counter");
    number.innerHTML = "0";
}