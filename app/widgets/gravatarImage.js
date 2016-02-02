(function () {
    'use strict';
    angular
        .module('app.services')
        .directive('gravatarEmail', gravatarImage);
    gravatarImage.$inject = ['GravatarUrlBuilderService'];
    function gravatarImage(GravatarUrlBuilderService) {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/gravatarUrlImage.html',
            link: link
        };
        function link($scope, $element, $attrs) {
            $attrs.$observe('email', function (newValue) {
                $attrs.$set('src', GravatarUrlBuilderService.buildGravatarUrl(newValue));
            });
        }
        ;
        return directive;
    }
})();
