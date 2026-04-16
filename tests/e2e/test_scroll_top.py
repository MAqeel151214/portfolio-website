import os
import re
from playwright.sync_api import Page, expect, sync_playwright

def test_scroll_top_button(page: Page):
    # Get the absolute path to index.html
    path = os.path.abspath("index.html")
    page.goto(f"file://{path}")

    # 1. Initially, the scroll-top button should not have the 'active' class
    scroll_top_btn = page.locator(".scroll-top")
    expect(scroll_top_btn).not_to_have_class(re.compile(r"active"))

    # 2. Scroll down more than 100 pixels
    page.evaluate("window.scrollTo(0, 200)")

    # Wait for the scroll event to be handled
    page.wait_for_timeout(500)

    # 3. Verify it now has the 'active' class
    expect(scroll_top_btn).to_have_class(re.compile(r"active"))

    # 4. Scroll back to top
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)

    # 5. Verify 'active' class is removed
    expect(scroll_top_btn).not_to_have_class(re.compile(r"active"))

    # 6. Scroll down again to make it visible
    page.evaluate("window.scrollTo(0, 200)")
    page.wait_for_timeout(500)
    expect(scroll_top_btn).to_have_class(re.compile(r"active"))

    # 7. Click the button and verify it scrolls to top
    scroll_top_btn.click()
    page.wait_for_timeout(1000) # Wait for smooth scroll

    scroll_y = page.evaluate("window.scrollY")
    assert scroll_y == 0

    # 8. Verify 'active' class is removed after clicking and scrolling to top
    expect(scroll_top_btn).not_to_have_class(re.compile(r"active"))

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            test_scroll_top_button(page)
            print("Test passed!")
        except Exception as e:
            print(f"Test failed: {e}")
            exit(1)
        finally:
            browser.close()
