import { test } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com');
  });

  test('1 - should successfully log in as admin adn verify successful login', async () => {
    await test.step('Admin logs in', async () => {
      await loginPage.adminSuccessLogin();
    });

    await test.step('Verify admin login success', async () => {
      await loginPage.verifyAdminLoginSuccess();
    });
  });

  test('2 - should login with invalid credentials', async () => {
    await test.step('User logs in with invalid credentials', async () => {
      await loginPage.invalidLogin();
    });

    await test.step('Verify login failure', async () => {
      await loginPage.verifyLoginFailure();
    });
  });
});
