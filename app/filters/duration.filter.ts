module app.filters {
    'use strict';

    function durationFilter(): any {
        return function(duration: number): string {
            switch(duration) {
                case 1:
                    return 'Half an hour';
                case 2:
                    return 'An hour';
                case 3:
                    return 'Half a day';
                case 4:
                    return 'A day';
            };
        };
    };

    angular
        .module('app.filters')
        .filter('durationFilter', durationFilter);

}
