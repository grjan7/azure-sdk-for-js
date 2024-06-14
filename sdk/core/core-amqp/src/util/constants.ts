// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const Constants = {
  associatedLinkName: "associated-link-name",
  partitionKey: "x-opt-partition-key",
  sequenceNumber: "x-opt-sequence-number",
  enqueueSequenceNumber: "x-opt-enqueue-sequence-number",
  enqueuedTime: "x-opt-enqueued-time",
  scheduledEnqueueTime: "x-opt-scheduled-enqueue-time",
  offset: "x-opt-offset",
  lockedUntil: "x-opt-locked-until",
  partitionIdName: "x-opt-partition-id",
  publisher: "x-opt-publisher-name",
  viaPartitionKey: "x-opt-via-partition-key",
  deadLetterSource: "x-opt-deadletter-source",
  messageState: "x-opt-message-state",
  enqueuedTimeAnnotation: `amqp.annotation.x-opt-enqueued-time`,
  offsetAnnotation: `amqp.annotation.x-opt-offset`,
  sequenceNumberAnnotation: `amqp.annotation.x-opt-sequence-number`,
  guidSize: 16,
  message: "message",
  error: "error",
  statusCode: "status-code",
  statusDescription: "status-description",
  errorCondition: "error-condition",
  management: "$management",
  partition: "partition",
  partitionId: "partitionId",
  readOperation: "READ",
  TLS: "tls",
  TCP: "tcp",
  establishConnection: "establishConnection",
  defaultConsumerGroup: "$default",
  eventHub: "eventhub",
  cbsEndpoint: "$cbs",
  cbsReplyTo: "cbs",
  operationPutToken: "put-token",
  aadEventHubsAudience: "https://eventhubs.azure.net/",
  aadEventHubsScope: "https://eventhubs.azure.net//.default",
  aadServiceBusAudience: "https://servicebus.azure.net/",
  aadServiceBusScope: "https://servicebus.azure.net//.default",
  maxUserAgentLength: 512,
  vendorString: "com.microsoft",
  attachEpoch: `com.microsoft:epoch`,
  receiverIdentifierName: `com.microsoft:receiver-name`,
  enableReceiverRuntimeMetricName: `com.microsoft:enable-receiver-runtime-metric`,
  geoReplication: `com.microsoft:georeplication`,
  timespan: `com.microsoft:timespan`,
  uri: `com.microsoft:uri`,
  dateTimeOffset: `com.microsoft:datetime-offset`,
  sessionFilterName: `com.microsoft:session-filter`,
  receiverError: "receiver_error",
  senderError: "sender_error",
  sessionError: "session_error",
  connectionError: "connection_error",
  defaultOperationTimeoutInMs: 60000,
  defaultConnectionIdleTimeoutInMs: 60000,
  managementRequestKey: "managementRequest",
  negotiateCbsKey: "negotiateCbs",
  negotiateClaim: "negotiateClaim",
  ensureContainerAndBlob: "ensureContainerAndBlob",
  defaultPrefetchCount: 1000,
  reconnectLimit: 100,
  maxMessageIdLength: 128,
  maxPartitionKeyLength: 128,
  maxSessionIdLength: 128,
  pathDelimiter: "/",
  ruleNameMaximumLength: 50,
  maximumSqlFilterStatementLength: 1024,
  maximumSqlRuleActionStatementLength: 1024,
  maxDeadLetterReasonLength: 4096,
  // https://stackoverflow.com/questions/11526504/minimum-and-maximum-date for js
  // However we are setting this to the TimeSpan.MaxValue of C#.
  maxDurationValue: 922337203685477,
  minDurationValue: -922337203685477,
  // https://github.com/Azure/azure-amqp/blob/master/Microsoft.Azure.Amqp/Amqp/AmqpConstants.cs#L47
  maxAbsoluteExpiryTime: new Date("9999-12-31T07:59:59.000Z").getTime(),
  maxUint32Value: 4294967295,
  aadTokenValidityMarginInMs: 5000,
  connectionReconnectDelay: 300,
  defaultMaxRetries: 3,
  defaultMaxRetriesForConnection: 150,
  defaultDelayBetweenOperationRetriesInMs: 30000,
  defaultMaxDelayForExponentialRetryInMs: 90000,
  receiverSettleMode: "receiver-settle-mode",
  dispositionStatus: "disposition-status",
  fromSequenceNumber: "from-sequence-number",
  messageCount: "message-count",
  enqueuedTimeUtc: "enqueued-time-utc",
  lockTokens: "lock-tokens",
  messageIdMapKey: "message-id",
  sequenceNumberMapKey: "sequence-number",
  lockTokenMapKey: "lock-token",
  sessionIdMapKey: "session-id",
  sequenceNumbers: "sequence-numbers",
  deadLetterReason: "deadletter-reason",
  deadLetterDescription: "deadletter-description",
  propertiesToModify: "properties-to-modify",
  deadLetterName: "com.microsoft:dead-letter",
  trackingId: "com.microsoft:tracking-id",
  serverTimeout: "com.microsoft:server-timeout",
  operations: {
    putToken: "put-token",
    read: "READ",
    cancelScheduledMessage: "com.microsoft:cancel-scheduled-message",
    scheduleMessage: "com.microsoft:schedule-message",
    renewLock: "com.microsoft:renew-lock",
    peekMessage: "com.microsoft:peek-message",
    receiveBySequenceNumber: "com.microsoft:receive-by-sequence-number",
    deleteMessages: "com.microsoft:batch-delete-messages",
    updateDisposition: "com.microsoft:update-disposition",
    renewSessionLock: "com.microsoft:renew-session-lock",
    setSessionState: "com.microsoft:set-session-state",
    getSessionState: "com.microsoft:get-session-state",
    enumerateSessions: "com.microsoft:get-message-sessions",
    addRule: "com.microsoft:add-rule",
    removeRule: "com.microsoft:remove-rule",
    enumerateRules: "com.microsoft:enumerate-rules",
  },
  descriptorCodes: {
    ruleDescriptionList: 1335734829060,
    sqlFilterList: 83483426822,
    correlationFilterList: 83483426825,
    sqlRuleActionList: 1335734829062,
    trueFilterList: 83483426823,
    falseFilterList: 83483426824,
  },
} as const;

/**
 * The standard error message accompanying an AbortError.
 * @hidden
 */
export const StandardAbortMessage = "The operation was aborted.";
