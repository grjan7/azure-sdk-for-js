/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ImageVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import {
  ImageVersion,
  ImageVersionsListByImageNextOptionalParams,
  ImageVersionsListByImageOptionalParams,
  ImageVersionsListByImageResponse,
  ImageVersionsGetOptionalParams,
  ImageVersionsGetResponse,
  ImageVersionsListByImageNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ImageVersions operations. */
export class ImageVersionsImpl implements ImageVersions {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class ImageVersions class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists versions for an image.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  public listByImage(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
  ): PagedAsyncIterableIterator<ImageVersion> {
    const iter = this.listByImagePagingAll(
      resourceGroupName,
      devCenterName,
      galleryName,
      imageName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByImagePagingPage(
          resourceGroupName,
          devCenterName,
          galleryName,
          imageName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByImagePagingPage(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ImageVersion[]> {
    let result: ImageVersionsListByImageResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByImage(
        resourceGroupName,
        devCenterName,
        galleryName,
        imageName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByImageNext(
        resourceGroupName,
        devCenterName,
        galleryName,
        imageName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByImagePagingAll(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
  ): AsyncIterableIterator<ImageVersion> {
    for await (const page of this.listByImagePagingPage(
      resourceGroupName,
      devCenterName,
      galleryName,
      imageName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists versions for an image.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  private _listByImage(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
  ): Promise<ImageVersionsListByImageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, galleryName, imageName, options },
      listByImageOperationSpec,
    );
  }

  /**
   * Gets an image version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param versionName The version of the image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    versionName: string,
    options?: ImageVersionsGetOptionalParams,
  ): Promise<ImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        devCenterName,
        galleryName,
        imageName,
        versionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListByImageNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param nextLink The nextLink from the previous successful call to the ListByImage method.
   * @param options The options parameters.
   */
  private _listByImageNext(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    nextLink: string,
    options?: ImageVersionsListByImageNextOptionalParams,
  ): Promise<ImageVersionsListByImageNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        devCenterName,
        galleryName,
        imageName,
        nextLink,
        options,
      },
      listByImageNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByImageOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageVersionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.galleryName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions/{versionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageVersion,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.galleryName,
    Parameters.imageName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByImageNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageVersionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink,
    Parameters.galleryName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
