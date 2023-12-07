import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-40-справ-долж-l');
  this.route('i-i-s-prilozhenie-40-справ-долж-e',
  { path: 'i-i-s-prilozhenie-40-справ-долж-e/:id' });
  this.route('i-i-s-prilozhenie-40-справ-долж-e.new',
  { path: 'i-i-s-prilozhenie-40-справ-долж-e/new' });
});

export default Router;
