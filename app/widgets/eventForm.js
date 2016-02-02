(function () {
    'use strict';
    angular
        .module('app.widgets')
        .directive('eventForm', eventForm);
    function eventForm() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/EventForm.html',
        };
        return directive;
    }
})();
