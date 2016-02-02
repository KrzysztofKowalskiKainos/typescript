'use-strict';

describe('durationFilter', function(){
    beforeEach(module("app"));
    it("It should return 'Half an hour' if 1 is passed in", inject(function(durationFilter){
        expect(durationFilter(1)).toBe('Half an hour');
    }));
    it("It should return 'Hour' if 2 is passed in", inject(function(durationFilter){
        expect(durationFilter(2)).toBe('Hour');
    }));
    it("It should return 'Half a day' if 3 is passed in", inject(function(durationFilter){
        expect(durationFilter(3)).toBe('Half a day');
    }));
    it("It should return 'Day' if 4 is passed in", inject(function(durationFilter){
        expect(durationFilter(4)).toBe('Day');
    }));
});
