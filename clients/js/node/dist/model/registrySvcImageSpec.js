/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export class RegistrySvcImageSpec {
    static getAttributeTypeMap() {
        return RegistrySvcImageSpec.attributeTypeMap;
    }
}
RegistrySvcImageSpec.discriminator = undefined;
RegistrySvcImageSpec.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];