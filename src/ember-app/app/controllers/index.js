import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-40.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-40.title'),
          children: [{
            link: 'i-i-s-prilozhenie-40-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-долж-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-40-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-сотр-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-40-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-карт-доступ-l.title'),
            children: null
          }, {
            link: 'i-i-s-prilozhenie-40-справ-учен-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-учен-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-учен-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-40-справ-род-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-40.i-i-s-prilozhenie-40-справ-род-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})