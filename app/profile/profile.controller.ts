module app.profile {
    'use strict';

    export interface IPerson {
        username?: string;
        password?: string;
        name?: string;
        emailAddress?: string;
        bio?: string;
        id?: number;
    }

    export interface IProfileController {
        user: IPerson;
        savePerson(person: IPerson): void;
        getGravatarUrl(email: string): string;
        cancel(): void;
    }

    class ProfileController implements IProfileController {
        user: IPerson;
        inital: IPerson;
        static $inject = [
            'PersonService',
            'GravatarUrlBuilderService'
        ];
        constructor(private PersonService: app.services.IPersonService,
                    private GravatarUrlBuilderService: app.services.IGravatarUrlBuilderService) {
            var vm = this;
            vm.inital = {};
        }

        savePerson(person: IPerson): void {
            this.PersonService.savePerson(person).then((response: any) => {
                console.log('Person saved');
            });
        }

        getGravatarUrl(email: string): string {
            return this.GravatarUrlBuilderService.buildGravatarUrl(email);
        }

        cancel(): void {
            window.location.href = '/profile';
        }

    }

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);
}
