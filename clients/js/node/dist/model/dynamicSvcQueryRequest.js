/**
 * Singulatron
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export class DynamicSvcQueryRequest {
    static getAttributeTypeMap() {
        return DynamicSvcQueryRequest.attributeTypeMap;
    }
}
DynamicSvcQueryRequest.discriminator = undefined;
DynamicSvcQueryRequest.attributeTypeMap = [
    {
        "name": "_public",
        "baseName": "public",
        "type": "boolean"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "DatastoreQuery"
    },
    {
        "name": "table",
        "baseName": "table",
        "type": "string"
    }
];