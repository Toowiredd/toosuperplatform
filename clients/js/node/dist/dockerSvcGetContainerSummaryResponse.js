'use strict';

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
class DockerSvcGetContainerSummaryResponse {
    static getAttributeTypeMap() {
        return DockerSvcGetContainerSummaryResponse.attributeTypeMap;
    }
}
DockerSvcGetContainerSummaryResponse.discriminator = undefined;
DockerSvcGetContainerSummaryResponse.attributeTypeMap = [
    {
        "name": "summary",
        "baseName": "summary",
        "type": "string"
    }
];

exports.DockerSvcGetContainerSummaryResponse = DockerSvcGetContainerSummaryResponse;