import { Store } from 'flummox';
import Feed from '../domain/Feed';


export default class FeedStore extends Store {
  constructor(flux) {
    super();

    const feedActions = flux.getActions('feed');
    this.register(feedActions.newMessage, this.handleNewMessage);
    this.register(feedActions.readMessages, this.handleReadMessages);

    this.state = {
      feed: Feed([])
    };
  }

  handleNewMessage(content) {
  }

  handleReadMessages(content) {
  }
}
