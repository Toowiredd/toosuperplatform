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
	"bytes"
	"fmt"
)

// checks if the RegistrySvcDefinition type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrySvcDefinition{}

// RegistrySvcDefinition struct for RegistrySvcDefinition
type RegistrySvcDefinition struct {
	// API Specs such as OpenAPI definitions etc.
	ApiSpecs []RegistrySvcAPISpec `json:"apiSpecs,omitempty"`
	// Programming language clients such as on npm or GitHub.
	Clients []RegistrySvcClient `json:"clients,omitempty"`
	// HostPort is a clutch until automatic port assignment works. It will go a way as it doesn't make any sense in a Definition.
	HostPort *int32 `json:"hostPort,omitempty"`
	Id string `json:"id"`
	// Container specifications for Docker, K8s, etc.
	Image RegistrySvcImageSpec `json:"image"`
}

type _RegistrySvcDefinition RegistrySvcDefinition

// NewRegistrySvcDefinition instantiates a new RegistrySvcDefinition object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrySvcDefinition(id string, image RegistrySvcImageSpec) *RegistrySvcDefinition {
	this := RegistrySvcDefinition{}
	this.Id = id
	this.Image = image
	return &this
}

// NewRegistrySvcDefinitionWithDefaults instantiates a new RegistrySvcDefinition object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrySvcDefinitionWithDefaults() *RegistrySvcDefinition {
	this := RegistrySvcDefinition{}
	return &this
}

// GetApiSpecs returns the ApiSpecs field value if set, zero value otherwise.
func (o *RegistrySvcDefinition) GetApiSpecs() []RegistrySvcAPISpec {
	if o == nil || IsNil(o.ApiSpecs) {
		var ret []RegistrySvcAPISpec
		return ret
	}
	return o.ApiSpecs
}

// GetApiSpecsOk returns a tuple with the ApiSpecs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcDefinition) GetApiSpecsOk() ([]RegistrySvcAPISpec, bool) {
	if o == nil || IsNil(o.ApiSpecs) {
		return nil, false
	}
	return o.ApiSpecs, true
}

// HasApiSpecs returns a boolean if a field has been set.
func (o *RegistrySvcDefinition) HasApiSpecs() bool {
	if o != nil && !IsNil(o.ApiSpecs) {
		return true
	}

	return false
}

// SetApiSpecs gets a reference to the given []RegistrySvcAPISpec and assigns it to the ApiSpecs field.
func (o *RegistrySvcDefinition) SetApiSpecs(v []RegistrySvcAPISpec) {
	o.ApiSpecs = v
}

// GetClients returns the Clients field value if set, zero value otherwise.
func (o *RegistrySvcDefinition) GetClients() []RegistrySvcClient {
	if o == nil || IsNil(o.Clients) {
		var ret []RegistrySvcClient
		return ret
	}
	return o.Clients
}

// GetClientsOk returns a tuple with the Clients field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcDefinition) GetClientsOk() ([]RegistrySvcClient, bool) {
	if o == nil || IsNil(o.Clients) {
		return nil, false
	}
	return o.Clients, true
}

// HasClients returns a boolean if a field has been set.
func (o *RegistrySvcDefinition) HasClients() bool {
	if o != nil && !IsNil(o.Clients) {
		return true
	}

	return false
}

// SetClients gets a reference to the given []RegistrySvcClient and assigns it to the Clients field.
func (o *RegistrySvcDefinition) SetClients(v []RegistrySvcClient) {
	o.Clients = v
}

// GetHostPort returns the HostPort field value if set, zero value otherwise.
func (o *RegistrySvcDefinition) GetHostPort() int32 {
	if o == nil || IsNil(o.HostPort) {
		var ret int32
		return ret
	}
	return *o.HostPort
}

// GetHostPortOk returns a tuple with the HostPort field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcDefinition) GetHostPortOk() (*int32, bool) {
	if o == nil || IsNil(o.HostPort) {
		return nil, false
	}
	return o.HostPort, true
}

// HasHostPort returns a boolean if a field has been set.
func (o *RegistrySvcDefinition) HasHostPort() bool {
	if o != nil && !IsNil(o.HostPort) {
		return true
	}

	return false
}

// SetHostPort gets a reference to the given int32 and assigns it to the HostPort field.
func (o *RegistrySvcDefinition) SetHostPort(v int32) {
	o.HostPort = &v
}

// GetId returns the Id field value
func (o *RegistrySvcDefinition) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *RegistrySvcDefinition) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *RegistrySvcDefinition) SetId(v string) {
	o.Id = v
}

// GetImage returns the Image field value
func (o *RegistrySvcDefinition) GetImage() RegistrySvcImageSpec {
	if o == nil {
		var ret RegistrySvcImageSpec
		return ret
	}

	return o.Image
}

// GetImageOk returns a tuple with the Image field value
// and a boolean to check if the value has been set.
func (o *RegistrySvcDefinition) GetImageOk() (*RegistrySvcImageSpec, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Image, true
}

// SetImage sets field value
func (o *RegistrySvcDefinition) SetImage(v RegistrySvcImageSpec) {
	o.Image = v
}

func (o RegistrySvcDefinition) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrySvcDefinition) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ApiSpecs) {
		toSerialize["apiSpecs"] = o.ApiSpecs
	}
	if !IsNil(o.Clients) {
		toSerialize["clients"] = o.Clients
	}
	if !IsNil(o.HostPort) {
		toSerialize["hostPort"] = o.HostPort
	}
	toSerialize["id"] = o.Id
	toSerialize["image"] = o.Image
	return toSerialize, nil
}

func (o *RegistrySvcDefinition) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
		"image",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varRegistrySvcDefinition := _RegistrySvcDefinition{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varRegistrySvcDefinition)

	if err != nil {
		return err
	}

	*o = RegistrySvcDefinition(varRegistrySvcDefinition)

	return err
}

type NullableRegistrySvcDefinition struct {
	value *RegistrySvcDefinition
	isSet bool
}

func (v NullableRegistrySvcDefinition) Get() *RegistrySvcDefinition {
	return v.value
}

func (v *NullableRegistrySvcDefinition) Set(val *RegistrySvcDefinition) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrySvcDefinition) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrySvcDefinition) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrySvcDefinition(val *RegistrySvcDefinition) *NullableRegistrySvcDefinition {
	return &NullableRegistrySvcDefinition{value: val, isSet: true}
}

func (v NullableRegistrySvcDefinition) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrySvcDefinition) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

