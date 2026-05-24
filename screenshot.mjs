import { chromium } from "playwright";

async function scrollAndShoot(page, outFile) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let scrolled = 0;
      const step = 250;
      const id = setInterval(() => {
        window.scrollBy(0, step);
        scrolled += step;
        if (scrolled >= document.body.scrollHeight) { clearInterval(id); resolve(); }
      }, 80);
    });
  });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: outFile, fullPage: true });
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:5174", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
await scrollAndShoot(page, "preview-desktop.png");

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://localhost:5174", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
await scrollAndShoot(page, "preview-mobile.png");

await browser.close();
console.log("Done.");
