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

export class InlineObject22 {
  /**
   * date of publish
   */
  'date'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'date',
      baseName: 'date',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return InlineObject22.attributeTypeMap;
  }
}
