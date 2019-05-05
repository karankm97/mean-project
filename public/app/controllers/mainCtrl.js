angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location){
  var app = this;

  if (Auth.isLoggedIn()) {
    console.log('Suc')
  } else {
    console.log('Fail')
  }
  this.doLogin = function(loginData) {
    app.errorMsg = false
    app.loading = true
    app.successMsg = false

    Auth.login(app.loginData).then(function(data) {
      if (data.data.success){
        app.loading = false
        app.successMsg = data.data.message + '....Redirecting'
        $timeout(function() {
          $location.path('/home')
        }, 2000)
      } else {
        app.loading = false
        app.errorMsg = data.data.message
      }
    })
  }
})
