import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправРодитMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-40-справ-родит';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправРодитMixin, Validations, {
});

defineProjections(Model);

export default Model;
