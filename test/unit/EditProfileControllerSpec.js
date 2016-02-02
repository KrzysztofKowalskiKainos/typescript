'use-strict';

describe('EditProfileController', function(){
    var $controllerConstructor,
        scope,
        mockGravatarUrlBuilder;

    beforeEach(module("app"));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function(){}});
    }));

    it('should build a gravatar with a given email address', function() {
        $controllerConstructor('EditProfileController', {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});
        var email = "foo@gmail.com";
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    });
});
