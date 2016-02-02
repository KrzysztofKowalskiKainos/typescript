module app.session {
    'use strict';

    export interface ISession {
        id: number;
        name: string;
        creatorName: string;
        duration: number;
        level: string;
        abstract: string;
        upVoteCount: number;
    }

    export interface ISessionController {

    }

    class SessionController implements ISessionController {

    }

    angular
        .module('app.session')
        .controller('SessionController', SessionController);
}
