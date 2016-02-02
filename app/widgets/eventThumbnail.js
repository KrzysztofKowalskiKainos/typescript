(function () {
    'use strict';
    angular.module('app.widgets').directive('eventThumbnail', eventThumbnail);
    function eventThumbnail() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/eventThumbnail.html',
        };
        return directive;
    }
})();
