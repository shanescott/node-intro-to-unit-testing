
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return fizz-buzz for nums divisible by both 5 and 3. nums divisible by only 5 should return buzz, and nums only divisible by 3 should return fizz', function() {

        const normalCases = [
            {input: 15, expected: 'fizz-buzz'},
            {input: 5, expected: 'buzz'},
            {input: 3, expected: 'fizz'}
        ];

        normalCases.forEach(function(item) {
            const answer = fizzBuzzer(item.input);
            expect(answer).to.be.equal(item.expected);
        });
    });

    it('should raise error if args are not numbers', function() {
        const badInputs = [
            ['a'],
            ['false'],
        ];
        badInputs.forEach(function(item) {
            expect(function() {
                fizzBuzzer(item[0]);
            }).to.throw(Error);
            });
        });
    });