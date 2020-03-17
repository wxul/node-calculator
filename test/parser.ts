import { describe, it } from 'mocha';
import { expect } from 'chai';

import tokenizer from '../src/tokenizer';
import parser from '../src/parser';

describe('parser', function() {
    it.skip('simple expression', function() {
        const simple = tokenizer('1+2-3+4');
        const parsed = parser(simple);
        expect(JSON.stringify(parsed)).equal('太麻烦了懒得对比了');
    });
});
