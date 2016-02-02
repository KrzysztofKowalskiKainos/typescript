(function () {
    'use strict';
    angular.module('app.widgets').directive('sessionWell', sessionWell);
    function sessionWell() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'widgets/templates/sessionWell.html'
        };
        return directive;
    }
})();
