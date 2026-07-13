import { expect, test, type Page } from "@playwright/test";

function silentWav(durationSeconds = 0.18) {
  const sampleRate = 8_000;
  const samples = Math.floor(sampleRate * durationSeconds);
  const dataSize = samples * 2;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);
  return buffer;
}

async function openGateway(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: /Begin Executive Preview/i }).click();
  await expect(page.getByRole("heading", { name: "Welcome Blair" })).toBeVisible({ timeout: 8_000 });
  const enterExperience = page.getByRole("button", { name: /Enter Experience/i });
  const gatewayProgress = page.getByRole("navigation", { name: "Experience progress" });
  await expect(enterExperience).toBeEnabled();
  await page.waitForTimeout(250);
  await expect(async () => {
    if (!(await gatewayProgress.isVisible())) await enterExperience.click();
    await expect(gatewayProgress).toBeVisible({ timeout: 4_000 });
  }).toPass({ timeout: 10_000 });
  await expect(page.getByRole("article", { name: /TAS HQ/i })).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.route("**/api/narration", async (route) => {
    await route.fulfill({ status: 200, contentType: "audio/wav", body: silentWav() });
  });
});

test("opening transitions continuously into the interactive gateway", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await openGateway(page);

  await expect(page.getByText("Introduction", { exact: true })).toBeVisible();
  await expect(page.getByText("Vision Gateway", { exact: true })).toBeVisible();
  await expect(page.getByText("Primary Vision")).toBeVisible();
  await expect(page.getByText("Future Vision")).toBeVisible();

  const compassAction = page.getByRole("button", { name: "Preview the Vision" });
  await compassAction.hover();
  await expect(page.getByText(/personalized platform for discovery/i)).toBeVisible();
  await compassAction.focus();
  await page.keyboard.press("Enter");

  const compassDialog = page.getByRole("dialog", { name: "Apothecary Compass" });
  await expect(compassDialog).toBeVisible();
  await expect(compassDialog.getByText("Pharmacist-ready Visit Brief")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(compassDialog).toBeHidden();
  await expect(compassAction).toBeFocused();

  const tasAction = page.getByRole("button", { name: "Begin with TAS HQ" });
  await tasAction.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText("Coming in the next build section")).toBeVisible();
  await page.getByRole("button", { name: "Back to Vision Gateway" }).click();
  await expect(tasAction).toBeVisible();
});

test("narration controls and return path remain operable", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 820 });
  let narrationRequests = 0;
  await page.unroute("**/api/narration");
  await page.route("**/api/narration", async (route) => {
    narrationRequests += 1;
    await route.fulfill({ status: 200, contentType: "audio/wav", body: silentWav() });
  });
  await openGateway(page);

  await expect.poll(() => narrationRequests).toBeGreaterThanOrEqual(2);
  const beforeReplay = narrationRequests;
  await page.getByRole("button", { name: "Replay Narration" }).click();
  await expect.poll(() => narrationRequests).toBeGreaterThan(beforeReplay);

  const mute = page.getByRole("button", { name: "Mute", exact: true });
  await mute.click();
  await expect(page.getByRole("button", { name: "Unmute", exact: true })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Transcript" }).click();
  await expect(page.getByLabel("Onyx narration transcript")).toBeVisible();
  await page.getByRole("button", { name: "Continue Without Audio" }).click();
  await page.getByRole("button", { name: "Return to Introduction" }).click();
  await expect(page.getByRole("heading", { name: "Welcome Blair" })).toBeVisible();
});

test("mobile layout stacks platforms without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openGateway(page);

  const tasPortal = page.getByRole("article", { name: /TAS HQ/i });
  const compassPortal = page.getByRole("article", { name: /Apothecary Compass/i });
  const tasBox = await tasPortal.boundingBox();
  const compassBox = await compassPortal.boundingBox();

  expect(tasBox).not.toBeNull();
  expect(compassBox).not.toBeNull();
  expect(compassBox!.y).toBeGreaterThan(tasBox!.y + tasBox!.height);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole("button", { name: "Replay Narration" })).toBeVisible();
});
