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
import * as runtime from '../runtime';
import type { DynamicSvcCreateObjectRequest, DynamicSvcCreateObjectResponse, DynamicSvcDeleteObjectRequest, DynamicSvcQueryRequest, DynamicSvcQueryResponse, DynamicSvcUpdateObjectRequest, DynamicSvcUpsertObjectRequest, DynamicSvcUpsertObjectResponse } from '../models/index';
export interface CreateObjectRequest {
    body: DynamicSvcCreateObjectRequest;
}
export interface DeleteObjectsRequest {
    objectId: string;
    body: DynamicSvcDeleteObjectRequest;
}
export interface QueryRequest {
    body?: DynamicSvcQueryRequest;
}
export interface UpdateObjectsRequest {
    body: DynamicSvcUpdateObjectRequest;
}
export interface UpsertObjectRequest {
    objectId: string;
    body: DynamicSvcUpsertObjectRequest;
}
/**
 *
 */
export declare class DynamicSvcApi extends runtime.BaseAPI {
    /**
     * Creates a new object with the provided details. Requires authorization and user authentication.
     * Create a Generic Object
     */
    createObjectRaw(requestParameters: CreateObjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DynamicSvcCreateObjectResponse>>;
    /**
     * Creates a new object with the provided details. Requires authorization and user authentication.
     * Create a Generic Object
     */
    createObject(requestParameters: CreateObjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DynamicSvcCreateObjectResponse>;
    /**
     * Removes a dynamic object from the system based on the provided conditions. Requires authorization and user authentication.
     * Delete a Generic Object
     */
    deleteObjectsRaw(requestParameters: DeleteObjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Removes a dynamic object from the system based on the provided conditions. Requires authorization and user authentication.
     * Delete a Generic Object
     */
    deleteObjects(requestParameters: DeleteObjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Retrieves objects from a specified table based on search criteria. Requires authorization and user authentication.   Use helper functions in your respective client library such as condition constructors (`equal`, `contains`, `startsWith`) and field selectors (`field`, `fields`, `id`) for easier access.
     * Query Dynamic Objects
     */
    queryRaw(requestParameters: QueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DynamicSvcQueryResponse>>;
    /**
     * Retrieves objects from a specified table based on search criteria. Requires authorization and user authentication.   Use helper functions in your respective client library such as condition constructors (`equal`, `contains`, `startsWith`) and field selectors (`field`, `fields`, `id`) for easier access.
     * Query Dynamic Objects
     */
    query(requestParameters?: QueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DynamicSvcQueryResponse>;
    /**
     * Updates objects in a specified table based on provided conditions. Requires authorization and user authentication.
     * Update Dynamic Objects
     */
    updateObjectsRaw(requestParameters: UpdateObjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Updates objects in a specified table based on provided conditions. Requires authorization and user authentication.
     * Update Dynamic Objects
     */
    updateObjects(requestParameters: UpdateObjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Creates a new dynamic object or updates an existing one based on the provided data. Requires authorization and user authentication.
     * Upsert a Generic Object
     */
    upsertObjectRaw(requestParameters: UpsertObjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DynamicSvcUpsertObjectResponse>>;
    /**
     * Creates a new dynamic object or updates an existing one based on the provided data. Requires authorization and user authentication.
     * Upsert a Generic Object
     */
    upsertObject(requestParameters: UpsertObjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DynamicSvcUpsertObjectResponse>;
}