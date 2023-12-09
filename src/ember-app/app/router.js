import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-40-карт-доступ-l');
  this.route('i-i-s-prilozhenie-40-карт-доступ-e',
  { path: 'i-i-s-prilozhenie-40-карт-доступ-e/:id' });
  this.route('i-i-s-prilozhenie-40-карт-доступ-e.new',
  { path: 'i-i-s-prilozhenie-40-карт-доступ-e/new' });
  this.route('i-i-s-prilozhenie-40-справ-долж-l');
  this.route('i-i-s-prilozhenie-40-справ-долж-e',
  { path: 'i-i-s-prilozhenie-40-справ-долж-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-долж-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-долж-e/new' });
  this.route('i-i-s-prilozhenie-40-справ-род-l');
  this.route('i-i-s-prilozhenie-40-справ-род-e',
  { path: 'i-i-s-prilozhenie-40-справ-род-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-род-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-род-e/new' });
  this.route('i-i-s-prilozhenie-40-справ-сотр-l');
  this.route('i-i-s-prilozhenie-40-справ-сотр-e',
  { path: 'i-i-s-prilozhenie-40-справ-сотр-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-сотр-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-сотр-e/new' });
  this.route('i-i-s-prilozhenie-40-справ-уч-l');
  this.route('i-i-s-prilozhenie-40-справ-уч-e',
  { path: 'i-i-s-prilozhenie-40-справ-уч-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-уч-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-уч-e/new' });
  this.route('i-i-s-prilozhenie-40-справ-учен-l');
  this.route('i-i-s-prilozhenie-40-справ-учен-e',
  { path: 'i-i-s-prilozhenie-40-справ-учен-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-учен-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-учен-e/new' });
});

export default Router;
