// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let sum = 0;
    for (let i = 0; i < string_numbers.length; i++) {
        if (string_numbers[i] == 3) {
            sum += 2;
        } else if (string_numbers[i] == 5) {
            sum += 4;
        }
    }
    return sum;
};
