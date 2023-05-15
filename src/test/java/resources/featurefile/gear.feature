@regression
Feature: Gear Test
  As A user i want to add products successfull to shopping cart

  @sanity
  Scenario: User should be able to add products to shopping cart
    Given   I am on homepage
    When    I mouse hover on gear menu
    And     I click on bags
    And     I click on product name Overnight Duffle
    And     I verify the text overnight Duffle
    And     I change qty 3
    And     I click on add to cart button
    Then    I verify text You added Overnight Duffle to your shopping cart
    And     I click and shopping cart message
    Then    I verify the Qty 3
    Then    I verify product price $135.00
    And     I change Qty to 5
    And     I click on update shopping cart button
    Then    I verify the product price $225.00

