(function() {
  angular
    .module('app', [
      'ngCoolNoti'
    ])
    // .config(['ngCoolNotiProvider', function(ngCoolNotiProvider) {
    //   ngCoolNotiProvider.setDefaults({
    //     timeout: 1000
    //   })
    // }])
    .controller('AppCtrl', function($scope, ngCoolNoti) {
      $scope.showSuccessNoti = function() {
        ngCoolNoti.create({
          message: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
          position: 'bottom-left',
          animation: 'slide-in',
          type: 'success'
        });
      };

      $scope.showDangerNoti = function() {
        ngCoolNoti.create({
          message: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
          position: 'top-right',
          animation: 'jelly',
          type: 'danger'
        });
      };

      $scope.showWarningNoti = function() {
        ngCoolNoti.create({
          message: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
          position: 'bottom-right',
          animation: 'jelly',
          type: 'warning'
        });
      };

      $scope.showNoneCloseNoti = function() {
        ngCoolNoti.create({
          message: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
          showClose: false,
          position: 'bottom-right',
          type: 'warning'
        })
      };

      $scope.showAvatarNoti = function() {
        ngCoolNoti.create({
          message: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
          hasUserAvatar: true,
          avatar_url: './img/avatar.png'
        })
      };
    })
})();