angular.module('authServices', [])

.factory('Auth', function($http, AuthToken){
  authFactory = {};
  authFactory.login = function(loginData){
    return $http.post('/api/authenticate', loginData).then(function(data){
      AuthToken.setToken(data.data.token)
      return data
    })
  }
  authFactory.isLoggedIn = function() {
    if(AuthToken.getToken()) {
      if (AuthToken.getToken()) {
        return true
      } else {
        return false
      }
    }
  }
  return authFactory
})

.factory('AuthToken', function($window) {
  var authTokenFactory = {}
  //AuthToken.setToken(token)
  authTokenFactory.setToken = function(token) {
    $window.localStorage.setItem('token', token)
  }
  authTokenFactory.getToken = function() {
    return $window.localStorage.getItem('token')
  }
  return authTokenFactory
})
