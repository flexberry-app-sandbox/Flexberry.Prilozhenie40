import { Serializer as СправРодитSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-40-справ-родит';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправРодитSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
