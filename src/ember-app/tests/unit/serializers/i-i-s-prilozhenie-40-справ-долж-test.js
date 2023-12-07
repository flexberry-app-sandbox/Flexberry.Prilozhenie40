import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-40-справ-долж', 'Unit | Serializer | i-i-s-prilozhenie-40-справ-долж', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-40-справ-долж',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-prilozhenie-40-справ-долж',
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
