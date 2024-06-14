/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Removes the subscription from GroupQuotas. The request's TenantId is validated against the subscription's TenantId.
 *
 * @summary Removes the subscription from GroupQuotas. The request's TenantId is validated against the subscription's TenantId.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/GroupQuotasSubscriptions/DeleteGroupQuotaSubscriptions.json
 */
async function groupQuotaSubscriptionsDeleteSubscriptions() {
  const subscriptionId =
    process.env["QUOTA_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential, subscriptionId);
  const result = await client.groupQuotaSubscriptions.beginDeleteAndWait(
    managementGroupId,
    groupQuotaName,
  );
  console.log(result);
}

async function main() {
  groupQuotaSubscriptionsDeleteSubscriptions();
}

main().catch(console.error);
