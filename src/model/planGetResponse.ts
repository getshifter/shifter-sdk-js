/**
 * Shifter API
 * Shifter API
 *
 * The version of the OpenAPI document: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PlanGetResponseMetadata } from './planGetResponseMetadata';

export class PlanGetResponse {
  /**
   * ID of the plan
   */
  'id'?: string;
  /**
   * Name of the plan
   */
  'nickname'?: string;
  /**
   * Term of the plan. [monthly or annual]
   */
  'interval'?: string;
  /**
   * Product name which the plan is associated with
   */
  'product'?: string;
  /**
   * Amount of the plan
   */
  'amount'?: string;
  /**
   * Currency of the plan.
   */
  'currency'?: string;
  'metadata'?: PlanGetResponseMetadata;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'nickname',
      baseName: 'nickname',
      type: 'string',
    },
    {
      name: 'interval',
      baseName: 'interval',
      type: 'string',
    },
    {
      name: 'product',
      baseName: 'product',
      type: 'string',
    },
    {
      name: 'amount',
      baseName: 'amount',
      type: 'string',
    },
    {
      name: 'currency',
      baseName: 'currency',
      type: 'string',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'PlanGetResponseMetadata',
    },
  ];

  static getAttributeTypeMap() {
    return PlanGetResponse.attributeTypeMap;
  }
}
