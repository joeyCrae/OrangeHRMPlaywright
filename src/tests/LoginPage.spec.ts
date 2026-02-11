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

  test('2 - should successfully log in as ess', async () => {
    await test.step('ESS logs in', async () => {
      await loginPage.essSuccessLogin();
    });

    await test.step('Verify ESS login success', async () => {
      await loginPage.verifyEssLoginSuccess();
    });
  });

  test('3 - should successfully log in as manager', async () => {
    await test.step('Manager logs in', async () => {
      await loginPage.managerSuccessLogin();
    });

    await test.step('Verify manager login success', async () => {
      await loginPage.verifyManagerLoginSuccess();
    });
  });

  
});
