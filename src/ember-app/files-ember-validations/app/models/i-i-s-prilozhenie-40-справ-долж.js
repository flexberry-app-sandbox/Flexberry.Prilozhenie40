import {
  defineNamespace,
  defineProjections,
  Model as СправДолжMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-справ-долж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправДолжMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
