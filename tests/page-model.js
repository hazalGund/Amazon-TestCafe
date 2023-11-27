import { Selector } from "testcafe";

class Page {
  constructor() {
    this.homePage = {
      searchTextBox       : Selector("#twotabsearchtextbox"),
      searchSubmitButton  : Selector("#nav-search-submit-button"),
    };
    this.firstSuggesttedItem = Selector('.s-result-item').nth(0);
    this.addToCartButton     = Selector("#add-to-cart-button");
    this.checkoutButton      = Selector('[data-feature-id="proceed-to-checkout-action"]')
    this.emailInput          = Selector('#ap_email')
  }
}

export default new Page();
