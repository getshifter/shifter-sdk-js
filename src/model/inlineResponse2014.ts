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

export class InlineResponse2014 {
  /**
   * Job Id if date parameter specified
   */
  'jobId'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'jobId',
      baseName: 'job_id',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return InlineResponse2014.attributeTypeMap;
  }
}
