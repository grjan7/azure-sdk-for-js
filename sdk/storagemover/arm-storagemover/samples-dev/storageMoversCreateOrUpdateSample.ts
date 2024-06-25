/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageMover, StorageMoverClient } from "@azure/arm-storagemover";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a top-level Storage Mover resource.
 *
 * @summary Creates or updates a top-level Storage Mover resource.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2024-07-01/examples/StorageMovers_CreateOrUpdate.json
 */
async function storageMoversCreateOrUpdate() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] ||
    "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName =
    process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const storageMover: StorageMover = {
    description: "Example Storage Mover Description",
    location: "eastus2",
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.storageMovers.createOrUpdate(
    resourceGroupName,
    storageMoverName,
    storageMover,
  );
  console.log(result);
}

async function main() {
  storageMoversCreateOrUpdate();
}

main().catch(console.error);
