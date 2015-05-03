import {
  Store
}
from 'flummox';
import Feed from '../../domain/feed';


export default class FeedStore extends Store {
  constructor(flux) {
    super();

    const feedActions = flux.getActions('feed');
    this.register(feedActions.newMessage, this.handleNewMessage);
    this.register(feedActions.readMessages, this.handleReadMessages);

    this.state = {
      feed: Feed([]),
      unseen: Feed([]),
      messagesCount: 0,
      unseenMessagesCount: 0,
    };
  }

  handleNewMessage(message) {
    let oldFeed = this.state.feed;
    let feed = Feed.update(oldFeed, {$unshift: [message]});
    let messagesCount = feed.length;

    this.setState({ feed, messagesCount });
    console.log('handleNewMessage', message);
    console.log('messagesCount = ', this.state.messagesCount);
  }

  handleReadMessages(content) {
    
  }
}