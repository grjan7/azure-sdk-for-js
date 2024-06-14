// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @internal
 */
export const SDK_VERSION: string = "1.3.0";

/**
 * Known values for Monitor Audience
 */
export enum KnownMonitorAudience {
  /**
   * Audience for Azure China
   */
  AzureChina = "https://monitor.azure.cn",
  /**
   * Audience for Azure Government
   */
  AzureGovernment = "https://monitor.azure.us",
  /**
   * Audience for Azure Public
   */
  AzurePublicCloud = "https://monitor.azure.com",
}
