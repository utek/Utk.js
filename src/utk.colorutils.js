var Utk = (function (self) {
    'use strict';
    return self;
}(Utk || {}));

Utk.ColorUtils = (function () {
    'use strict';
    var self = {};

    self._componentToHex = function (component) {
        component = Math.floor(component);
        var hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    self.hexToRgb = function (hex) {
        var shortRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shortRegex, function (m, red, green,
            blue) {
            return red + red + green + green + blue + blue;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            hex);
        return result ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        } : null;
    };

    self.rgbToHex = function (red, green, blue) {
        return '#' + self._componentToHex(red) + self._componentToHex(
                green) +
            self._componentToHex(blue);
    };

    self.randomColor = function (baseColor) {
        var red = Math.floor(Math.random() * 255 + 1);
        var green = Math.floor(Math.random() * 255 + 1);
        var blue = Math.floor(Math.random() * 255 + 1);

        if (baseColor) {
            var _baseColor = self.hexToRgb(baseColor);
            red = Math.floor((red + _baseColor.red) / 2);
            green = Math.floor((green + _baseColor.green) / 2);
            blue = Math.floor((blue + _baseColor.blue) / 2);
        }
        return self.rgbToHex(red, green, blue);
    };

    self.averageWith = function (color, base) {
        var _color = self.hexToRgb(color);
        var _base = self.hexToRgb(base);
        var red = Math.floor((_color.red + _base.red) / 2);
        var green = Math.floor((_color.green + _base.green) / 2);
        var blue = Math.floor((_color.blue + _base.blue) / 2);
        return self.rgbToHex(red, green, blue);
    };

    self.valueToColor = function (value, maxVal) {
        var a = value / maxVal;
        a = (a < 0) ? 0 : ((a > 1) ? 1 : a);
        var h0 = 0;
        var h1 = 120;
        var h = (h0) * (1 - a) + (h1) * (a);
        var h2 = h * 3 / 4;
        var k2r = Math.PI / 180;
        var r = (h <= 120) ? Math.sin((h2 + 90) * k2r) :
            ((h >= 240) ? Math.sin((h2 - 180) * k2r) : 0);
        var g = (h <= 240) ? Math.sin(h2 * k2r) : 0;
        var b = (h >= 120) ? Math.sin((h2 - 90) * k2r) : 0;
        var avg = (r + g + b) / 3;
        var red = ((r - avg) * 1) + avg;
        var green = ((g - avg) * 1) + avg;
        var blue = ((b - avg) * 1) + avg;
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return {
            red : Math.round(red),
            green : Math.round(green),
            blue : Math.round(blue)
        };
    };

    return self;
}());
