describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

    // TC_1
	it('[ 1, 2, 3, 4, 5 ] should return 6', function() {
		expect(calculator.add([1, 2, 3, 4, 5])).toEqual(6);
	});

	// TC_2
	it('[ 2, 2, 3, 3 ] should return 4', function() {
		expect(calculator.add([2, 2, 3, 3])).toEqual(4);
	});

    // TC_3
	it('[ 6, 6, 4, 4, 1, 3 ] should return 2', function() {
		expect(calculator.add([ 6, 6, 4, 4, 1, 3 ])).toEqual(2);
	});

	// TC_4
	it('[ 3, 5, 3, 5, 4, 2 ] should return 12', function() {
		expect(calculator.add([ 3, 5, 3, 5, 4, 2 ])).toEqual(12);
	});
	
    // TC_5
	it('[ 5, 4, 1, 3, 6 ] should return 6', function() {
		expect(calculator.add([ 5, 4, 1, 3, 6 ])).toEqual(6);
	});
});
