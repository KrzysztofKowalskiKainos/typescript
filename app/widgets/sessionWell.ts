(function(){
    'use strict';

    angular.module('app.widgets').directive('sessionWell', sessionWell);

    function sessionWell(): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict :'E',
            replace: true,
            templateUrl: 'widgets/templates/sessionWell.html'
        };
        return directive;
    }

})();
