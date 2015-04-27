import { Flummox } from 'flummox';
import FeedActions from './actions/message';
import FeedStore from './stores/message';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('feed', FeedActions);
    this.createStore('feed', FeedStore, this);
  }
}
