/**
 * Singulatron
 * Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DockerSvcLaunchOptions } from './dockerSvcLaunchOptions';

export class DockerSvcLaunchContainerRequest {
    'hostPort'?: number;
    'image'?: string;
    'options'?: DockerSvcLaunchOptions;
    'port'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostPort",
            "baseName": "hostPort",
            "type": "number"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "DockerSvcLaunchOptions"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DockerSvcLaunchContainerRequest.attributeTypeMap;
    }
}
