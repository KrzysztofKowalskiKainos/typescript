module app.events {
    'use strict';

    interface IEventDetailController {
        id: number;
        event?: app.events.IEvent;
        sortOrder: string;
        upVoteSession(session: app.session.ISession): void;
        downVoteSession(session: app.session.ISession): void;
        reload(): void;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class EventDetailController implements IEventDetailController {
        id: number;
        sortOrder: string;
        event: app.events.IEvent;
        window: ng.IWindowService;

        static $inject = [
            '$routeParams',
            'DataService',
            '$window'
        ];

        constructor(private $routeParams: IRouteParams, private DataService: app.services.IDataService, $window: ng.IWindowService) {
            var vm = this;
            vm.id = this.$routeParams.id;
            vm.window = this.window;
            vm.sortOrder = 'name';
            DataService.getEvent(vm.id).then((response: any) => {
                vm.event = response.data;
            });
        }

        upVoteSession(session: app.session.ISession): void {
            session.upVoteCount++;
        }

        downVoteSession(session: app.session.ISession): void {
            session.upVoteCount--;
        }

        reload(): void {
            window.location.reload();
        }

    }

    angular.module('app.events').controller('EventDetailController', EventDetailController);
}
