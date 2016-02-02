var app;
(function (app) {
    var profile;
    (function (profile) {
        'use strict';
        var ProfileController = (function () {
            function ProfileController(PersonService, GravatarUrlBuilderService) {
                this.PersonService = PersonService;
                this.GravatarUrlBuilderService = GravatarUrlBuilderService;
                var vm = this;
                vm.inital = {};
            }
            ProfileController.prototype.savePerson = function (person) {
                this.PersonService.savePerson(person).then(function (response) {
                    console.log('Person saved');
                });
            };
            ProfileController.prototype.getGravatarUrl = function (email) {
                return this.GravatarUrlBuilderService.buildGravatarUrl(email);
            };
            ProfileController.prototype.cancel = function () {
                window.location.href = '/profile';
            };
            ProfileController.$inject = [
                'PersonService',
                'GravatarUrlBuilderService'
            ];
            return ProfileController;
        }());
        angular
            .module('app.profile')
            .controller('ProfileController', ProfileController);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
