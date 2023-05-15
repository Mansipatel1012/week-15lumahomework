@regression
Feature: Men test
  As a user I want to add the product in shopping cart
@sanity
  Scenario: User should able to add products in shopping cart
    Given   I am on homepage
    When    I mouse hover on men menu
    And     I mouse hover on bottoms
    And     I click on pants
    And     I mouse hover on cronus yoga pant
    And     I click on size 32
    And     I click on black colour
    And     I click on add to cart
    Then    I verify text You added Cronus Yoga Pant to your shopping cart
    And     I click on shopping cart link
    Then    I verify text Shopping cart
    Then    I verify product name cronus yoga pant
    Then    I verify Product size 32
    Then    I verify the product colour Black

