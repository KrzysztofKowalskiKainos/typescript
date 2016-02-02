(function(){
    'use strict';

    angular
        .module('app.widgets')
        .directive('eventForm', eventForm);
    function eventForm(): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/EventForm.html',
        };
        
        return directive;
    }

})();
