import { Flummox } from 'flummox';
import MessageActions from './message-actions';
import MessageStore from './message-store';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
  }
}