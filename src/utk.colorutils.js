var Utk = (function (self) {
    return self;
}(Utk || {}));

Utk.ColorUtils = (function () {
    var self = {};

    self._componentToHex = function (component) {
        component = Math.floor(component);
        var hex = component.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
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
        return "#" + self._componentToHex(red) + self._componentToHex(
                green) +
            self._componentToHex(blue);
    };

    self.randomColor = function (baseColor) {
        var red = Math.floor(Math.random() * 255 + 1);
        var green = Math.floor(Math.random() * 255 + 1);
        var blue = Math.floor(Math.random() * 255 + 1);

        if (baseColor) {
            _baseColor = self.hexToRgb(baseColor);
            red = Math.floor((red + _baseColor.red) / 2);
            green = Math.floor((green + _baseColor.green) / 2);
            blue = Math.floor((blue + _baseColor.blue) / 2);
        }
        return self.rgbToHex(red, green, blue);
    };

    self.averageWith = function (color, base) {
        _color = self.hexToRgb(color);
        _base = self.hexToRgb(base);
        var red = Math.floor((_color.red + _base.red) / 2);
        var green = Math.floor((_color.green + _base.green) / 2);
        var blue = Math.floor((_color.blue + _base.blue) / 2);
        return self.rgbToHex(red, green, blue);
    };

    self.valueToColor = function (value) {
        var a = value / 100;
        a = (a < 0) ? 0 : ((a > 1) ? 1 : a);
        var h0 = 120;
        var h1 = 0;
        var h = (h0) * (1 - a) + (h1) * (a);
        console.log(h);

        var r = Math.sin(((120-h)*90/120) * Math.PI/ 180) * 1;
        var g = Math.sin((h*90/120)* Math.PI/ 180) * 1;
        var b = 0;// Math.sin(h + 240) * 1;
        console.log(r, g, b);
        var avg = (r + g + b) / 3;
        red = ((r - avg) * 1) + avg;
        green = ((g - avg) * 1) + avg;
        blue = ((b - avg) * 1) + avg;
        return {
            red: red * 255,
            green: green * 255,
            blue: blue * 255
        };
    };

    return self;
}());
