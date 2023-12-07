import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_40КартДоступLForm from './forms/i-i-s-prilozhenie-40-карт-доступ-l';
import IISPrilozhenie_40СправДолжLForm from './forms/i-i-s-prilozhenie-40-справ-долж-l';
import IISPrilozhenie_40СправСотрLForm from './forms/i-i-s-prilozhenie-40-справ-сотр-l';
import IISPrilozhenie_40КартДоступEForm from './forms/i-i-s-prilozhenie-40-карт-доступ-e';
import IISPrilozhenie_40СправДолжEForm from './forms/i-i-s-prilozhenie-40-справ-долж-e';
import IISPrilozhenie_40СправСотрEForm from './forms/i-i-s-prilozhenie-40-справ-сотр-e';
import IISPrilozhenie_40КартДоступModel from './models/i-i-s-prilozhenie-40-карт-доступ';
import IISPrilozhenie_40СправДолжModel from './models/i-i-s-prilozhenie-40-справ-долж';
import IISPrilozhenie_40СправСотрModel from './models/i-i-s-prilozhenie-40-справ-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-40-карт-доступ': IISPrilozhenie_40КартДоступModel,
    'i-i-s-prilozhenie-40-справ-долж': IISPrilozhenie_40СправДолжModel,
    'i-i-s-prilozhenie-40-справ-сотр': IISPrilozhenie_40СправСотрModel
  },

  'application-name': 'Prilozhenie_40',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_40',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_40',
          title: 'Prilozhenie_40'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'prilozhenie-40': {
          caption: 'Prilozhenie_40',
          title: 'Prilozhenie_40',
          'i-i-s-prilozhenie-40-справ-долж-l': {
            caption: 'Справ долж',
            title: ''
          },
          'i-i-s-prilozhenie-40-справ-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          },
          'i-i-s-prilozhenie-40-карт-доступ-l': {
            caption: 'Карты Доступа',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-40-карт-доступ-l': IISPrilozhenie_40КартДоступLForm,
    'i-i-s-prilozhenie-40-справ-долж-l': IISPrilozhenie_40СправДолжLForm,
    'i-i-s-prilozhenie-40-справ-сотр-l': IISPrilozhenie_40СправСотрLForm,
    'i-i-s-prilozhenie-40-карт-доступ-e': IISPrilozhenie_40КартДоступEForm,
    'i-i-s-prilozhenie-40-справ-долж-e': IISPrilozhenie_40СправДолжEForm,
    'i-i-s-prilozhenie-40-справ-сотр-e': IISPrilozhenie_40СправСотрEForm
  },

});

export default translations;
