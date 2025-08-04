import { device, expect, element, by, waitFor } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      launchArgs: {
        disableNetworkSync: true,
      },
    });
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('welcome_text'))).toBeVisible();
  });

  it('should display welcome text', async () => {
    await expect(element(by.id('welcome_text'))).toHaveText('Welcome to Detox');
  });

  it('should enter email and password and tap login', async () => {
    // Wait for email input to be visible
    await expect(element(by.id('email-input'))).toBeVisible();

    // Type email
    await element(by.id('email-input')).typeText('testuser@example.com');

    // Type password
    await element(by.id('password-input')).typeText('MySecret123');

    // Dismiss keyboard if needed
    await device.pressBack(); // Especially useful on Android

    // Tap login button
    await element(by.id('login-button')).tap();
  });

  it('should display user info after login', async () => {
    await waitFor(element(by.id('user-info'))).toBeVisible();
    await expect(element(by.id('user-info'))).toBeVisible();
    await expect(element(by.text('Welcome, Demo User!'))).toBeVisible();
    await expect(element(by.text('Email: testuser@example.com'))).toBeVisible();
  });
});
