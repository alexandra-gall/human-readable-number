module.exports = function toReadable(number) {
    const digits = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
        [100, "hundred"]
    ]);
    if (number < 20) {
        return digits.get(number);
    } else if (number < 100 && !(number % 10)) {
        return digits.get(number);
    } else if (number < 100) {
        return number % 10 ?
        `${digits.get(parseInt(number / 10) * 10)} ${digits.get(number % 10)}` :
        digits.get(number / 10);
    } else {
        return number % 100 ?
        `${digits.get(parseInt(number / 100))} ${digits.get(100)} ${toReadable(number % 100)}` :
        `${digits.get(parseInt(number / 100))} ${digits.get(100)}`;
    }
};
