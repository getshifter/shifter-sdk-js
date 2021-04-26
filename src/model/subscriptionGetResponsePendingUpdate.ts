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

export class SubscriptionGetResponsePendingUpdate {
  'billingCycleAnchor'?: number;
  'expiresAt'?: number;
  'subscriptionItems'?: Array<{ [key: string]: object }>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'billingCycleAnchor',
      baseName: 'billing_cycle_anchor',
      type: 'number',
    },
    {
      name: 'expiresAt',
      baseName: 'expires_at',
      type: 'number',
    },
    {
      name: 'subscriptionItems',
      baseName: 'subscription_items',
      type: 'Array<{ [key: string]: object; }>',
    },
  ];

  static getAttributeTypeMap() {
    return SubscriptionGetResponsePendingUpdate.attributeTypeMap;
  }
}
