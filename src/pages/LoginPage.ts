import { expect,    type Locator, type Page } from '@playwright/test'
import { users } from '../config/users';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    public readonly errorMessage: Locator;
    public readonly dashboardHeader: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('button[type="submit"]');
        this.errorMessage = this.page.locator('.oxd-alert-content-text');
        this.dashboardHeader = this.page.locator('.oxd-topbar-header-title');
    }
  
    public async adminSuccessLogin() {
        await this.usernameInput.fill(users.admin.username);
        await this.passwordInput.fill(users.admin.password);
        await this.loginButton.click();
    }

    public async verifyAdminLoginSuccess() {
        await expect(this.dashboardHeader).toBeVisible();
        await expect(this.page).toHaveURL(/dashboard/);
    }

    public async essSuccessLogin() {
        await this.usernameInput.fill(users.ess.username);
        await this.passwordInput.fill(users.ess.password);
        await this.loginButton.click();
    }

    public async verifyEssLoginSuccess() {
        await expect(this.dashboardHeader).toBeVisible();
        await expect(this.page).toHaveURL(/dashboard/);
    }

    public async managerSuccessLogin() {
        await this.usernameInput.fill(users.manager.username);
        await this.passwordInput.fill(users.manager.password);
        await this.loginButton.click();
    }

    public async verifyManagerLoginSuccess() {
        await expect(this.dashboardHeader).toBeVisible();
        await expect(this.page).toHaveURL(/dashboard/);
    }
}