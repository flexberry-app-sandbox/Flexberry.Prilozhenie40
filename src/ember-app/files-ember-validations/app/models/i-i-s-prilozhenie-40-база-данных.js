import {
  defineNamespace,
  defineProjections,
  Model as База_ДанныхMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-база-данных';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(База_ДанныхMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
