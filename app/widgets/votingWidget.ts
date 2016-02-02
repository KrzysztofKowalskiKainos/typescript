((): void => {
    'use strict';

    angular.module('app.widgets').directive('votingWidget', votingWidget);

    function votingWidget(): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'E',
            replace: false,
            templateUrl: '/widgets/templates/votingWidget.html',
            scope: {
                upvote: '&',
                downvote: '&',
                count: '@'
            }
        };

        return directive;
    }

})();
