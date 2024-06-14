/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabase,
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesGetResponse,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesCreateOrUpdateResponse,
  AutonomousDatabaseUpdate,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesUpdateResponse,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesDeleteResponse,
  PeerDbDetails,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesFailoverResponse,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesGenerateWalletResponse,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesSwitchoverResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AutonomousDatabases. */
export interface AutonomousDatabases {
  /**
   * List AutonomousDatabase resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AutonomousDatabasesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AutonomousDatabase>;
  /**
   * List AutonomousDatabase resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AutonomousDatabasesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AutonomousDatabase>;
  /**
   * Get a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesGetOptionalParams,
  ): Promise<AutonomousDatabasesGetResponse>;
  /**
   * Create a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    autonomousdatabasename: string,
    resource: AutonomousDatabase,
    options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AutonomousDatabasesCreateOrUpdateResponse>,
      AutonomousDatabasesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    autonomousdatabasename: string,
    resource: AutonomousDatabase,
    options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
  ): Promise<AutonomousDatabasesCreateOrUpdateResponse>;
  /**
   * Update a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    autonomousdatabasename: string,
    properties: AutonomousDatabaseUpdate,
    options?: AutonomousDatabasesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AutonomousDatabasesUpdateResponse>,
      AutonomousDatabasesUpdateResponse
    >
  >;
  /**
   * Update a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    autonomousdatabasename: string,
    properties: AutonomousDatabaseUpdate,
    options?: AutonomousDatabasesUpdateOptionalParams,
  ): Promise<AutonomousDatabasesUpdateResponse>;
  /**
   * Delete a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AutonomousDatabasesDeleteResponse>,
      AutonomousDatabasesDeleteResponse
    >
  >;
  /**
   * Delete a AutonomousDatabase
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesDeleteOptionalParams,
  ): Promise<AutonomousDatabasesDeleteResponse>;
  /**
   * Perform failover action on Autonomous Database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginFailover(
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesFailoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AutonomousDatabasesFailoverResponse>,
      AutonomousDatabasesFailoverResponse
    >
  >;
  /**
   * Perform failover action on Autonomous Database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginFailoverAndWait(
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesFailoverOptionalParams,
  ): Promise<AutonomousDatabasesFailoverResponse>;
  /**
   * Generate wallet action on Autonomous Database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  generateWallet(
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: GenerateAutonomousDatabaseWalletDetails,
    options?: AutonomousDatabasesGenerateWalletOptionalParams,
  ): Promise<AutonomousDatabasesGenerateWalletResponse>;
  /**
   * Perform switchover action on Autonomous Database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginSwitchover(
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesSwitchoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AutonomousDatabasesSwitchoverResponse>,
      AutonomousDatabasesSwitchoverResponse
    >
  >;
  /**
   * Perform switchover action on Autonomous Database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autonomousdatabasename The database name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginSwitchoverAndWait(
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesSwitchoverOptionalParams,
  ): Promise<AutonomousDatabasesSwitchoverResponse>;
}
