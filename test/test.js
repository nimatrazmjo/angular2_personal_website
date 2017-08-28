'use strict';

var assert = require('assert');

describe('Array', function() {
    describe("#indexOf()", function() {
        it('Should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it('shoud return return true if my name is Nimatullah', function() {
            assert.equal('Nimatullah', 'Nimatullah');
        });

        it('Should return total length of array to 5', function() {
            assert.equal(5, [1, 2, 3, 4, 5].length);
        });
    });
});