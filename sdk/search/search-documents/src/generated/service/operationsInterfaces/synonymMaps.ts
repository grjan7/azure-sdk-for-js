/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  SynonymMap,
  SynonymMapsCreateOrUpdateOptionalParams,
  SynonymMapsCreateOrUpdateResponse,
  SynonymMapsDeleteOptionalParams,
  SynonymMapsGetOptionalParams,
  SynonymMapsGetResponse,
  SynonymMapsListOptionalParams,
  SynonymMapsListResponse,
  SynonymMapsCreateOptionalParams,
  SynonymMapsCreateResponse
} from "../models";

/** Interface representing a SynonymMaps. */
export interface SynonymMaps {
  /**
   * Creates a new synonym map or updates a synonym map if it already exists.
   * @param synonymMapName The name of the synonym map to create or update.
   * @param synonymMap The definition of the synonym map to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    synonymMapName: string,
    synonymMap: SynonymMap,
    options?: SynonymMapsCreateOrUpdateOptionalParams
  ): Promise<SynonymMapsCreateOrUpdateResponse>;
  /**
   * Deletes a synonym map.
   * @param synonymMapName The name of the synonym map to delete.
   * @param options The options parameters.
   */
  delete(
    synonymMapName: string,
    options?: SynonymMapsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Retrieves a synonym map definition.
   * @param synonymMapName The name of the synonym map to retrieve.
   * @param options The options parameters.
   */
  get(
    synonymMapName: string,
    options?: SynonymMapsGetOptionalParams
  ): Promise<SynonymMapsGetResponse>;
  /**
   * Lists all synonym maps available for a search service.
   * @param options The options parameters.
   */
  list(
    options?: SynonymMapsListOptionalParams
  ): Promise<SynonymMapsListResponse>;
  /**
   * Creates a new synonym map.
   * @param synonymMap The definition of the synonym map to create.
   * @param options The options parameters.
   */
  create(
    synonymMap: SynonymMap,
    options?: SynonymMapsCreateOptionalParams
  ): Promise<SynonymMapsCreateResponse>;
}
