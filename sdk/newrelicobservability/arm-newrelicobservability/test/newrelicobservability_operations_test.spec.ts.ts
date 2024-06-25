/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { CreateTestCredentialOptions, createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { NewRelicObservability } from "../src/newRelicObservability";

const replaceableVariables: Record<string, string> = {
  NewRelic_CLIENT_ID: "azure_client_id",
  NewRelic_CLIENT_SECRET: "azure_client_secret",
  NewRelic_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  NewRelic_SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK4001", // url should not be over-sanitized, fake env setup handles it already
    "AZSDK3493",
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("NewRelicObservability test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let tenantId: string;
  let client: NewRelicObservability;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.NewRelic_SUBSCRIPTION_ID || "";
    tenantId = env.NewRelic_TENANT_ID || "";
    const credentialOptions: CreateTestCredentialOptions = {
      tenantId,
    };
    // This is an example of how the environment variables are used
    const credential = createTestCredential(credentialOptions);
    client = new NewRelicObservability(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "centraluseuap";
    resourceGroup = "myjstest";
    resourcename = "resourcetest1";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("operations list test", async function () {
    const resArray = new Array();
    for await (let item of client.operations.list()) {
      resArray.push(item);
    }
  });

  it("monitors create test", async function () {
    const res = await client.monitors.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourcename,
      {
        location,
        userInfo: {
          firstName: "ZiWei",
          lastName: "Chen (WICRESOFT NORTH AMERICA LTD)",
          emailAddress: "v-ziweichen@microsoft.com",
          phoneNumber: "",
        },
        planData: {
          usageType: "PAYG",
          billingCycle: "MONTHLY",
          planDetails:
            "newrelic-pay-as-you-go-free-live@TIDgmz7xq9ge3py@PUBIDnewrelicinc1635200720692.newrelic_liftr_payg",
        },
      },
      testPollingOptions,
    );
    assert.equal(res.name, resourcename);
    await delay(isPlaybackMode() ? 1000 : 100000);
  });

  it("monitors get test", async function () {
    const res = await client.monitors.get(resourceGroup, resourcename);
    assert.equal(res.name, resourcename);
  });

  it("monitors list test", async function () {
    const resArray = new Array();
    for await (let item of client.monitors.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 2);
  });

  it("monitors delete test", async function () {
    const resArray = new Array();
    const res = await client.monitors.beginDeleteAndWait(resourceGroup, "v-ziweichen@microsoft.com", resourcename, testPollingOptions
    )
    for await (let item of client.monitors.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });
});
