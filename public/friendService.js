angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      return $http.post('/api/login', user).then((response) => {
        return response;
      })
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http.get('/api/profiles').then((response) => {
        return response;
      })
    };

});
