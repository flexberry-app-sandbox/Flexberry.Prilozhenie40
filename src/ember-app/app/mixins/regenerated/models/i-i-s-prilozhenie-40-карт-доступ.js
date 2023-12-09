import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справСотр: DS.belongsTo('i-i-s-prilozhenie-40-справ-сотр', { inverse: null, async: false }),
  база_Данных: DS.hasMany('i-i-s-prilozhenie-40-база-данных', { inverse: 'картДоступ', async: false })
});

export let ValidationRules = {
  справСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  база_Данных: {
    descriptionKey: 'models.i-i-s-prilozhenie-40-карт-доступ.validations.база_Данных.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-prilozhenie-40-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie-40-справ-сотр', 'Сотрудник', {
      фИОСотр: attr('Ответственный', { index: 1 })
    }, { index: 0 }),
    база_Данных: hasMany('i-i-s-prilozhenie-40-база-данных', 'База Данных', {
      номерКарты: attr('Номер Карты', { index: 0 }),
      справУч: belongsTo('i-i-s-prilozhenie-40-справ-уч', 'Ученик', {
        фио: attr('Фио Ученика', { index: 2 }),
        справРодит: belongsTo('i-i-s-prilozhenie-40-справ-родит', '', {
          фио: attr('Фио Родителя', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 1, displayMemberPath: 'фио Ученика' })
    })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-prilozhenie-40-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie-40-справ-сотр', 'Ответственный', {
      фИОСотр: attr('Ответственный', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
