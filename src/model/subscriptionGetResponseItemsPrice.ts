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
import { SubscriptionGetResponseDefaultTaxRates } from './subscriptionGetResponseDefaultTaxRates';
import { SubscriptionGetResponseItemsPlanMetadata } from './subscriptionGetResponseItemsPlanMetadata';
import { SubscriptionGetResponseItemsPriceRecurring } from './subscriptionGetResponseItemsPriceRecurring';

export class SubscriptionGetResponseItemsPrice {
    'id'?: string;
    'object'?: string;
    'active'?: boolean;
    'billingScheme'?: string;
    'created'?: number;
    'currency'?: string;
    'livemode'?: boolean;
    'lookupKey'?: string;
    'metadata'?: SubscriptionGetResponseItemsPlanMetadata;
    'nickname'?: string;
    'product'?: string;
    'recurring'?: SubscriptionGetResponseItemsPriceRecurring;
    'tiersMode'?: string;
    'transformQuantity'?: number;
    'type'?: string;
    'unitAmount'?: number;
    'unitAmountDecimal'?: number;
    'quantity'?: number;
    'subscription'?: string;
    'taxRates'?: SubscriptionGetResponseDefaultTaxRates;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "billingScheme",
            "baseName": "billing_scheme",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "lookupKey",
            "baseName": "lookup_key",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "SubscriptionGetResponseItemsPlanMetadata"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "SubscriptionGetResponseItemsPriceRecurring"
        },
        {
            "name": "tiersMode",
            "baseName": "tiers_mode",
            "type": "string"
        },
        {
            "name": "transformQuantity",
            "baseName": "transform_quantity",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "unitAmount",
            "baseName": "unit_amount",
            "type": "number"
        },
        {
            "name": "unitAmountDecimal",
            "baseName": "unit_amount_decimal",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "taxRates",
            "baseName": "tax_rates",
            "type": "SubscriptionGetResponseDefaultTaxRates"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGetResponseItemsPrice.attributeTypeMap;
    }
}
