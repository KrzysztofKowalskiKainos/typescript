var app;
(function (app) {
    var session;
    (function (session) {
        'use strict';
        var SessionController = (function () {
            function SessionController() {
            }
            return SessionController;
        }());
        angular
            .module('app.session')
            .controller('SessionController', SessionController);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
