module app.services {
    'use strict';

    export interface IGravatarUrlBuilderService {
        gravatarUrl: string;
        defaultGravatarUrl: string;
        fileExt: string;
        buildGravatarUrl(email: string): string;
    }

    class GravatarUrlBuilderService implements IGravatarUrlBuilderService {
        gravatarUrl: string;
        defaultGravatarUrl: string;
        fileExt: string;
        static $inject = [
            'Md5EncodeService'
        ];
        constructor(private Md5EncodeService: app.blocks.IMd5EncodeService) {

        }

        buildGravatarUrl(email: string): string {
            this.gravatarUrl = 'http://www.gravatar.com/avatar/';
            this.defaultGravatarUrl = 'http://www.gravatar.com/avatar/000?s=200';
            this.fileExt = '.jpg?s=200&r=g';
            return this.gravatarUrl + this.Md5EncodeService.generateMD5(email) + this.fileExt;
        }
    }

    angular
        .module('app.services')
        .service('GravatarUrlBuilderService', GravatarUrlBuilderService);
}
