/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ThroughputPoolAccountResource,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB ThroughputPool account. The "Update" method is preferred when performing updates on an account.
 *
 * @summary Creates or updates an Azure Cosmos DB ThroughputPool account. The "Update" method is preferred when performing updates on an account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-05-15-preview/examples/throughputPool/CosmosDBThroughputPoolAccountCreate.json
 */
async function cosmosDbThroughputPoolAccountCreate() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const throughputPoolName = "tp1";
  const throughputPoolAccountName = "db1";
  const body: ThroughputPoolAccountResource = {
    accountLocation: "West US",
    accountResourceIdentifier:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/providers/Microsoft.DocumentDB/resourceGroup/rg1/databaseAccounts/db1/",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.throughputPoolAccount.beginCreateAndWait(
    resourceGroupName,
    throughputPoolName,
    throughputPoolAccountName,
    body,
  );
  console.log(result);
}

async function main() {
  cosmosDbThroughputPoolAccountCreate();
}

main().catch(console.error);
