module app.services {
    'use strict';

    export interface IDataService {
        eventID?: number;
        getEvent(eventID: number): ng.IHttpPromise<app.events.IEvent>;
        getAllEvents(): ng.IHttpPromise<app.events.IEvent[]>;
        saveEvent(event: app.events.IEvent): ng.IHttpPromise<app.events.IEvent>;
        saveSession(event: app.events.IEvent, sessions?: app.session.ISession[]): ng.IHttpPromise<app.events.IEvent>;
    }

    interface ICallBackArgs extends ng.IHttpPromiseCallbackArg<ICallBackArgs> {

    }

    export class DataService implements IDataService {
        eventID: number;
        static $inject = [
            '$http',
            'ConvertType'
        ];
        constructor(private $http: ng.IHttpService, private ConvertType: app.blocks.IConvertType) {

        }

        getEvent(eventID: number): ng.IHttpPromise<app.events.IEvent> {
            return this.$http.get('/data/event/' + eventID);
        }

        getAllEvents(): ng.IHttpPromise<app.events.IEvent[]> {
            return this.$http.get('/data/event/');
        }

        saveEvent(event: app.events.IEvent): ng.IHttpPromise<app.events.IEvent> {
            return this.$http.post('/data/event/' + event.id, event);
        }

        saveSession(event: app.events.IEvent, sessions?: app.session.ISession[]): ng.IHttpPromise<app.events.IEvent> {
            var sessionArray: app.session.ISession[] = [];
            for(var i = 0; i < sessions.length; i++) {
                sessionArray.push(sessions[i]);
            };
            return this.saveEvent(event);
        }
    }

    angular
        .module('app.services')
        .service('DataService', DataService);
}
