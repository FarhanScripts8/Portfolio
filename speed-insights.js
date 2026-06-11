/**
 * Vercel Speed Insights Integration
 * This file initializes Speed Insights for tracking web vitals and performance metrics
 */

import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// The function will automatically handle script injection and event tracking
injectSpeedInsights({
  // Debug mode is automatically enabled in development
  debug: false,
  // Sample rate: 1 = 100% of events sent (default)
  sampleRate: 1,
  // beforeSend can be used to filter or modify events before sending
  // Example: filter out events from certain routes
  // beforeSend: (event) => {
  //   if (event.url.includes('/admin')) {
  //     return null; // Don't send events from admin pages
  //   }
  //   return event;
  // }
});
