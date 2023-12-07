import { Serializer as СправДолжSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-40-справ-долж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправДолжSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
