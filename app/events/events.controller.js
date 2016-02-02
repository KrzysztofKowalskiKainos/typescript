var app;
(function (app) {
    var events;
    (function (events) {
        'use strict';
        var EventController = (function () {
            function EventController(DataService, ConvertType) {
                this.DataService = DataService;
                this.ConvertType = ConvertType;
                var vm = this;
                vm.title = 'Events';
                vm.eventAdded = false;
                vm.sessions = [];
                vm.sessionId = 0;
                vm.eventMaxId = 0;
                DataService.getAllEvents().then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        vm.eventMaxId++;
                    }
                    vm.events = response.data;
                });
            }
            EventController.prototype.addSession = function () {
                this.eventAdded = true;
                this.sessionId++;
                this.sessions.push({
                    id: this.sessionId,
                    name: '',
                    creatorName: '',
                    duration: 0,
                    level: 'beginnner',
                    abstract: '',
                    upVoteCount: 0
                });
            };
            ;
            EventController.prototype.removeSession = function (id) {
                console.log(id);
                this.sessions = this.sessions.splice(id, 0);
                this.sessionId--;
            };
            EventController.prototype.saveEvent = function (event, sessions) {
                event.id = this.eventMaxId++;
                this.DataService.saveSession(event, sessions).then(function (response) {
                    console.log('Should be saved');
                });
            };
            EventController.$inject = [
                'DataService',
                'ConvertType'
            ];
            return EventController;
        }());
        angular
            .module('app.events')
            .controller('EventController', EventController);
    })(events = app.events || (app.events = {}));
})(app || (app = {}));
