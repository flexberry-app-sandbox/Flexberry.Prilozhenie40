import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-40-база-данных', 'Unit | Serializer | i-i-s-prilozhenie-40-база-данных', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-40-база-данных',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-prilozhenie-40-база-данных',
    'model:i-i-s-prilozhenie-40-карт-доступ',
    'model:i-i-s-prilozhenie-40-справ-долж',
    'model:i-i-s-prilozhenie-40-справ-сотр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
