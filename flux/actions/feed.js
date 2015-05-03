import { Actions } from 'flummox';
import FeedItem from '../../domain/feed-item';

export default class FeedActions extends Actions {
  readMessages() {
    return null; //what?
  }
  newMessage(content) {
    return new FeedItem(content);
  }
}
