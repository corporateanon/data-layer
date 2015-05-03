import t from 'tcomb';
import FeedItem from './feed-item';

const Feed = t.list(FeedItem);

export default Feed;
