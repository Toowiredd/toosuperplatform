/*
Singulatron

AI management and development platform.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the DockerSvcLaunchContainerRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DockerSvcLaunchContainerRequest{}

// DockerSvcLaunchContainerRequest struct for DockerSvcLaunchContainerRequest
type DockerSvcLaunchContainerRequest struct {
	HostPort *int32 `json:"hostPort,omitempty"`
	Image *string `json:"image,omitempty"`
	Options *DockerSvcLaunchOptions `json:"options,omitempty"`
	Port *int32 `json:"port,omitempty"`
}

// NewDockerSvcLaunchContainerRequest instantiates a new DockerSvcLaunchContainerRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDockerSvcLaunchContainerRequest() *DockerSvcLaunchContainerRequest {
	this := DockerSvcLaunchContainerRequest{}
	return &this
}

// NewDockerSvcLaunchContainerRequestWithDefaults instantiates a new DockerSvcLaunchContainerRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDockerSvcLaunchContainerRequestWithDefaults() *DockerSvcLaunchContainerRequest {
	this := DockerSvcLaunchContainerRequest{}
	return &this
}

// GetHostPort returns the HostPort field value if set, zero value otherwise.
func (o *DockerSvcLaunchContainerRequest) GetHostPort() int32 {
	if o == nil || IsNil(o.HostPort) {
		var ret int32
		return ret
	}
	return *o.HostPort
}

// GetHostPortOk returns a tuple with the HostPort field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DockerSvcLaunchContainerRequest) GetHostPortOk() (*int32, bool) {
	if o == nil || IsNil(o.HostPort) {
		return nil, false
	}
	return o.HostPort, true
}

// HasHostPort returns a boolean if a field has been set.
func (o *DockerSvcLaunchContainerRequest) HasHostPort() bool {
	if o != nil && !IsNil(o.HostPort) {
		return true
	}

	return false
}

// SetHostPort gets a reference to the given int32 and assigns it to the HostPort field.
func (o *DockerSvcLaunchContainerRequest) SetHostPort(v int32) {
	o.HostPort = &v
}

// GetImage returns the Image field value if set, zero value otherwise.
func (o *DockerSvcLaunchContainerRequest) GetImage() string {
	if o == nil || IsNil(o.Image) {
		var ret string
		return ret
	}
	return *o.Image
}

// GetImageOk returns a tuple with the Image field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DockerSvcLaunchContainerRequest) GetImageOk() (*string, bool) {
	if o == nil || IsNil(o.Image) {
		return nil, false
	}
	return o.Image, true
}

// HasImage returns a boolean if a field has been set.
func (o *DockerSvcLaunchContainerRequest) HasImage() bool {
	if o != nil && !IsNil(o.Image) {
		return true
	}

	return false
}

// SetImage gets a reference to the given string and assigns it to the Image field.
func (o *DockerSvcLaunchContainerRequest) SetImage(v string) {
	o.Image = &v
}

// GetOptions returns the Options field value if set, zero value otherwise.
func (o *DockerSvcLaunchContainerRequest) GetOptions() DockerSvcLaunchOptions {
	if o == nil || IsNil(o.Options) {
		var ret DockerSvcLaunchOptions
		return ret
	}
	return *o.Options
}

// GetOptionsOk returns a tuple with the Options field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DockerSvcLaunchContainerRequest) GetOptionsOk() (*DockerSvcLaunchOptions, bool) {
	if o == nil || IsNil(o.Options) {
		return nil, false
	}
	return o.Options, true
}

// HasOptions returns a boolean if a field has been set.
func (o *DockerSvcLaunchContainerRequest) HasOptions() bool {
	if o != nil && !IsNil(o.Options) {
		return true
	}

	return false
}

// SetOptions gets a reference to the given DockerSvcLaunchOptions and assigns it to the Options field.
func (o *DockerSvcLaunchContainerRequest) SetOptions(v DockerSvcLaunchOptions) {
	o.Options = &v
}

// GetPort returns the Port field value if set, zero value otherwise.
func (o *DockerSvcLaunchContainerRequest) GetPort() int32 {
	if o == nil || IsNil(o.Port) {
		var ret int32
		return ret
	}
	return *o.Port
}

// GetPortOk returns a tuple with the Port field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DockerSvcLaunchContainerRequest) GetPortOk() (*int32, bool) {
	if o == nil || IsNil(o.Port) {
		return nil, false
	}
	return o.Port, true
}

// HasPort returns a boolean if a field has been set.
func (o *DockerSvcLaunchContainerRequest) HasPort() bool {
	if o != nil && !IsNil(o.Port) {
		return true
	}

	return false
}

// SetPort gets a reference to the given int32 and assigns it to the Port field.
func (o *DockerSvcLaunchContainerRequest) SetPort(v int32) {
	o.Port = &v
}

func (o DockerSvcLaunchContainerRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DockerSvcLaunchContainerRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HostPort) {
		toSerialize["hostPort"] = o.HostPort
	}
	if !IsNil(o.Image) {
		toSerialize["image"] = o.Image
	}
	if !IsNil(o.Options) {
		toSerialize["options"] = o.Options
	}
	if !IsNil(o.Port) {
		toSerialize["port"] = o.Port
	}
	return toSerialize, nil
}

type NullableDockerSvcLaunchContainerRequest struct {
	value *DockerSvcLaunchContainerRequest
	isSet bool
}

func (v NullableDockerSvcLaunchContainerRequest) Get() *DockerSvcLaunchContainerRequest {
	return v.value
}

func (v *NullableDockerSvcLaunchContainerRequest) Set(val *DockerSvcLaunchContainerRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableDockerSvcLaunchContainerRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableDockerSvcLaunchContainerRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDockerSvcLaunchContainerRequest(val *DockerSvcLaunchContainerRequest) *NullableDockerSvcLaunchContainerRequest {
	return &NullableDockerSvcLaunchContainerRequest{value: val, isSet: true}
}

func (v NullableDockerSvcLaunchContainerRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDockerSvcLaunchContainerRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

