function convert() {
    var numericInput = document.getElementById("numericInput").value;

    if (isNaN(numericInput)) {
        alert("Please enter a valid numeric value!");
        return;
    }

    var wordOutput = document.getElementById("wordOutput");
    wordOutput.textContent = numberToWords(numericInput);
}

function numberToWords(number) {
    var units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (number === 0) return "Zero";

    if (number < 0) {
        return "Minus " + numberToWords(-number);
    }

    var words = "";

    if (Math.floor(number / 1000000) > 0) {
        words += numberToWords(Math.floor(number / 1000000)) + " Million ";
        number %= 1000000;
    }

    if (Math.floor(number / 1000) > 0) {
        words += numberToWords(Math.floor(number / 1000)) + " Thousand ";
        number %= 1000;
    }

    if (Math.floor(number / 100) > 0) {
        words += numberToWords(Math.floor(number / 100)) + " Hundred ";
        number %= 100;
    }

    if (number > 0) {
        if (words !== "") words += "and ";

        if (number < 10) {
            words += units[number];
        } else if (number < 20) {
            words += teens[number - 10];
        } else {
            words += tens[Math.floor(number / 10)];
            if (number % 10 > 0) {
                words += " " + units[number % 10];
            }
        }
    }

    return words.trim();
}