import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  справРод: DS.belongsTo('i-i-s-prilozhenie-40-справ-род', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-учен.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-учен.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУченE', 'i-i-s-prilozhenie-40-справ-учен', {
    фио: attr('ФИО Ученика', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-40-справ-род', 'Родители', {
      фиоРод: attr('Фио Родителя', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СправУченL', 'i-i-s-prilozhenie-40-справ-учен', {
    фио: attr('ФИО Ученика', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-40-справ-род', 'Родители', {
      фиоРод: attr('Фио Родителя', { index: 2 })
    }, { index: 1 })
  });
};
