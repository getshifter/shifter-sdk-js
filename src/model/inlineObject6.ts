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

export class InlineObject6 {
    /**
    * s3 bucket name to transfer access log
    */
    'bucketName'?: string;
    /**
    * domain which bucket is placed on
    */
    'domain'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bucketName",
            "baseName": "bucket_name",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject6.attributeTypeMap;
    }
}
