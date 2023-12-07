import { Serializer as База_ДанныхSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-40-база-данных';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(База_ДанныхSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
