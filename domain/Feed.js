import t from 'tcomb';
import FeedItem from './FeedItem';

const Feed = t.list(FeedItem);

export default Feed;
