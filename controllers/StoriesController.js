hackerNews.controller('StoriesCtrl', function CoursesCtrl($scope, StoriesFactory) {
  $scope.stories = StoriesFactory.stories;
  $scope.StoriesFactory = StoriesFactory;
});
