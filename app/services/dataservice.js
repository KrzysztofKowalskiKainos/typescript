var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataService = (function () {
            function DataService($http, ConvertType) {
                this.$http = $http;
                this.ConvertType = ConvertType;
            }
            DataService.prototype.getEvent = function (eventID) {
                return this.$http.get('/data/event/' + eventID);
            };
            DataService.prototype.getAllEvents = function () {
                return this.$http.get('/data/event/');
            };
            DataService.prototype.saveEvent = function (event) {
                return this.$http.post('/data/event/' + event.id, event);
            };
            DataService.prototype.saveSession = function (event, sessions) {
                var sessionArray = [];
                for (var i = 0; i < sessions.length; i++) {
                    sessionArray.push(sessions[i]);
                }
                ;
                return this.saveEvent(event);
            };
            DataService.$inject = [
                '$http',
                'ConvertType'
            ];
            return DataService;
        }());
        services.DataService = DataService;
        angular
            .module('app.services')
            .service('DataService', DataService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
