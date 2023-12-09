import {
  defineNamespace,
  defineProjections,
  Model as СправРодитMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-справ-родит';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправРодитMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
