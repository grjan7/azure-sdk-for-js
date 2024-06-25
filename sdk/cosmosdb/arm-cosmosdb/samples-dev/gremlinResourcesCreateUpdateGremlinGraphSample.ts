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
  GremlinGraphCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Gremlin graph
 *
 * @summary Create or update an Azure Cosmos DB Gremlin graph
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-05-15-preview/examples/CosmosDBGremlinGraphCreateUpdate.json
 */
async function cosmosDbGremlinGraphCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const graphName = "graphName";
  const createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters =
    {
      location: "West US",
      options: {},
      resource: {
        conflictResolutionPolicy: {
          conflictResolutionPath: "/path",
          mode: "LastWriterWins",
        },
        defaultTtl: 100,
        id: "graphName",
        indexingPolicy: {
          automatic: true,
          excludedPaths: [],
          includedPaths: [
            {
              path: "/*",
              indexes: [
                { dataType: "String", kind: "Range", precision: -1 },
                { dataType: "Number", kind: "Range", precision: -1 },
              ],
            },
          ],
          indexingMode: "consistent",
        },
        partitionKey: { kind: "Hash", paths: ["/AccountNumber"] },
        uniqueKeyPolicy: { uniqueKeys: [{ paths: ["/testPath"] }] },
      },
      tags: {},
    };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.gremlinResources.beginCreateUpdateGremlinGraphAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      graphName,
      createUpdateGremlinGraphParameters,
    );
  console.log(result);
}

async function main() {
  cosmosDbGremlinGraphCreateUpdate();
}

main().catch(console.error);
