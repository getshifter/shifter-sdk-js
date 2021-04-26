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
import { TeamsResponseWithId } from './teamsResponseWithId';

export class InlineResponse2002 {
    'owner'?: Array<TeamsResponseWithId>;
    'member'?: Array<TeamsResponseWithId>;
    /**
    * If user belongs to only one team, Warning message
    */
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "Array<TeamsResponseWithId>"
        },
        {
            "name": "member",
            "baseName": "member",
            "type": "Array<TeamsResponseWithId>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }
}
