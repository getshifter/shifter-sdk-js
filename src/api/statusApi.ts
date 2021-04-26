/**
 * Shifter API
 * Shifter API
 *
 * The version of the OpenAPI document: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CommonErrorResponse } from '../model/commonErrorResponse';
import { InlineResponse2009 } from '../model/inlineResponse2009';
import { StatusGetResponse } from '../model/statusGetResponse';

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from '../model/models';
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
} from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.getshifter.io/latest';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum StatusApiApiKeys {
  Authorization,
}

export class StatusApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    Authorization: new ApiKeyAuth('header', 'Authorization'),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: StatusApiApiKeys, value: string) {
    (this.authentications as any)[StatusApiApiKeys[key]].apiKey = value;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   * Get the status of your account and Shifter
   */
  public async statusGet(
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: StatusGetResponse }> {
    const localVarPath = this.basePath + '/status';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Authorization.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Authorization.applyToRequest(
          localVarRequestOptions
        )
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: StatusGetResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(body, 'StatusGetResponse');
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   * Get role specific team of logged in user
   * @param teamId Team ID
   */
  public async statusTeamsTeamIdRoleGet(
    teamId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: InlineResponse2009 }> {
    const localVarPath =
      this.basePath +
      '/status/teams/{team_id}/role'.replace(
        '{' + 'team_id' + '}',
        encodeURIComponent(String(teamId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling statusTeamsTeamIdRoleGet.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Authorization.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Authorization.applyToRequest(
          localVarRequestOptions
        )
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2009;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(body, 'InlineResponse2009');
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
}
