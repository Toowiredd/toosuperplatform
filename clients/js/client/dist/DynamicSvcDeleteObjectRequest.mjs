import { DatastoreConditionFromJSON, DatastoreConditionToJSON } from './DatastoreCondition.mjs';
import './DatastoreEqualCondition.mjs';
import './DatastoreFieldSelector.mjs';
import './DatastoreContainsCondition.mjs';
import './DatastoreStartsWithCondition.mjs';

/* tslint:disable */
/* eslint-disable */
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
 * Check if a given object implements the DynamicSvcDeleteObjectRequest interface.
 */
function instanceOfDynamicSvcDeleteObjectRequest(value) {
    return true;
}
function DynamicSvcDeleteObjectRequestFromJSON(json) {
    return DynamicSvcDeleteObjectRequestFromJSONTyped(json);
}
function DynamicSvcDeleteObjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'conditions': json['conditions'] == null ? undefined : (json['conditions'].map(DatastoreConditionFromJSON)),
        'table': json['table'] == null ? undefined : json['table'],
    };
}
function DynamicSvcDeleteObjectRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'conditions': value['conditions'] == null ? undefined : (value['conditions'].map(DatastoreConditionToJSON)),
        'table': value['table'],
    };
}

export { DynamicSvcDeleteObjectRequestFromJSON, DynamicSvcDeleteObjectRequestFromJSONTyped, DynamicSvcDeleteObjectRequestToJSON, instanceOfDynamicSvcDeleteObjectRequest };