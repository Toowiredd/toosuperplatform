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
import { DatastoreOp } from './datastoreOp';
export declare class DatastoreFilter {
    'fields'?: Array<string>;
    'op'?: DatastoreOp;
    /**
    * JSONValues is a JSON marshalled array of values. It\'s JSON marhalled due to the limitations of the Swaggo -> OpenAPI 2.0 -> OpenAPI Go generator toolchain.
    */
    'values'?: string;
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
export declare namespace DatastoreFilter {
}