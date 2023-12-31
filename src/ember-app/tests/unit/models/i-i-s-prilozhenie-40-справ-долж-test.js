import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-40-справ-долж', 'Unit | Model | i-i-s-prilozhenie-40-справ-долж', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-40-база-данных',
    'model:i-i-s-prilozhenie-40-карт-доступ',
    'model:i-i-s-prilozhenie-40-справ-долж',
    'model:i-i-s-prilozhenie-40-справ-род',
    'model:i-i-s-prilozhenie-40-справ-родит',
    'model:i-i-s-prilozhenie-40-справ-сотр',
    'model:i-i-s-prilozhenie-40-справ-уч',
    'model:i-i-s-prilozhenie-40-справ-учен',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
