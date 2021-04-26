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

export class StatusGetResponseMaintenance {
    /**
    * Description of status of current Shifter system
    */
    'message'?: string;
    /**
    * Target components of maintenance.
    */
    'target'?: Array<string>;
    /**
    * Current system status. [not_maintenance]- Shifter is not in maintenance. [now_maintenance]- Shifter is currently in maintenance. [pre_maintenance]- Shifter will be into maintenance soon.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "Array<string>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StatusGetResponseMaintenance.attributeTypeMap;
    }
}
