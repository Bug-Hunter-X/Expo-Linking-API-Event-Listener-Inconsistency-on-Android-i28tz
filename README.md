# Expo Linking API Event Listener Inconsistency on Android

This repository demonstrates a bug where the Expo `Linking.addEventListener` function inconsistently fires its callback, specifically when handling deep links on Android devices.  The issue results in deep links failing to trigger intended actions within the application.

## Bug Reproduction

1. Clone the repository.
2. Run the app on an Android emulator or physical device.
3. Attempt to open a deep link that the app is configured to handle.
4. Observe that the callback within `Linking.addEventListener` does not always execute.

## Potential Causes and Workarounds

While the root cause is not yet definitively identified, potential factors include background processes, Android system behavior variances, and potential conflicts with other libraries or native modules. The solution provided demonstrates a workaround involving multiple event listeners and state management to improve the reliability of deep link handling.

## Solution

The solution file demonstrates a more robust approach using multiple event listeners and state management to address the event listener inconsistency problem.