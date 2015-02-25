hackerNews.factory('SoriesFactory', function CoursesFactory() {
  var factory = {};
  factory.stories = [];
  factory.addStory = function() {
    factory.stories.push({ title: factory.storyTitle, id: factory.stories.length + 1 })
  }
});
