'use-strict';

describe('EventDataService', function(){
    beforeEach(module("app"));
    it('Should issue a GET request to /data/event/1', inject(function(eventData, $httpBackend){
        $httpBackend.expectGET('/data/event/1');
        $httpBackend.when('GET', '/data/event/1').respond({});
        eventData.getEvent(1);
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));
    it('Should return data with get request', inject(function(eventData, $httpBackend){
        $httpBackend.when('GET', '/data/event/1').respond({name: 'James Nelson'});
        var event = eventData.getEvent(1);
        $httpBackend.flush();
        expect(event.name).toBe('James Nelson');
    }));
    it('Should set the id to 999 when save is called', inject(function(eventData, $httpBackend){
        $httpBackend.when('POST', '/data/event/999').respond({});
        var event = {name: 'James Nelson'};
        eventData.saveEvent(event);
        $httpBackend.flush();
        expect(event.id).toBe(999);
    }));
    it('Should issue a GET request to /data/event/', inject(function(eventData, $httpBackend){
        $httpBackend.when('GET', '/data/event').respond([{name: 'James Nelson'}]);
        var event = eventData.getAllEvents();
        $httpBackend.flush();
        expect(event[0].name).toBe('James Nelson');
    }));
});
