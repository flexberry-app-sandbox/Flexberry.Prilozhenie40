import { Serializer as СправУчSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-40-справ-уч';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправУчSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
