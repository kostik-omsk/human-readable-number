module.exports = function toReadable(number) {
    let numStr = number.toString();
    let result = "";
    let arrNum = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    if (number <= 20) {
        result = arrNum[number];
        return result;
    }
    if (number > 20 && number <= 99) {
        if (number == 40) return (result = "forty");
        if (number % 10 == 0) {
            result = arrNum[number / 10 + 10].slice(0, -4);
            return result + "ty";
        } else {
            result = toReadable(numStr[0] + 0) + " " + toReadable(numStr[1]);
            return result;
        }
    }
    if (number > 99) {
        let hundredths = Math.floor(number / 100) * 100;
        let tenths = number - hundredths;
        result = toReadable(hundredths / 100) + " hundred";
        if (number % 100 !== 0) {
            result += " " + toReadable(tenths);
        }
        return result;
    }
};
