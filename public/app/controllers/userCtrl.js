angular.module('userControllers', [])

.controller('regCtrl', function($http, $location, $timeout, User){
  var app = this;
  this.regUser = function(regData) {
    app.errorMsg = false
    app.loading = true
    app.successMsg = false

    User.create(app.regData).then(function(data) {
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
