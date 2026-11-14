import { expect, test } from "@playwright/test";

test("home page exposes the current portfolio sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Abir Hossan/ })).toBeVisible();
  for (const id of ["home", "about", "projects", "skills", "contact"]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link")).toHaveCount(5);
  await expect(page.getByText("MY JOURNEY")).toHaveCount(0);
});

test("mobile navigation opens and closes after selecting a section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  await expect(navigation).toHaveClass(/is-open/);
  await navigation.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
});

test("all featured project case studies render", async ({ page }) => {
  for (const [slug, title] of [["studiospace", "StudioSpace"], ["bazardor", "BazarDor"], ["fitlog", "FitLog"]]) {
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(title);
    await expect(page.getByRole("heading", { name: "A closer look at the product" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Source Code/ })).toBeVisible();
  }
});

test("case study gallery opens and closes with the keyboard", async ({ page }) => {
  await page.goto("/projects/studiospace");
  await page.getByRole("button", { name: /Open image/ }).first().click();
  await expect(page.getByRole("dialog", { name: "Project screenshot viewer" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("contact form validates and reports missing email configuration", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[name="name"]').fill("Test User");
  await page.locator('input[name="email"]').fill("test@example.com");
  await page.locator('textarea[name="message"]').fill("This is a test message to check contact delivery.");
  await page.getByRole("button", { name: /Send Message/ }).click();
  await expect(page.getByRole("status")).toContainText(/not configured/i);
});

test("featured project links point to the supplied live applications", async ({ page }) => {
  await page.goto("/");
  const fitlog = page.locator(".project-card").filter({ hasText: "FitLog" });
  await expect(fitlog.getByRole("link", { name: /Live demo/ })).toHaveAttribute("href", "https://fit-log-project-ecru.vercel.app/");
  const bazardor = page.locator(".project-card").filter({ hasText: "BazarDor" });
  await expect(bazardor.getByRole("link", { name: /Live demo/ })).toHaveAttribute("href", "https://bazar-dor-chi-gold.vercel.app/");
});
