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

export class SubscriptionGetResponseItemsPriceRecurring {
  'aggregateUsage'?: string;
  'interval'?: number;
  'intervalCount'?: number;
  'trialPeriodDays'?: number;
  'usageType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'aggregateUsage',
      baseName: 'aggregate_usage',
      type: 'string',
    },
    {
      name: 'interval',
      baseName: 'interval',
      type: 'number',
    },
    {
      name: 'intervalCount',
      baseName: 'interval_count',
      type: 'number',
    },
    {
      name: 'trialPeriodDays',
      baseName: 'trial_period_days',
      type: 'number',
    },
    {
      name: 'usageType',
      baseName: 'usage_type',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return SubscriptionGetResponseItemsPriceRecurring.attributeTypeMap;
  }
}
