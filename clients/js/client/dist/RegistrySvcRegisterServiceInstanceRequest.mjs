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
 * Check if a given object implements the RegistrySvcRegisterServiceInstanceRequest interface.
 */
function instanceOfRegistrySvcRegisterServiceInstanceRequest(value) {
    if (!('slug' in value) || value['slug'] === undefined)
        return false;
    return true;
}
function RegistrySvcRegisterServiceInstanceRequestFromJSON(json) {
    return RegistrySvcRegisterServiceInstanceRequestFromJSONTyped(json);
}
function RegistrySvcRegisterServiceInstanceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'host': json['host'] == null ? undefined : json['host'],
        'ip': json['ip'] == null ? undefined : json['ip'],
        'path': json['path'] == null ? undefined : json['path'],
        'port': json['port'] == null ? undefined : json['port'],
        'scheme': json['scheme'] == null ? undefined : json['scheme'],
        'slug': json['slug'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
function RegistrySvcRegisterServiceInstanceRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'host': value['host'],
        'ip': value['ip'],
        'path': value['path'],
        'port': value['port'],
        'scheme': value['scheme'],
        'slug': value['slug'],
        'url': value['url'],
    };
}

export { RegistrySvcRegisterServiceInstanceRequestFromJSON, RegistrySvcRegisterServiceInstanceRequestFromJSONTyped, RegistrySvcRegisterServiceInstanceRequestToJSON, instanceOfRegistrySvcRegisterServiceInstanceRequest };