var app;
(function (app) {
    var events;
    (function (events) {
        'use strict';
        var EventDetailController = (function () {
            function EventDetailController($routeParams, DataService, $window) {
                this.$routeParams = $routeParams;
                this.DataService = DataService;
                var vm = this;
                vm.id = this.$routeParams.id;
                vm.window = this.window;
                vm.sortOrder = 'name';
                DataService.getEvent(vm.id).then(function (response) {
                    vm.event = response.data;
                });
            }
            EventDetailController.prototype.upVoteSession = function (session) {
                session.upVoteCount++;
            };
            EventDetailController.prototype.downVoteSession = function (session) {
                session.upVoteCount--;
            };
            EventDetailController.prototype.reload = function () {
                window.location.reload();
            };
            EventDetailController.$inject = [
                '$routeParams',
                'DataService',
                '$window'
            ];
            return EventDetailController;
        }());
        angular.module('app.events').controller('EventDetailController', EventDetailController);
    })(events = app.events || (app.events = {}));
})(app || (app = {}));
