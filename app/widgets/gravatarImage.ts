((): void => {
    'use strict';

    angular
        .module('app.services')
        .directive('gravatarEmail', gravatarImage);

    gravatarImage.$inject = ['GravatarUrlBuilderService'];
    function gravatarImage(GravatarUrlBuilderService: app.services.IGravatarUrlBuilderService): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'E',
            replace: true,
            templateUrl: '/widgets/templates/gravatarUrlImage.html',
            link: link
        };

        function link($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes ) {
            $attrs.$observe('email', (newValue: string): void => {
                $attrs.$set('src', GravatarUrlBuilderService.buildGravatarUrl(newValue));
            });
        };

        return directive;
    }

})();
