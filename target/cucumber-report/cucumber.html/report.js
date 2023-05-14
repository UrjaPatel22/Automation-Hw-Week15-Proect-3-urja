$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gear.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Test",
  "description": "As user I want to Add Product Successfully On Women Page",
  "id": "gear-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4605561700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Add Product SuccessFully To Shopping Cart",
  "description": "",
  "id": "gear-test;user-should-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Mouse Hover on Gear Menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on Bags",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click On Product Name \"Overnight Duffle\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to Verify the Text \"Overnight Duffle\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I change the Qty to 3 on Product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I  Click On \"Add To Cart\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the text \"You added Overnight Duffle to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"shopping cart\" link into Message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify Product Name \"Overnight Duffle\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Qty to\"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the Product Price \"$135.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I change the Qty to\"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I clicking on \"Update Shopping Cart\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Updated Product Price \"$225.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 73637400,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 367203200,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnBags()"
});
formatter.result({
  "duration": 821037900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 25
    }
  ],
  "location": "GearSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 906097500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 37
    }
  ],
  "location": "GearSteps.iShouldBeAbleToVerifyTheText(String)"
});
formatter.result({
  "duration": 107750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "GearSteps.iChangeTheQtyToOnProduct(String)"
});
formatter.result({
  "duration": 260825800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 13
    }
  ],
  "location": "GearSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 135605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Overnight Duffle to your shopping cart",
      "offset": 19
    }
  ],
  "location": "GearSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 1517385200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shopping cart",
      "offset": 12
    }
  ],
  "location": "GearSteps.iClickOnLinkIntoMessage(String)"
});
formatter.result({
  "duration": 1820063000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 21
    }
  ],
  "location": "GearSteps.verifyProductName(String)"
});
formatter.result({
  "duration": 26367600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "GearSteps.verifyTheQtyTo(String)"
});
formatter.result({
  "duration": 59765200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$135.00",
      "offset": 26
    }
  ],
  "location": "GearSteps.verifyTheProductPrice(String)"
});
formatter.result({
  "duration": 29462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "GearSteps.iChangeTheQtyTo(String)"
});
formatter.result({
  "duration": 158762100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update Shopping Cart",
      "offset": 15
    }
  ],
  "location": "GearSteps.iClickingOnButton(String)"
});
formatter.result({
  "duration": 87959300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$225.00",
      "offset": 34
    }
  ],
  "location": "GearSteps.verifyTheUpdatedProductPrice(String)"
});
formatter.result({
  "duration": 2714183900,
  "status": "passed"
});
formatter.after({
  "duration": 673888500,
  "status": "passed"
});
formatter.uri("men.feature");
formatter.feature({
  "line": 1,
  "name": "Men Test",
  "description": "As a user I want to add product to shopping cart from men category page on software testing board website",
  "id": "men-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2892088300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should add product to the shopping cart successfully",
  "description": "",
  "id": "men-test;user-should-add-product-to-the-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
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
  "name": "I mouse hover on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on pants",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on product name \"Cronus Yoga Pant\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on size \"32\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on color \"Black\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to verify the text \"You added Cronus Yoga Pant to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on shopping cart link into message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the text \"Shopping Cart.\" on men page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be able to verify the product name \"Cronus Yoga Pant\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to verify the product size 32",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to verify the product colour \"Black\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should be able to add product to the shopping cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MenSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverOnMenMenu()"
});
formatter.result({
  "duration": 693435600,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverOnBottoms()"
});
formatter.result({
  "duration": 189244500,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnPants()"
});
formatter.result({
  "duration": 947678300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cronus Yoga Pant",
      "offset": 31
    }
  ],
  "location": "MenSteps.iMouseHoverOnProductName(String)"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 17
    }
  ],
  "location": "MenSteps.iClickOnSize(String)"
});
formatter.result({
  "duration": 257918900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 18
    }
  ],
  "location": "MenSteps.iClickOnColor(String)"
});
formatter.result({
  "duration": 171920500,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 117618100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Cronus Yoga Pant to your shopping cart",
      "offset": 37
    }
  ],
  "location": "MenSteps.iShouldBeAbleToVerifyTheText(String)"
});
formatter.result({
  "duration": 1675861300,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 2243348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart.",
      "offset": 37
    }
  ],
  "location": "MenSteps.iShouldBeAbleToVerifyTheTextOnMenPage(String)"
});
formatter.result({
  "duration": 42106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cronus Yoga Pant",
      "offset": 45
    }
  ],
  "location": "MenSteps.iShouldBeAbleToVerifyTheProductName(String)"
});
formatter.result({
  "duration": 44705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 44
    }
  ],
  "location": "MenSteps.iShouldBeAbleToVerifyTheProductSize(int)"
});
formatter.result({
  "duration": 38955900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 47
    }
  ],
  "location": "MenSteps.iShouldBeAbleToVerifyTheProductColour(String)"
});
formatter.result({
  "duration": 41547900,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iShouldBeAbleToAddProductToTheShoppingCartSuccessfully()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.after({
  "duration": 683212900,
  "status": "passed"
});
formatter.uri("women.feature");
formatter.feature({
  "line": 1,
  "name": "Women Test",
  "description": "As user I want to verify Sort By Filter on Women Page",
  "id": "women-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3358363200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should be able to verify product Name in alphabetical order on Page",
  "description": "",
  "id": "women-test;verify-user-should-be-able-to-verify-product-name-in-alphabetical-order-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Mouse Hover On Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Mouse Hover On Tops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click On Jackets",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select Sort By Filter \"Product Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to Verify that Product name is displayed in Alphabetical Order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 667751000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 171334800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1405474600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Name",
      "offset": 25
    }
  ],
  "location": "WomenSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 932847500,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iShouldBeAbleToVerifyThatProductNameIsDisplayedInAlphabeticalOrder()"
});
formatter.result({
  "duration": 662680200,
  "status": "passed"
});
formatter.after({
  "duration": 700350300,
  "status": "passed"
});
formatter.before({
  "duration": 3404200100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify user should be able to verify Price in Low to High",
  "description": "",
  "id": "women-test;verify-user-should-be-able-to-verify-price-in-low-to-high",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Mouse Hover On Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I Mouse Hover On Tops",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click On Jackets",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select Sort By Filter \"Price\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to Verify that Product Size is displayed in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 53800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 598161000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 172453200,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1090559900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 25
    }
  ],
  "location": "WomenSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 1044871300,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iShouldBeAbleToVerifyThatProductSizeIsDisplayedInLowToHigh()"
});
formatter.result({
  "duration": 524770300,
  "status": "passed"
});
formatter.after({
  "duration": 678014400,
  "status": "passed"
});
});