/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OracleDatabaseManagementClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a VirtualNetworkAddress
 *
 * @summary Get a VirtualNetworkAddress
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/preview/2023-09-01-preview/examples/virtualNetworkAddresses_get.json
 */
async function getVirtualNetworkAddress() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudvmclustername = "cluster1";
  const virtualnetworkaddressname = "hostname1";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkAddresses.get(
    resourceGroupName,
    cloudvmclustername,
    virtualnetworkaddressname,
  );
  console.log(result);
}

async function main() {
  getVirtualNetworkAddress();
}

main().catch(console.error);
