/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserSvcRole
 */
export interface UserSvcRole {
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    ownerId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserSvcRole
     */
    permissionIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserSvcRole
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the UserSvcRole interface.
 */
export function instanceOfUserSvcRole(value: object): value is UserSvcRole {
    return true;
}

export function UserSvcRoleFromJSON(json: any): UserSvcRole {
    return UserSvcRoleFromJSONTyped(json, false);
}

export function UserSvcRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSvcRole {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'permissionIds': json['permissionIds'] == null ? undefined : json['permissionIds'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
    };
}

export function UserSvcRoleToJSON(value?: UserSvcRole | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'createdAt': value['createdAt'],
        'description': value['description'],
        'id': value['id'],
        'name': value['name'],
        'ownerId': value['ownerId'],
        'permissionIds': value['permissionIds'],
        'updatedAt': value['updatedAt'],
    };
}
