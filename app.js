var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('stories', {
    url: "/stories",
    templateUrl: "partials/stories.html",
    controller: 'StoriesCtrl'
  });
});
