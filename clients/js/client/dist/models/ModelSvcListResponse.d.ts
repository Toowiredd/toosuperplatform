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
import type { ModelSvcModel } from './ModelSvcModel';
/**
 *
 * @export
 * @interface ModelSvcListResponse
 */
export interface ModelSvcListResponse {
    /**
     *
     * @type {Array<ModelSvcModel>}
     * @memberof ModelSvcListResponse
     */
    models?: Array<ModelSvcModel>;
}
/**
 * Check if a given object implements the ModelSvcListResponse interface.
 */
export declare function instanceOfModelSvcListResponse(value: object): value is ModelSvcListResponse;
export declare function ModelSvcListResponseFromJSON(json: any): ModelSvcListResponse;
export declare function ModelSvcListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSvcListResponse;
export declare function ModelSvcListResponseToJSON(value?: ModelSvcListResponse | null): any;