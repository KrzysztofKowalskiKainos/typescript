describe('eventThumbnail', function(){
    var elem;
    beforeEach(module('app'));
    beforeEach(module('/templates/directives/thumbnail.html'));
    beforeEach(inject(function($compile, $rootScope){
        var scope = $rootScope.$new();
        scope.event = {
            name: 'Angular Expo',
            date: '1/1/2050',
            time: '10:30',
            location: {
                address: '1234 fake street',
                city: 'Waringstown',
                province: 'NY'
            },
            id: 1
        };
        elem = angular.element('<event-thumbnail event="event" />');
        $compile(elem)(scope);
        scope.$digest();
    }));
    it('Should bind the data', function(){
        expect(elem.text()).toContain('Angular Expo');
    });
});
