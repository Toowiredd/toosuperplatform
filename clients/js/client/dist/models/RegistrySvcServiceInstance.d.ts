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
/**
 *
 * @export
 * @interface RegistrySvcServiceInstance
 */
export interface RegistrySvcServiceInstance {
    /**
     * Host of the service instance address. Required if URL is not provided
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    host?: string;
    /**
     * Required: ID of the service instance
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    id: string;
    /**
     * IP of the service instance address. Optional: to register by IP instead of host
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    ip?: string;
    /**
     * Path of the service instance address. Optional (e.g., "/api")
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    path?: string;
    /**
     * Port of the service instance address. Required if URL is not provided
     * @type {number}
     * @memberof RegistrySvcServiceInstance
     */
    port?: number;
    /**
     * Scheme of the service instance address. Required if URL is not provided.
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    scheme?: string;
    /**
     * Slug of the service whose instance is being registered.
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    slug: string;
    /**
     * Full address URL of the service instance.
     * @type {string}
     * @memberof RegistrySvcServiceInstance
     */
    url?: string;
}
/**
 * Check if a given object implements the RegistrySvcServiceInstance interface.
 */
export declare function instanceOfRegistrySvcServiceInstance(value: object): value is RegistrySvcServiceInstance;
export declare function RegistrySvcServiceInstanceFromJSON(json: any): RegistrySvcServiceInstance;
export declare function RegistrySvcServiceInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrySvcServiceInstance;
export declare function RegistrySvcServiceInstanceToJSON(value?: RegistrySvcServiceInstance | null): any;