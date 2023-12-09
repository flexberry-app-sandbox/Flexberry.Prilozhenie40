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
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-уч.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУчE', 'i-i-s-prilozhenie-40-справ-уч', {
    фио: attr('Фио Ученика', { index: 0 })
  });

  modelClass.defineProjection('СправУчL', 'i-i-s-prilozhenie-40-справ-уч', {
    фио: attr('Фио Ученика', { index: 0 })
  });
};
