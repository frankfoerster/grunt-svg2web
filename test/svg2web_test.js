'use strict';

var fs = require('fs');
var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svg2web = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  createTTF: function(test) {
    test.expect(1);

    var actual = 'tmp/svg2web.ttf';
    test.ok(fs.existsSync(actual), 'should convert svg to ttf.');

    test.done();
  }
};
