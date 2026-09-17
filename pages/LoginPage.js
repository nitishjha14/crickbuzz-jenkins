class LoginPage {
  constructor (page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.locator('[type="submit"]');
  }

  async goto() {
    await this.goto("/web/index.php/auth/login");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.passwordfill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
