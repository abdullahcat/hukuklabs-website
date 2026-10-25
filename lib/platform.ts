/**
 * Client-side platform detection for download routing.
 * Safe to call only in the browser (navigator).
 */

export type MobilePlatform = "ios" | "android" | "other"
export type DesktopPlatform = "mac" | "windows" | "other"

export function detectMobilePlatform(
  ua = typeof navigator !== "undefined" ? navigator.userAgent : "",
): MobilePlatform {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios"
  // iPadOS 13+ may report as Mac with touch
  if (
    typeof navigator !== "undefined" &&
    /Macintosh/i.test(ua) &&
    Number(navigator.maxTouchPoints) > 1
  ) {
    return "ios"
  }
  if (/Android/i.test(ua)) return "android"
  return "other"
}

export function detectDesktopPlatform(
  ua = typeof navigator !== "undefined" ? navigator.userAgent : "",
): DesktopPlatform {
  if (/Android|iPhone|iPad|iPod/i.test(ua)) return "other"
  if (/Mac OS X|Macintosh/i.test(ua)) return "mac"
  if (/Windows|Win64|Win32/i.test(ua)) return "windows"
  return "other"
}
