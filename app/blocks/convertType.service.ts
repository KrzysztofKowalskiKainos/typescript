module app.blocks {
    'use strict';

    export interface IConvertType {
        convertToInt(context: string): number;
    }

    class ConvertType implements IConvertType {
        constructor() {

        }

        convertToInt(context: string): number {
            return parseInt(context, 0);
        }
    }

    angular
        .module('app.blocks')
        .service('ConvertType', ConvertType);
}
