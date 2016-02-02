var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var GravatarUrlBuilderService = (function () {
            function GravatarUrlBuilderService(Md5EncodeService) {
                this.Md5EncodeService = Md5EncodeService;
            }
            GravatarUrlBuilderService.prototype.buildGravatarUrl = function (email) {
                this.gravatarUrl = 'http://www.gravatar.com/avatar/';
                this.defaultGravatarUrl = 'http://www.gravatar.com/avatar/000?s=200';
                this.fileExt = '.jpg?s=200&r=g';
                return this.gravatarUrl + this.Md5EncodeService.generateMD5(email) + this.fileExt;
            };
            GravatarUrlBuilderService.$inject = [
                'Md5EncodeService'
            ];
            return GravatarUrlBuilderService;
        }());
        angular
            .module('app.services')
            .service('GravatarUrlBuilderService', GravatarUrlBuilderService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
