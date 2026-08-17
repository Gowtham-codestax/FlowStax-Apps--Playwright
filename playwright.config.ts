/**
 * FLOWSTAX APPS - Playwright + TypeScript configuration
 *
 * All browsers launch in a fully maximized window.
 */
import { defineConfig } from '@playwright/test';

export default defineConfig({
  
 //📁Test location
  testDir: './tests',


 //⚡Run tests inside files in parallel,  serial ordering is handled per-file via test.describe.serial()
  fullyParallel: false,

  forbidOnly: !!process.env.CI,
 // retries: process.env.CI ? 1 : 0,

 //🔁Retry failed tests 
  retries:1,

 //🚀 Parallel execution
  workers: 5,


 // test can run for minutes. The default per-test timeout (30s) is far too low.
  timeout: 2 * 60 * 1000, // 2 minutes per test (whole TestNG flow is one long serial test)

 //⏱️Expect assertion timeout
  expect: { timeout: 30_000 },


 //👀Reporters
  reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'allure-results'}],

    ['html', { outputFolder: 'reports/html', open: 'always' }], // open: 'never' | 'on-failure' | 'always'
    ['json', { outputFile: 'reports/results.json' }],
  ],

 //Artifacts -> screenshots / videos / traces
  outputDir: './test-results',


  //🌐Browser settings
  use: {
    baseURL: 'https://staging.flow.stax.run/login',

    // Browser visibility
    headless: false,

    // Viewport
    viewport: null, // use the real (maximized) window size

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Action timeout
    actionTimeout: 60_000,

    // Navigation timeout
    navigationTimeout: 60_000,

    // Screenshot
    screenshot: 'only-on-failure',
    
    // Video
    video: 'retain-on-failure',
    // Trace
    trace: 'retain-on-failure',
  },

  // NOTE: viewport:null gives a real (maximized) window. We intentionally do NOT
  // spread devices[...] here, because those presets set deviceScaleFactor, which
  // Playwright forbids together with viewport:null.


  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },

    /*    
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },
    {
      name: 'edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: null,
        launchOptions: { args: ['--start-maximized']},
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: null,
        launchOptions : {args: ['--start-maximized']},
      },
    }, 
    */
  ],


});
