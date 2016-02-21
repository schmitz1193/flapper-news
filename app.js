var app = angular.module('flapperNews', []);


//configure ui-router
// app.config([
// '$stateProvider',
// '$urlRouterProvider',
// function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/home',
//       templateUrl: '/home.html',
//       controller: 'MainCtrl'
//     });
//   $urlRouterProvider.otherwise('home');
// }]);

//creating a service to maintain the data
// app.factory('posts', [function(){
  //creating a new object of o that is a blank post array
//   var o = {
//     posts: []
//   };
//   return o;
// }])

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  // $scope.posts = posts.posts;
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];
 //  $scope.addPost = function(){
 //    //Prevent the user from submitting a blank post
 //     if(!$scope.title || $scope.title === '') { return; }
 //     $scope.posts.push({
 //       title: $scope.title,
 //       link: $scope.link,
 //       upvotes: 0
 //     });
 //     $scope.title = '';
 //    $scope.link = '';
 //  };
 //     //allow user to upvote for a post
 //  $scope.incrementUpvotes = function(post) {
 //    post.upvotes += 1;
 //  };
  }
]);
