import { describe, it } from 'mocha';
import { expect } from 'chai';

import tokenizer from '../src/tokenizer';

describe('tokenizer', function() {
    it('simple expression', function() {
        const simple = '1+2-3+4';
        const result = tokenizer(simple).map(t => t.value);

        expect(JSON.stringify(result)).equal(JSON.stringify(['1', '+', '2', '-', '3', '+', '4']));
    });

    it('priority expression', function() {
        const simple = '1+2*3-(4+5)*6/7+8';
        const result = tokenizer(simple).map(t => t.value);

        expect(JSON.stringify(result)).equal(JSON.stringify(['1', '+', '2', '*', '3', '-', '(', '4', '+', '5', ')', '*', '6', '/', '7', '+', '8']));
    });

    it('invalid number', function() {
        const simple = '1+2.3.3';
        const fn = function() {
            tokenizer(simple);
        };
        expect(fn).throw('[InvalidNumber]: 2.3.3 at: [2]');
    });

    it('unrecognized character', function() {
        const simple = '1+x+y';
        const fn = function() {
            tokenizer(simple);
        };
        expect(fn).throw('[UnrecognizedCharacter]: x at: [2]');
    });
});
