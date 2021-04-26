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

export class InlineResponse2006 {
  'siteId'?: string;
  'hookEvent'?: string;
  'webhookUrl'?: string;
  'method'?: string;
  'enabled'?: boolean;
  'headers'?: object;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'siteId',
      baseName: 'site_id',
      type: 'string',
    },
    {
      name: 'hookEvent',
      baseName: 'hook_event',
      type: 'string',
    },
    {
      name: 'webhookUrl',
      baseName: 'webhook_url',
      type: 'string',
    },
    {
      name: 'method',
      baseName: 'method',
      type: 'string',
    },
    {
      name: 'enabled',
      baseName: 'enabled',
      type: 'boolean',
    },
    {
      name: 'headers',
      baseName: 'headers',
      type: 'object',
    },
  ];

  static getAttributeTypeMap() {
    return InlineResponse2006.attributeTypeMap;
  }
}
