// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare global {
  // stub these out for the browser
  function btoa(input: string): string;
  function atob(input: string): string;
}

/** The supported character encoding type */
export type EncodingType = "utf-8" | "base64" | "base64url" | "hex";

/**
 * The helper that transforms bytes with specific character encoding into string
 * @param bytes - the uint8array bytes
 * @param format - the format we use to encode the byte
 * @returns a string of the encoded string
 */
export function uint8ArrayToString(bytes: Uint8Array, format: EncodingType): string {
  switch (format) {
    case "utf-8":
      return uint8ArrayToUtf8String(bytes);
    case "base64":
      return uint8ArrayToBase64(bytes);
    case "base64url":
      return uint8ArrayToBase64Url(bytes);
    case "hex":
      return uint8ArrayToHexString(bytes);
  }
}

/**
 * The helper that transforms string to specific character encoded bytes array.
 * @param value - the string to be converted
 * @param format - the format we use to decode the value
 * @returns a uint8array
 */
export function stringToUint8Array(value: string, format: EncodingType): Uint8Array {
  switch (format) {
    case "utf-8":
      return utf8StringToUint8Array(value);
    case "base64":
      return base64ToUint8Array(value);
    case "base64url":
      return base64UrlToUint8Array(value);
    case "hex":
      return hexStringToUint8Array(value);
  }
}

/**
 * Decodes a Uint8Array into a Base64 string.
 * @internal
 */
export function uint8ArrayToBase64(bytes: Uint8Array): string {
  return btoa([...bytes].map((x) => String.fromCharCode(x)).join(""));
}

/**
 * Decodes a Uint8Array into a Base64Url string.
 * @internal
 */
export function uint8ArrayToBase64Url(bytes: Uint8Array): string {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Decodes a Uint8Array into a javascript string.
 * @internal
 */
export function uint8ArrayToUtf8String(bytes: Uint8Array): string {
  const decoder = new TextDecoder();
  const dataString = decoder.decode(bytes);
  return dataString;
}

/**
 * Decodes a Uint8Array into a hex string
 * @internal
 */
export function uint8ArrayToHexString(bytes: Uint8Array): string {
  return [...bytes].map((x) => x.toString(16).padStart(2, "0")).join("");
}

/**
 * Encodes a JavaScript string into a Uint8Array.
 * @internal
 */
export function utf8StringToUint8Array(value: string): Uint8Array {
  return new TextEncoder().encode(value);
}

/**
 * Encodes a Base64 string into a Uint8Array.
 * @internal
 */
export function base64ToUint8Array(value: string): Uint8Array {
  return new Uint8Array([...atob(value)].map((x) => x.charCodeAt(0)));
}

/**
 * Encodes a Base64Url string into a Uint8Array.
 * @internal
 */
export function base64UrlToUint8Array(value: string): Uint8Array {
  const base64String = value.replace(/-/g, "+").replace(/_/g, "/");
  return base64ToUint8Array(base64String);
}

const hexDigits = new Set("0123456789abcdefABCDEF");

/**
 * Encodes a hex string into a Uint8Array
 * @internal
 */
export function hexStringToUint8Array(value: string): Uint8Array {
  // If value has odd length, the last character will be ignored, consistent with NodeJS Buffer behavior
  const bytes = new Uint8Array(value.length / 2);
  for (let i = 0; i < value.length / 2; ++i) {
    const highNibble = value[2 * i];
    const lowNibble = value[2 * i + 1];
    if (!hexDigits.has(highNibble) || !hexDigits.has(lowNibble)) {
      // Replicate Node Buffer behavior by exiting early when we encounter an invalid byte
      return bytes.slice(0, i);
    }

    bytes[i] = parseInt(`${highNibble}${lowNibble}`, 16);
  }

  return bytes;
}
