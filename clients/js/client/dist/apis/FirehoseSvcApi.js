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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { FirehoseSvcPublishRequestToJSON, } from '../models/index';
/**
 *
 */
export class FirehoseSvcApi extends runtime.BaseAPI {
    /**
     * Publishes an event to the firehose service after authorization check
     * Publish an Event
     */
    firehoseSvcPublishPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['event'] == null) {
                throw new runtime.RequiredError('event', 'Required parameter "event" was null or undefined when calling firehoseSvcPublishPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/firehose-svc/publish`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: FirehoseSvcPublishRequestToJSON(requestParameters['event']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Publishes an event to the firehose service after authorization check
     * Publish an Event
     */
    firehoseSvcPublishPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firehoseSvcPublishPostRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Establish a subscription to the firehose events and accept a real time stream of them.
     * Subscribe to the Event Stream
     */
    firehoseSvcSubscribeGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/firehose-svc/subscribe`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Establish a subscription to the firehose events and accept a real time stream of them.
     * Subscribe to the Event Stream
     */
    firehoseSvcSubscribeGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.firehoseSvcSubscribeGetRaw(initOverrides);
            return yield response.value();
        });
    }
}