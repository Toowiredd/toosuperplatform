'use strict';

var UserSvcRole = require('./UserSvcRole.js');

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
/**
 * Check if a given object implements the UserSvcCreateRoleResponse interface.
 */
function instanceOfUserSvcCreateRoleResponse(value) {
    return true;
}
function UserSvcCreateRoleResponseFromJSON(json) {
    return UserSvcCreateRoleResponseFromJSONTyped(json);
}
function UserSvcCreateRoleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'role': json['role'] == null ? undefined : UserSvcRole.UserSvcRoleFromJSON(json['role']),
    };
}
function UserSvcCreateRoleResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'role': UserSvcRole.UserSvcRoleToJSON(value['role']),
    };
}

exports.UserSvcCreateRoleResponseFromJSON = UserSvcCreateRoleResponseFromJSON;
exports.UserSvcCreateRoleResponseFromJSONTyped = UserSvcCreateRoleResponseFromJSONTyped;
exports.UserSvcCreateRoleResponseToJSON = UserSvcCreateRoleResponseToJSON;
exports.instanceOfUserSvcCreateRoleResponse = instanceOfUserSvcCreateRoleResponse;