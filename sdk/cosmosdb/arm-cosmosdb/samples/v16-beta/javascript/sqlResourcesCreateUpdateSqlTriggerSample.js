/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL trigger
 *
 * @summary Create or update an Azure Cosmos DB SQL trigger
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-05-15-preview/examples/CosmosDBSqlTriggerCreateUpdate.json
 */
async function cosmosDbSqlTriggerCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const triggerName = "triggerName";
  const createUpdateSqlTriggerParameters = {
    options: {},
    resource: {
      body: "body",
      id: "triggerName",
      triggerOperation: "triggerOperation",
      triggerType: "triggerType",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlTriggerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    triggerName,
    createUpdateSqlTriggerParameters,
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlTriggerCreateUpdate();
}

main().catch(console.error);
