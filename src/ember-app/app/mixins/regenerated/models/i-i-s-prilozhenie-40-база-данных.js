import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('string'),
  справУчен: DS.belongsTo('i-i-s-prilozhenie-40-справ-учен', { inverse: null, async: false }),
  картДоступ: DS.belongsTo('i-i-s-prilozhenie-40-карт-доступ', { inverse: 'база_Данных', async: false })
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-база-данных.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справУчен: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-база-данных.validations.справУчен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картДоступ: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-база-данных.validations.картДоступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('База_ДанныхE', 'i-i-s-prilozhenie-40-база-данных', {
    номерКарты: attr('Номер Карты', { index: 0 }),
    справУчен: belongsTo('i-i-s-prilozhenie-40-справ-учен', 'Ученик', {
      фио: attr('ФИО Ученика', { index: 2 })
    }, { index: 1, displayMemberPath: 'фИО Ученика' })
  });
};
