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
/**
 *
 * @export
 * @interface UserSvcRegisterRequest
 */
export interface UserSvcRegisterRequest {
    /**
     *
     * @type {string}
     * @memberof UserSvcRegisterRequest
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof UserSvcRegisterRequest
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof UserSvcRegisterRequest
     */
    password?: string;
}
/**
 * Check if a given object implements the UserSvcRegisterRequest interface.
 */
export declare function instanceOfUserSvcRegisterRequest(value: object): value is UserSvcRegisterRequest;
export declare function UserSvcRegisterRequestFromJSON(json: any): UserSvcRegisterRequest;
export declare function UserSvcRegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSvcRegisterRequest;
export declare function UserSvcRegisterRequestToJSON(value?: UserSvcRegisterRequest | null): any;