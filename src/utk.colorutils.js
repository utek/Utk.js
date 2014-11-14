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

    return self;

}());
