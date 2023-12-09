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
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-родит.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправРодитE', 'i-i-s-prilozhenie-40-справ-родит', {
    фио: attr('Фио Родителя', { index: 0 })
  });

  modelClass.defineProjection('СправРодитL', 'i-i-s-prilozhenie-40-справ-родит', {
    фио: attr('Фио Родителя', { index: 0 })
  });
};
