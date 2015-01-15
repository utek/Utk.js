'use strict';
var jsdom = require('jsdom');

describe('Arrays utils', function () {
    var Utk;
    beforeEach(function (done) {
        jsdom.env({
            html: '<html><body></body></html>',
            scripts: ['../src/utk.arrayutils.js'],
            done: function (err, window) {
                if (err) {
                    console.log(err);
                }
                Utk = window.Utk;
                done();
            }
        });
    });
    it('removes value from array', function () {
        var srcArray = [0, 1, 'a', 3, 4, 'c', 6, 7, 8];
        var resArray = [0, 'a', 3, 4, 6, 7, 8];
        Utk.ArrayUtils.removeElement(srcArray, 1);
        Utk.ArrayUtils.removeElement(srcArray, 'c');
        expect(srcArray).toEqual(resArray);
    });

    it('combine arrays leaving unique elements', function () {
        var a = [1, 2, 3, 4, 5, 6];
        var b = [3, 4, 5, 6, 7, 8, 9, 0, 'a'];
        var want = [1, 2, 7, 8, 9, 0, 'a'];
        var res = Utk.ArrayUtils.diffArray(a, b);
        expect(want).toEqual(res);
    });
});
