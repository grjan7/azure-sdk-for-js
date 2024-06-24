/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a WorkloadNetworkVMGroup
 *
 * @summary Get a WorkloadNetworkVMGroup
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/WorkloadNetworks_GetVMGroup.json
 */
async function workloadNetworksGetVMGroup() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const vmGroupId = "vmGroup1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getVMGroup(
    resourceGroupName,
    privateCloudName,
    vmGroupId,
  );
  console.log(result);
}

async function main() {
  workloadNetworksGetVMGroup();
}

main().catch(console.error);
