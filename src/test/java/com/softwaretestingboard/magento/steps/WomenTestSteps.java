package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.WomenPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenTestSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I mouse hover on women menu$")
    public void iMouseHoverOnWomenMenu() {
        new HomePage().mouseHoverWomenMenu();
    }

    @When("^I mouse hover on tops$")
    public void iMouseHoverOnTops() {
        new HomePage().mouseHoverOnTop();

    }

    @Then("^I click on jacket$")
    public void iClickOnJacket() {
        new WomenPage().clickOnJacket();
    }

    @And("^I select Sort By filter \"([^\"]*)\"$")
    public void iSelectSortByFilter(String ProductName)  {
        new WomenPage().selectProductName();
    }

    @Then("^I should verify the products name display in alphabetical order$")
    public void iShouldVerifyTheProductsNameDisplayInAlphabeticalOrder() {
        new WomenPage().sortByProductName();
    }



    @Then("^I should verify the products price display in low to high$")
    public void iShouldVerifyTheProductsPriceDisplayInLowToHigh() {
        new WomenPage().sortByPriceFilter();

    }
}
