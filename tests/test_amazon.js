import page from "./page-model";

fixture`Amazon`.page`./`;

// Tests
test("Put first suggested item to the basket", async (t) => {
  await t
    .typeText(
      page.homePage.searchTextBox,
      "Agatha Christie And Then There Were None"
    )
    .click(page.homePage.searchSubmitButton)
    .click(page.firstSuggesttedItem)
    .click(page.addToCartButton)
    .click(page.checkoutButton)
    .expect(page.emailInput.exists)
    .ok();
});
