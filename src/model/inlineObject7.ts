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

export class InlineObject7 {
    /**
    * filter by status. [valid_only]- list only domains that validation succeeded. [valid_and_expired]- list domains that status is valid or expired.
    */
    'filter'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject7.attributeTypeMap;
    }
}
