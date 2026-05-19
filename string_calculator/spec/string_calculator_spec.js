describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

    // TC_1
	it('[ 1, 2, 3, 4, 5 ] should return 6', function() {
		expect(calculator.add([1, 2, 3, 4, 5])).toEqual(6);
	});
});
