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

export class InlineObject10 {
  /**
   * This flag instructs Domain has been routed with another CDN. [true]- Domain has been associating with Shifter CDN. [false]- Domain has been associating another(your own).
   */
  'useShifterDomain'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'useShifterDomain',
      baseName: 'use_shifter_domain',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return InlineObject10.attributeTypeMap;
  }
}
