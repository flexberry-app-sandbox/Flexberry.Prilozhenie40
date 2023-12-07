import {
  defineNamespace,
  defineProjections,
  Model as КартДоступMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-карт-доступ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КартДоступMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
