'use strict';
var jsdom = require('jsdom');

describe('Colors utils', function () {
    var Utk;
    beforeEach(function (done) {
        jsdom.env({
            html: '<html><body></body></html>',
            scripts: ['../src/utk.colorutils.js'],
            done: function (err, window) {
                if (err) {
                    console.log(err);
                }
                Utk = window.Utk;
                done();
            }
        });

    });
    it('valueToColor for low value returns high red', function () {
        var val = Utk.ColorUtils.valueToColor(0, 100);
        expect(val.red).toEqual(255);
        expect(val.green).toEqual(0);
        expect(val.blue).toEqual(0);
    });
    it('valueToColor for high value returns high greem', function () {
        var val = Utk.ColorUtils.valueToColor(100, 100);
        expect(val.red).toEqual(0);
        expect(val.green).toEqual(255);
        expect(val.blue).toEqual(0);
    });
    it('hexToRgb returns proprer color', function () {
        var val = Utk.ColorUtils.hexToRgb('#0f0');
        expect(val.red).toEqual(0);
        expect(val.green).toEqual(255);
        expect(val.blue).toEqual(0);
        val = Utk.ColorUtils.hexToRgb('#00ff00');
        expect(val.red).toEqual(0);
        expect(val.green).toEqual(255);
        expect(val.blue).toEqual(0);
    });
    it('averageWith returns average color for red (#f00) and white (#fff)',
        function () {
            var val = Utk.ColorUtils.averageWith('#f00', '#fff');
            expect(val).toEqual('#ff7f7f');
        });
});
