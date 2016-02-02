((): void => {
    'use strict';

    angular.module('app.widgets').directive('eventThumbnail', eventThumbnail);


    function eventThumbnail(): ng.IDirective {

        var directive = <ng.IDirective> {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/eventThumbnail.html',
        };

        return directive;
    }

})();
