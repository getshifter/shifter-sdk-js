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

export class StatusGetResponseUserNotificationEmail {
    'destination'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StatusGetResponseUserNotificationEmail.attributeTypeMap;
    }
}
