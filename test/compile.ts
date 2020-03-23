import { describe, it } from 'mocha';
import { expect } from 'chai';

import { calculate } from '../src/compile';

describe('calculate', function() {
    it('simple', function() {
        const expr = '1+2-3+4-5+6+7+89';
        expect(calculate(expr)).equal(eval(expr));
    });

    it('priority', function() {
        const expr = '1+2*3+(4-5)*6-7+89-4*(11-8)/3';
        expect(calculate(expr)).equal(eval(expr));
    });

    it('negative', function() {
        const expr = '1+2-(-3)+4*5/(-2)';
        expect(calculate(expr)).equal(eval(expr));
    });
});
