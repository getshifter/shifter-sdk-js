/**
 * Shifter API
 * Shifter API
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SubscriptionGetResponsePauseCollection {
  'behavior'?: string;
  'resumeAt'?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'behavior',
      baseName: 'behavior',
      type: 'string',
      format: '',
    },
    {
      name: 'resumeAt',
      baseName: 'resume_at',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return SubscriptionGetResponsePauseCollection.attributeTypeMap;
  }

  public constructor() {}
}