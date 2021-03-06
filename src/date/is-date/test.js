import { expect } from 'chai';
import isDate from '.';

describe('date/isDate()', () => {
    it('Return true if value is a date', () => {
        expect(isDate(new Date())).to.equal(true);
        expect(isDate(new Date('Date'))).to.equal(true);
        expect(isDate(new Date(2014, 11, 1))).to.equal(true);
    });

    it('Return false if value is not a date', () => {
        expect(isDate(arguments)).to.equal(false);
        expect(isDate(void 0)).to.equal(false);
        expect(isDate(true)).to.equal(false);
        expect(isDate(null)).to.equal(false);
        expect(isDate(NaN)).to.equal(false);
        expect(isDate(42)).to.equal(false);
        expect(isDate('')).to.equal(false);
        expect(isDate([])).to.equal(false);
        expect(isDate({})).to.equal(false);
        expect(isDate(/\s+/ig)).to.equal(false);
    });
});
