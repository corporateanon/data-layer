import FeedStream from './flux/io/feed-stream';
import Flux from './flux/flux';
import FeedPull from './flux/io/feed-pull';

function main() {
  const flux = new Flux();
  const stream = new FeedStream(flux);
  const feed = new FeedPull()
  feed.getMessages().then((msgs) => console.log('OK', msgs) );
}

main();