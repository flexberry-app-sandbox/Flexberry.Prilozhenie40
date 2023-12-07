import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОСотр: DS.attr('string'),
  справДолж: DS.belongsTo('i-i-s-prilozhenie-40-справ-долж', { inverse: null, async: false })
});

export let ValidationRules = {
  фИОСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-сотр.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справДолж: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-справ-сотр.validations.справДолж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправСотрE', 'i-i-s-prilozhenie-40-справ-сотр', {
    фИОСотр: attr('Сотрудник', { index: 0 }),
    справДолж: belongsTo('i-i-s-prilozhenie-40-справ-долж', 'Должность', {
      должность: attr('Должность', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СправСотрL', 'i-i-s-prilozhenie-40-справ-сотр', {
    фИОСотр: attr('Сотрудник', { index: 0 }),
    справДолж: belongsTo('i-i-s-prilozhenie-40-справ-долж', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
