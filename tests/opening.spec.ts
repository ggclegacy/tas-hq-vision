import { expect, test, type Page } from "@playwright/test";

function silentWav() {
  const buffer = Buffer.alloc(2924);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(2916, 4);
  buffer.write("WAVEfmt ", 8);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(8_000, 24);
  buffer.writeUInt32LE(16_000, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(2880, 40);
  return buffer;
}

async function enterTas(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: /Begin Executive Preview/i }).click();
  await expect(page.getByLabel("TAS HQ executive introduction")).toBeVisible({ timeout: 8_000 });
  await page.getByRole("button", { name: "Enter Experience" }).click();
  await expect(page.getByLabel("TAS HQ vision overview")).toBeVisible({ timeout: 8_000 });
}

test.beforeEach(async ({ page }) => {
  await page.route("**/api/narration", (route) => route.fulfill({ status: 200, contentType: "audio/wav", body: silentWav() }));
});

test("personalized opening flows directly into TAS HQ", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.getByText("Blair Vidrine & Bailey Soileau", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: /Begin Executive Preview/i }).click();
  const intro = page.getByLabel("TAS HQ executive introduction");
  await expect(intro).toBeVisible({ timeout: 8_000 });
  await expect(intro.getByRole("button", { name: "Enter Experience" })).toBeVisible();
  await intro.getByRole("button", { name: "Enter Experience" }).click();
  await expect(page.getByLabel("TAS HQ vision overview")).toBeVisible({ timeout: 8_000 });
  await expect(page.getByRole("heading", { name: "More Than an Employee App" })).toBeVisible();
});

test("mobile journey is readable, touch sized, and overflow safe", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await enterTas(page);
  const growth = page.getByRole("button", { name: "Growth, Continuous Momentum" });
  await growth.scrollIntoViewIfNeeded();
  expect((await growth.boundingBox())!.height).toBeGreaterThanOrEqual(52);
  const explore = page.getByRole("button", { name: "Explore TAS HQ" });
  await explore.scrollIntoViewIfNeeded();
  expect((await explore.boundingBox())!.height).toBeGreaterThanOrEqual(52);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
