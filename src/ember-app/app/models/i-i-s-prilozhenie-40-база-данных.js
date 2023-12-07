import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as База_ДанныхMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-база-данных';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(База_ДанныхMixin, Validations, {
});

defineProjections(Model);

export default Model;
