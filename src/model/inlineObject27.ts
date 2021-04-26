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

export class InlineObject27 {
    /**
    * New city name which will be written in invoice
    */
    'city'?: string;
    /**
    * New country name which will be written in invoice
    */
    'country'?: string;
    /**
    * New postal(zip) code name which will be written in invoice
    */
    'postalCode'?: string;
    /**
    * New state name which will be written in invoice
    */
    'state'?: string;
    /**
    * Additional information if you needed, ex) street name, house number etc..
    */
    'line1'?: string;
    /**
    * Additional information if you needed, ex) street name, house number etc..
    */
    'line2'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject27.attributeTypeMap;
    }
}
