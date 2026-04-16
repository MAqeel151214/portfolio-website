import asyncio
from playwright.async_api import async_playwright
import os

async def test_scrollspy():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        filepath = f"file://{os.path.abspath('index.html')}"
        await page.goto(filepath)

        # Give some time for AOS and initial setup
        await page.wait_for_timeout(2000)

        # Check initial state (should be hero active)
        active_link = await page.locator('.navmenu a.active').text_content()
        assert "Home" in active_link, f"Expected 'Home', got '{active_link}'"

        # Scroll down to About section
        await page.evaluate("document.querySelector('#about').scrollIntoView()")
        await page.wait_for_timeout(1000)

        active_link = await page.locator('.navmenu a.active').text_content()
        assert "About" in active_link, f"Expected 'About', got '{active_link}'"

        # Scroll down to Resume section
        await page.evaluate("document.querySelector('#resume').scrollIntoView()")
        await page.wait_for_timeout(1000)

        active_link = await page.locator('.navmenu a.active').text_content()
        assert "Resume" in active_link, f"Expected 'Resume', got '{active_link}'"

        print("Scrollspy tests passed!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(test_scrollspy())
