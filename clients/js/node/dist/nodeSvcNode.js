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
class NodeSvcNode {
    static getAttributeTypeMap() {
        return NodeSvcNode.attributeTypeMap;
    }
}
NodeSvcNode.discriminator = undefined;
NodeSvcNode.attributeTypeMap = [
    {
        "name": "gpus",
        "baseName": "gpus",
        "type": "Array<NodeSvcGPU>"
    },
    {
        "name": "hostname",
        "baseName": "hostname",
        "type": "string"
    }
];

exports.NodeSvcNode = NodeSvcNode;