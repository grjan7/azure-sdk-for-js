/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the Defender for Storage settings for the specified storage account.
 *
 * @summary Gets the Defender for Storage settings for the specified storage account.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-12-01-preview/examples/DefenderForStorage/GetDefenderForStorageSettings_example.json
 */
async function getsTheDefenderForStorageSettingsForTheSpecifiedResource() {
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount";
  const settingName = "current";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.defenderForStorage.get(resourceId, settingName);
  console.log(result);
}

async function main() {
  getsTheDefenderForStorageSettingsForTheSpecifiedResource();
}

main().catch(console.error);
