import Business from '../model/Business';
import RequestClientWrapper from '../../RequestClientWrapper';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Resource from '../../model/Resource';
import Version from '../../model/Version';
import GenerateApiError from '../../utils/GenerateApiError';
import BusinessesQueryRequestByUserId from '../model/BusinessesQueryRequestByUserId';
import BusinessesQueryRequestByBusinessId from '../model/BusinessesQueryRequestByBusinessId';
import * as Q from 'q';

const EXPECTED_GET_STATUS = 200;

export default class BusinessesService {

  constructor(private readonly client: RequestClientWrapper) { }

  public get(request: BusinessesQueryRequestByUserId): Promise<Business[]>;
  public get(request: BusinessesQueryRequestByBusinessId): Promise<Business>;
  public get(
    request: BusinessesQueryRequestByUserId & BusinessesQueryRequestByBusinessId
  ): Promise<Business[]> | Promise<Business> {
    const deferred = Q.defer<Business[] | Business>();
    let requestUrl = `/${Version.V1}${Resource.BUSINESSES}`;
    let requestOptions: AxiosRequestConfig = {};
    if (request.userId) {
      requestOptions = { params: request };
    } else {
      requestUrl += `/${request.businessId}`;
    }
    this.client.get(requestUrl, requestOptions, (error, response, body) => {
      this.mapBusinessesPromise(requestUrl, deferred, error, response, body, EXPECTED_GET_STATUS);
    });
    return deferred.promise as any;

  }

  private mapBusinessesPromise(requestUrl: string, deferred: Q.Deferred<Business[] | Business>, error: any,
    response: AxiosResponse, body: any, expectedStatusCode: number) {
    if (error) {
      deferred.reject(error);
    } else if (response.status === expectedStatusCode) {
      if (body.businesses) {
        const businesses: Business[] = body.businesses;
        deferred.resolve(businesses);
      } else {
        const business: Business = body;
        deferred.resolve(business);
      }
    } else {
      const channelApeErrorResponse = GenerateApiError(requestUrl, response, body, expectedStatusCode);
      deferred.reject(channelApeErrorResponse);
    }
  }
}
