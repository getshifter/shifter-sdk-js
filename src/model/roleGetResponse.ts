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

export class RoleGetResponse {
  /**
   * Name of the role
   */
  'name'?: string;
  /**
   * if this value is true, the role has been deprecated.
   */
  'deprecated'?: boolean;
  /**
   * description of the role
   */
  'description'?: string;
  /**
   * Access policies that associated with the role
   */
  'policies'?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'deprecated',
      baseName: 'deprecated',
      type: 'boolean',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'policies',
      baseName: 'policies',
      type: 'Array<string>',
    },
  ];

  static getAttributeTypeMap() {
    return RoleGetResponse.attributeTypeMap;
  }
}
