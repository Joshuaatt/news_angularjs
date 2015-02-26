hackerNews.factory('StoriesFactory', function StoriesFactory() {
  var factory = {};
  factory.stories = [];
  factory.addStory = function() {
// This will add a new story with an id and vote counter that starts at 1.
    factory.stories.push({
      title: factory.storyTitle,
      id: factory.stories.length + 1,
      votes: 1
      });
      factory.storyTitle = null;
  };

  factory.voteUp = function() {
    factory.stories.votes += 1
  };

  return factory
});

// https://thinkster.io/learn-to-build-realtime-webapps/
