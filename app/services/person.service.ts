module app.services {
    'use strict';

    export interface IPersonService {
        savePerson(person: app.profile.IPerson): ng.IHttpPromise<app.profile.IPerson>;
    }

    class PersonService implements IPersonService {
        static $inject = [
            '$http',
            'CountEvents'
        ];
        constructor(private $http: ng.IHttpService, private CountEvents: app.blocks.ICountEvents) {

        }

        savePerson(person: app.profile.IPerson): ng.IHttpPromise<app.profile.IPerson> {
            person.id = this.CountEvents.countPeople();
            return this.$http.post('/data/person/:', person);
        }
    }

    angular.module('app.services').service('PersonService', PersonService);

}
