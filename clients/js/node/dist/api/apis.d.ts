export * from './chatSvcApi';
import { ChatSvcApi } from './chatSvcApi';
export * from './configSvcApi';
import { ConfigSvcApi } from './configSvcApi';
export * from './dockerSvcApi';
import { DockerSvcApi } from './dockerSvcApi';
export * from './downloadSvcApi';
import { DownloadSvcApi } from './downloadSvcApi';
export * from './firehoseSvcApi';
import { FirehoseSvcApi } from './firehoseSvcApi';
export * from './genericSvcApi';
import { GenericSvcApi } from './genericSvcApi';
export * from './modelSvcApi';
import { ModelSvcApi } from './modelSvcApi';
export * from './nodeSvcApi';
import { NodeSvcApi } from './nodeSvcApi';
export * from './promptSvcApi';
import { PromptSvcApi } from './promptSvcApi';
export * from './userSvcApi';
import { UserSvcApi } from './userSvcApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof ChatSvcApi | typeof ConfigSvcApi | typeof DockerSvcApi | typeof DownloadSvcApi | typeof FirehoseSvcApi | typeof GenericSvcApi | typeof ModelSvcApi | typeof NodeSvcApi | typeof PromptSvcApi | typeof UserSvcApi)[];