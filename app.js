var app = angular.module('flapperNews', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  // return o;
// }]);
  return {
    getPost: function() {
      return o.posts;
    },
    setPost: function(newPosts) {
      o.posts = newPosts;
      console.log("factory posts ", o.posts);
    }
  }
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';
  console.log("post at Mainctrl ", posts);
  $scope.posts = posts.posts;
  $scope.posts = [
    {title: 'post 1',
     upvotes: 5,
     link: "schmitz1193@github.io",
     upvotes: 0,
     comments: [
        {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
        {author: 'Bill', body: 'What she said!', upvotes: 0},
        {author: 'me', body: 'FYI not May id', upvotes: 0}
               ]},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  $scope.addPost = function(){
    console.log("$scope.title ", $scope.title);
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0},
        {author: 'me', body: 'what is happening?', upvotes: 0}
      ]
    });
      console.log("addPOst ", $scope.posts);
    // $scope.title = '';
    // $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  console.log("comments? ", $scope.posts);

  //send the posts to the factory to store the data
  posts.setPost($scope.posts);

 }  //end function $scope


]);  //end app controller


app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.title="HELP!";
  posts.posts = posts.getPost();
  console.log("in postctrl ", posts.posts);
  $scope.post = posts.posts[$stateParams.id];
  $scope.addComment = function(){
    // if($scope.body === '') { return; }
    if(!$scope.body || $scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
  });
  // $scope.body = '';
};
}]);
