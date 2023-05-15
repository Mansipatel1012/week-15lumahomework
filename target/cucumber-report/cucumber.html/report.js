$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gear.feature");
formatter.feature({
  "line": 2,
  "name": "Gear Test",
  "description": "As A user i want to add products successfull to shopping cart",
  "id": "gear-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 14453475600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to add products to shopping cart",
  "description": "",
  "id": "gear-test;user-should-be-able-to-add-products-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on bags",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on product name Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the text overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change qty 3",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Overnight Duffle to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click and shopping cart message",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the Qty 3",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify product price $135.00",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I change Qty to 5",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on update shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the product price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 746547400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_mouse_hover_on_gear_menu()"
});
formatter.result({
  "duration": 1199014500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_bags()"
});
formatter.result({
  "duration": 2670774900,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_product_name_Overnight_Duffle()"
});
formatter.result({
  "duration": 3547742100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_the_text_overnight_Duffle()"
});
formatter.result({
  "duration": 78353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.i_change_qty(int)"
});
formatter.result({
  "duration": 596051100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 165233200,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_text_You_added_Overnight_Duffle_to_your_shopping_cart()"
});
formatter.result({
  "duration": 3660355400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_and_shopping_cart_message()"
});
formatter.result({
  "duration": 2876820000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "GearTestSteps.i_verify_the_Qty(int)"
});
formatter.result({
  "duration": 40132057800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#cart-147204-qty\"}\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4ac6eaac25138ee204359be5f6c407b1, findElement {using\u003dcss selector, value\u003d#cart-147204-qty}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\sudha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62400}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62400/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4ac6eaac25138ee204359be5f6c407b1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.softwaretestingboard.magento.utilities.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.softwaretestingboard.magento.pages.GearPage.verifyQty3(GearPage.java:144)\r\n\tat com.softwaretestingboard.magento.steps.GearTestSteps.i_verify_the_Qty(GearTestSteps.java:57)\r\n\tat ✽.Then I verify the Qty 3(gear.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 24
    },
    {
      "val": "00",
      "offset": 28
    }
  ],
  "location": "GearTestSteps.iProductPrice$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.i_change_Qty_to(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_update_shopping_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 28
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "GearTestSteps.i_verify_the_product_price_$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1461929600,
  "status": "passed"
});
formatter.uri("men.feature");
formatter.feature({
  "line": 2,
  "name": "Men test",
  "description": "As a user I want to add the product in shopping cart",
  "id": "men-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 9346927400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to add products in shopping cart",
  "description": "",
  "id": "men-test;user-should-able-to-add-products-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on pants",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on cronus yoga pant",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on size 32",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on black colour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Cronus Yoga Pant to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify product name cronus yoga pant",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify Product size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify the product colour Black",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_men_menu()"
});
formatter.result({
  "duration": 940193300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_bottoms()"
});
formatter.result({
  "duration": 199125800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_pants()"
});
formatter.result({
  "duration": 2154789900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_cronus_yoga_pant()"
});
formatter.result({
  "duration": 664607900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 16
    }
  ],
  "location": "MenTestSteps.i_click_on_size(int)"
});
formatter.result({
  "duration": 318107800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_black_colour()"
});
formatter.result({
  "duration": 301094500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_add_to_cart()"
});
formatter.result({
  "duration": 294693100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_You_added_Cronus_Yoga_Pant_to_your_shopping_cart()"
});
formatter.result({
  "duration": 1994947600,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_shopping_cart_link()"
});
formatter.result({
  "duration": 4613472100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_Shopping_cart()"
});
formatter.result({
  "duration": 86719400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_product_name_cronus_yoga_pant()"
});
formatter.result({
  "duration": 75636500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 22
    }
  ],
  "location": "MenTestSteps.i_verify_Product_size(int)"
});
formatter.result({
  "duration": 74850600,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_the_product_colour_Black()"
});
formatter.result({
  "duration": 123707900,
  "status": "passed"
});
formatter.after({
  "duration": 2134379900,
  "status": "passed"
});
formatter.uri("women.feature");
formatter.feature({
  "line": 2,
  "name": "Women Test",
  "description": "As a user I want to verify the products name filter and price filter",
  "id": "women-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7118878200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to sort by product name filter",
  "description": "",
  "id": "women-test;user-should-able-to-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on jacket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Sort By filter \"Product Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should verify the products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 770118300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 304926300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacket()"
});
formatter.result({
  "duration": 3133637800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Name",
      "offset": 25
    }
  ],
  "location": "WomenTestSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 2060631800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldVerifyTheProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 1180287200,
  "status": "passed"
});
formatter.after({
  "duration": 1237622800,
  "status": "passed"
});
});