import { Flummox } from 'flummox';
import FeedActions from './actions/feed';
import FeedStore from './stores/feed';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('feed', FeedActions);
    this.createStore('feed', FeedStore, this);
  }
}
