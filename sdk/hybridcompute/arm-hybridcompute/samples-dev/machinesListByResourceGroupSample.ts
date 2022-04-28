/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines.
 *
 * @summary Lists all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2021-06-10-preview/examples/Machines_ListByResourceGroup.json
 */
async function listMachinesByResourceGroup() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.machines.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listMachinesByResourceGroup().catch(console.error);