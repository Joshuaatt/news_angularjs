hackerNews.controller('StoriesCtrl', function StoriesCtrl($scope, StoriesFactory) {
  $scope.stories = StoriesFactory.stories;
  $scope.StoriesFactory = StoriesFactory;
});
