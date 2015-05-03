import axios from 'axios';
import AdapterAxios from 'bivrost/http/adapter/axios';
import Api from 'bivrost/http/api';

export const Static = Api.extend({
  adapter: AdapterAxios(axios),
  base: 'http://huevy.github.io',
  prefix: '/data',
});

export const Live = Api.extend({
  adapter: AdapterAxios(axios),
  base: 'http://huevy-socket.herokuapp.com',
  prefix: '',
});

