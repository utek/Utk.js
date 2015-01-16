var Utk = (function (self) {
    'use strict';
    return self;
}(Utk || {}));

Utk.ArrayUtils = (function () {
    'use strict';
    var self = {};

    self.diffArray = function (arrayA, arrayB, fn) {
        var max = Math.max(arrayA.length, arrayB.length);
        var res = [];
        fn = typeof fn === 'function' ? fn : false;
        for (var i = 0; i < max; i++) {
            var valA = i < arrayA.length ? arrayA[i] : undefined;
            var valB = i < arrayB.length ? arrayB[i] : undefined;
            for (var j = 0; j < max; j++) {
                valA = valA === undefined || (j < arrayB.length && (fn ? fn(valA,
                    arrayB[j]) : valA === arrayB[j])) ? undefined : valA;
                valB = valB === undefined || (j < arrayA.length && (fn ? fn(valB,
                    arrayA[j]) : valB === arrayA[j])) ? undefined : valB;
                if (valA === undefined && valB === undefined) {
                    break;
                }
            }
            if (valA !== undefined) {
                res.push(valA);
            }
        }
        return res;
    };

    /**
     * removes element from array in place
     * @param  {Array} array   Array to remove element from
     * @param  {object} element element to remove from array
     */
    self.removeElement = function (array, element) {
        var index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    return self;
}());
