module app.events {
    'use strict';

    export interface IEvent extends ng.resource.IResource<IEvent> {
        name: string;
        id: number;
        time: string;
        location: ILocation[];
        imageUrl: string;
        session: app.session.ISession[];
    }

    export interface ILocation {
        address: string;
        city: string;
        province: string;
    }

    interface IEventController {
        events?: IEvent[];
        eventMaxId?: number;
        title: string;
        eventAdded: boolean;
        addSession(): void;
        removeSession(id: number): void;
    }

    class EventController implements IEventController {
        title: string;
        static $inject = [
            'DataService',
            'ConvertType'
        ];
        events: IEvent[];
        eventAdded: boolean;
        sessions: app.session.ISession[];
        sessionId: number;
        eventMaxId: number;
        constructor(private DataService: app.services.DataService, private ConvertType: app.blocks.IConvertType) {
            var vm = this;
            vm.title = 'Events';
            vm.eventAdded = false;
            vm.sessions = [];
            vm.sessionId = 0;
            vm.eventMaxId = 0;
            DataService.getAllEvents().then((response: any) => {
                for(var i = 0; i < response.data.length; i++) {
                    vm.eventMaxId++;
                }

                vm.events = response.data;
            });
        }

        addSession(): void {
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

        removeSession(id: number): void {
            console.log(id);
            this.sessions = this.sessions.splice(id, 0);
            this.sessionId--;
        }

        saveEvent(event: app.events.IEvent, sessions?: app.session.ISession[]): void {
            event.id = this.eventMaxId++;
            this.DataService.saveSession(event, sessions).then((response: any) => {
                console.log('Should be saved');
            });
        }

    }

    angular
        .module('app.events')
        .controller('EventController', EventController);
}
