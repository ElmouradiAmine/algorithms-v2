const getMoneyCount = require('./getMoneyCount');
const assert = require('assert');

describe('testing getMoneyCount function', () => {
    it('should return -1 if the amount is negative', () => {
        const moneyList = [500, 200, 100, 50];
        const amount = -1;
        const expectedResult = -1;

        assert.strictEqual(getMoneyCount(moneyList, amount), expectedResult);
    });


    it('should return -1 if the money list is empty', () => {
        const moneyList = [];
        const amount = 626.5;
        const expectedResult = -1;

        assert.strictEqual(getMoneyCount(moneyList, amount), expectedResult);
    });

    it('test 2', () => {
        const moneyList = [500, 200, 100, 50, 20, 10, 5];
        const amount = 626.5;
        const expectedResult = -1;
        
        assert.strictEqual(getMoneyCount(moneyList, amount), expectedResult);
    });

    it('test 3', () => {
        const moneyList = [500, 200, 100, 50, 20, 10, 5];
        const amount = 625;
        const expectedResult = 4;
        
        assert.strictEqual(getMoneyCount(moneyList, amount), expectedResult);
    });

});
