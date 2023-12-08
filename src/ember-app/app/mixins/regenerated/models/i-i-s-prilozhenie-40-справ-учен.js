import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string')
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-учен.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУченE', 'i-i-s-prilozhenie-40-справ-учен', {
    фио: attr('ФИО Ученика', { index: 0 })
  });

  modelClass.defineProjection('СправУченL', 'i-i-s-prilozhenie-40-справ-учен', {
    фио: attr('ФИО Ученика', { index: 0 })
  });
};
