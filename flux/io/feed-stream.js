import client from 'socket.io-client';

export default class FeedStream {
  constructor(flux) {
    this.flux = flux;
    this.feedActions = flux.getActions('feed');
    this.connect();
  }

  connect() {
    const sock = client.connect('http://huevy-socket.herokuapp.com:80/');
    sock.on('twit', this.onTwit.bind(this));
  }

  onTwit(data) {
    this.feedActions.newMessage(data);
  }

}