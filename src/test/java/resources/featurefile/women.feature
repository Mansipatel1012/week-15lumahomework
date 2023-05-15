@regression
Feature: Women Test
  As a user I want to verify the products name filter and price filter

  @sanity
  Scenario: User should able to sort by product name filter
    Given   I am on homepage
    When    I mouse hover on women menu
    And     I mouse hover on tops
    And     I click on jacket
    And     I select Sort By filter "Product Name"
    Then    I should verify the products name display in alphabetical order

  @smoke
  Scenario: User should able to sort by price filter
    Given   I am on homepage
    When    I mouse hover on women menu
    And     I mouse hover on tops
    And     I click on jacket
    And     I select Sort By filter "Price"
    Then    I should verify the products price display in low to high