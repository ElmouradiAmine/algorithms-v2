const getLonguestZeroSequenceLength = require('./getLonguestZeroSequenceLength');
const assert = require('assert');

describe('testing getLonguestZeroSequenceLength function', () => {
    it('should return 2 for 20', () => {
        const number = 20;
        const expectedResult = 2;

        assert.strictEqual(getLonguestZeroSequenceLength(number), expectedResult);
    });

    it('should return 6 for 123456', () => {
        const number = 123456;
        const expectedResult = 6;

        assert.strictEqual(getLonguestZeroSequenceLength(number), expectedResult);
    });

    it('should return 0 for 65535', () => {
        const number = 65535;
        const expectedResult = 0;

        assert.strictEqual(getLonguestZeroSequenceLength(number), expectedResult);
    });

});
