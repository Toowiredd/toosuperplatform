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
import { RegistrySvcAPISpec } from './registrySvcAPISpec';
import { RegistrySvcClient } from './registrySvcClient';
import { RegistrySvcImageSpec } from './registrySvcImageSpec';
export declare class RegistrySvcDefinition {
    /**
    * API Specs such as OpenAPI definitions etc.
    */
    'apiSpecs'?: Array<RegistrySvcAPISpec>;
    /**
    * Programming language clients such as on npm or GitHub.
    */
    'clients'?: Array<RegistrySvcClient>;
    /**
    * HostPort is a clutch until automatic port assignment works. It will go a way as it doesn\'t make any sense in a Definition.
    */
    'hostPort'?: number;
    'id': string;
    /**
    * Container specifications for Docker, K8s, etc.
    */
    'image': RegistrySvcImageSpec;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
