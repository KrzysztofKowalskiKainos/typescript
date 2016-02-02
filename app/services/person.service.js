var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var PersonService = (function () {
            function PersonService($http, CountEvents) {
                this.$http = $http;
                this.CountEvents = CountEvents;
            }
            PersonService.prototype.savePerson = function (person) {
                person.id = this.CountEvents.countPeople();
                return this.$http.post('/data/person/:', person);
            };
            PersonService.$inject = [
                '$http',
                'CountEvents'
            ];
            return PersonService;
        }());
        angular.module('app.services').service('PersonService', PersonService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
