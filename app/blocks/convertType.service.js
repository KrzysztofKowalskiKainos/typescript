var app;
(function (app) {
    var blocks;
    (function (blocks) {
        'use strict';
        var ConvertType = (function () {
            function ConvertType() {
            }
            ConvertType.prototype.convertToInt = function (context) {
                return parseInt(context, 0);
            };
            return ConvertType;
        }());
        angular
            .module('app.blocks')
            .service('ConvertType', ConvertType);
    })(blocks = app.blocks || (app.blocks = {}));
})(app || (app = {}));
