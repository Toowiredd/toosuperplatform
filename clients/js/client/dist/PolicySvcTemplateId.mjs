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
 *
 * @export
 */
const PolicySvcTemplateId = {
    TemplateIdRateLimit: 'rate-limit',
    TemplateIdBlocklist: 'blocklist'
};
function instanceOfPolicySvcTemplateId(value) {
    for (const key in PolicySvcTemplateId) {
        if (Object.prototype.hasOwnProperty.call(PolicySvcTemplateId, key)) {
            if (PolicySvcTemplateId[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function PolicySvcTemplateIdFromJSON(json) {
    return PolicySvcTemplateIdFromJSONTyped(json);
}
function PolicySvcTemplateIdFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function PolicySvcTemplateIdToJSON(value) {
    return value;
}

export { PolicySvcTemplateId, PolicySvcTemplateIdFromJSON, PolicySvcTemplateIdFromJSONTyped, PolicySvcTemplateIdToJSON, instanceOfPolicySvcTemplateId };