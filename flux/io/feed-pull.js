import DataSource from 'bivrost/data/source';
import {Live} from './api';
import Feed from '../../domain/feed';

export default class FeedPull extends DataSource {
  getMessages(params) {
    return this.invokeMethod('getMessages', params);
  }

  methodProperties() {
    return {
      api: {
        getMessages: Live('/api/v1/twits')
      },
      outputType: {
        getMessages: Feed
      }
    };
  }
}