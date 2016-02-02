(function () {
    'use strict';
    angular.module('app.widgets').directive('votingWidget', votingWidget);
    function votingWidget() {
        var directive = {
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
