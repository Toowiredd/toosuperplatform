/*
Superplatform

On-premise AI platform and microservices ecosystem.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the RegistrySvcListInstancesResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrySvcListInstancesResponse{}

// RegistrySvcListInstancesResponse struct for RegistrySvcListInstancesResponse
type RegistrySvcListInstancesResponse struct {
	Instances []RegistrySvcInstance `json:"instances,omitempty"`
}

// NewRegistrySvcListInstancesResponse instantiates a new RegistrySvcListInstancesResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrySvcListInstancesResponse() *RegistrySvcListInstancesResponse {
	this := RegistrySvcListInstancesResponse{}
	return &this
}

// NewRegistrySvcListInstancesResponseWithDefaults instantiates a new RegistrySvcListInstancesResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrySvcListInstancesResponseWithDefaults() *RegistrySvcListInstancesResponse {
	this := RegistrySvcListInstancesResponse{}
	return &this
}

// GetInstances returns the Instances field value if set, zero value otherwise.
func (o *RegistrySvcListInstancesResponse) GetInstances() []RegistrySvcInstance {
	if o == nil || IsNil(o.Instances) {
		var ret []RegistrySvcInstance
		return ret
	}
	return o.Instances
}

// GetInstancesOk returns a tuple with the Instances field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcListInstancesResponse) GetInstancesOk() ([]RegistrySvcInstance, bool) {
	if o == nil || IsNil(o.Instances) {
		return nil, false
	}
	return o.Instances, true
}

// HasInstances returns a boolean if a field has been set.
func (o *RegistrySvcListInstancesResponse) HasInstances() bool {
	if o != nil && !IsNil(o.Instances) {
		return true
	}

	return false
}

// SetInstances gets a reference to the given []RegistrySvcInstance and assigns it to the Instances field.
func (o *RegistrySvcListInstancesResponse) SetInstances(v []RegistrySvcInstance) {
	o.Instances = v
}

func (o RegistrySvcListInstancesResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrySvcListInstancesResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Instances) {
		toSerialize["instances"] = o.Instances
	}
	return toSerialize, nil
}

type NullableRegistrySvcListInstancesResponse struct {
	value *RegistrySvcListInstancesResponse
	isSet bool
}

func (v NullableRegistrySvcListInstancesResponse) Get() *RegistrySvcListInstancesResponse {
	return v.value
}

func (v *NullableRegistrySvcListInstancesResponse) Set(val *RegistrySvcListInstancesResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrySvcListInstancesResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrySvcListInstancesResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrySvcListInstancesResponse(val *RegistrySvcListInstancesResponse) *NullableRegistrySvcListInstancesResponse {
	return &NullableRegistrySvcListInstancesResponse{value: val, isSet: true}
}

func (v NullableRegistrySvcListInstancesResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrySvcListInstancesResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

