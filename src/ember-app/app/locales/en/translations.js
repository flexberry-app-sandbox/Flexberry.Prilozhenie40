import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_40КартДоступLForm from './forms/i-i-s-prilozhenie-40-карт-доступ-l';
import IISPrilozhenie_40СправДолжLForm from './forms/i-i-s-prilozhenie-40-справ-долж-l';
import IISPrilozhenie_40СправСотрLForm from './forms/i-i-s-prilozhenie-40-справ-сотр-l';
import IISPrilozhenie_40СправУченLForm from './forms/i-i-s-prilozhenie-40-справ-учен-l';
import IISPrilozhenie_40КартДоступEForm from './forms/i-i-s-prilozhenie-40-карт-доступ-e';
import IISPrilozhenie_40СправДолжEForm from './forms/i-i-s-prilozhenie-40-справ-долж-e';
import IISPrilozhenie_40СправСотрEForm from './forms/i-i-s-prilozhenie-40-справ-сотр-e';
import IISPrilozhenie_40СправУченEForm from './forms/i-i-s-prilozhenie-40-справ-учен-e';
import IISPrilozhenie_40База_ДанныхModel from './models/i-i-s-prilozhenie-40-база-данных';
import IISPrilozhenie_40КартДоступModel from './models/i-i-s-prilozhenie-40-карт-доступ';
import IISPrilozhenie_40СправДолжModel from './models/i-i-s-prilozhenie-40-справ-долж';
import IISPrilozhenie_40СправСотрModel from './models/i-i-s-prilozhenie-40-справ-сотр';
import IISPrilozhenie_40СправУченModel from './models/i-i-s-prilozhenie-40-справ-учен';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-40-база-данных': IISPrilozhenie_40База_ДанныхModel,
    'i-i-s-prilozhenie-40-карт-доступ': IISPrilozhenie_40КартДоступModel,
    'i-i-s-prilozhenie-40-справ-долж': IISPrilozhenie_40СправДолжModel,
    'i-i-s-prilozhenie-40-справ-сотр': IISPrilozhenie_40СправСотрModel,
    'i-i-s-prilozhenie-40-справ-учен': IISPrilozhenie_40СправУченModel
  },

  'application-name': 'Prilozhenie_40',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_40',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_40',
          title: 'Prilozhenie_40'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
          },
          'i-i-s-prilozhenie-40-справ-учен-l': {
            caption: 'Справочник Ученики',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-40-карт-доступ-l': IISPrilozhenie_40КартДоступLForm,
    'i-i-s-prilozhenie-40-справ-долж-l': IISPrilozhenie_40СправДолжLForm,
    'i-i-s-prilozhenie-40-справ-сотр-l': IISPrilozhenie_40СправСотрLForm,
    'i-i-s-prilozhenie-40-справ-учен-l': IISPrilozhenie_40СправУченLForm,
    'i-i-s-prilozhenie-40-карт-доступ-e': IISPrilozhenie_40КартДоступEForm,
    'i-i-s-prilozhenie-40-справ-долж-e': IISPrilozhenie_40СправДолжEForm,
    'i-i-s-prilozhenie-40-справ-сотр-e': IISPrilozhenie_40СправСотрEForm,
    'i-i-s-prilozhenie-40-справ-учен-e': IISPrilozhenie_40СправУченEForm
  },

});

export default translations;
