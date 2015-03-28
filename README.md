### Cool notification angular module

**********

#### how to use?

1. include src/ng-cool-noti.js and src/ng-cool-noti.css in your html file

2. add 'ngCoolNoti' in your js file like `angular.module('app', ['ngCoolNoti'])`

3. now your can in your controller to create a notification


#### some config
** look some dummy code below :) **

    (function() {
      angular
        .module('app', [
          'ngCoolNoti'
        ])
        .config(['ngCoolNotiProvider', function(ngCoolNotiProvider) {
          ngCoolNotiProvider.setDefaults({ //set the config option in provider, if not we have default option
            container: 'body', // notifiation container
            position: 'top-right', // display position
            animation: 'jelly', //animation
            timeout: 5000, //display duration
            showClose: true, // if show the close button
            hasUserAvatar: false, // if has a image in the notification
            avatar_url: '', // if hasUserAvatar setted true, this need to set
            type: 'success', // type of notification
            message: 'Is this pretty awesome? Love ya all :)' //notification message to display
          })
        }])
        .controller('AppCtrl', function($scope, ngCoolNoti) {

          // how to use in your controller

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


#### about style you can build your cool effect, if you want use it maybe you should name like `.cool-noti-jelly`


### if you want see some demo, clone this and `bower install`, then check it in index.html
