const assert = require('assert');
const index = require('../index');

describe('Balanced Brackets', function () {
    describe('inValidBrackets', function () {
        it('Shoud return YES when the brackets is balanced and NO if not', function () {
            assert.equal('YES', index.brackets(["{}[]()"]));            
        });
        
        it('Shoud return YES when the brackets is balanced and NO if not', function () {
            assert.equal('NO', index.brackets(["{[}]"]));            
        });
        
        it('Shoud return YES when the brackets is balanced and NO if not', function () {
            assert.equal('NO', index.brackets(["{[}]"]));            
        });

        it('Shoud return YES when the brackets is balanced and NO if not', function () {
            assert.equal('YES', index.brackets(["[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"]));            
        });

        it('Shoud return YES when the brackets is balanced and NO if not', function () {
            assert.equal('YES', index.brackets(["{}[]()"]));
        });
    });
});