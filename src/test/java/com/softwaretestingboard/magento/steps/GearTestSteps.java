package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.GearPage;
import com.softwaretestingboard.magento.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GearTestSteps {

    @When("^I mouse hover on gear menu$")
    public void i_mouse_hover_on_gear_menu() {
        new HomePage().mouseHoveOnGearMenu();

    }

    @Then("^I click on bags$")
    public void i_click_on_bags() {
       new GearPage().clickOnBags();
    }

    @Then("^I click on product name Overnight Duffle$")
    public void i_click_on_product_name_Overnight_Duffle() {
        new GearPage().productNameOvernightDuffle();

    }

    @Then("^I verify the text overnight Duffle$")
    public void i_verify_the_text_overnight_Duffle() {
        new GearPage().verifyTextOvernightDuffle();

    }

    @Then("^I change qty (\\d+)$")
    public void i_change_qty(int arg1) {
        new GearPage().changeQty3();
    }

    @Then("^I click on add to cart button$")
    public void i_click_on_add_to_cart_button() {
        new GearPage().addToCart();
    }

    @Then("^I verify text You added Overnight Duffle to your shopping cart$")
    public void i_verify_text_You_added_Overnight_Duffle_to_your_shopping_cart() {
         new GearPage().verifyTextShoppingCart();
    }

    @Then("^I click and shopping cart message$")
    public void i_click_and_shopping_cart_message() {
        new GearPage().shoppingCartLinkMessage();

    }

    @Then("^I verify the Qty (\\d+)$")
    public void i_verify_the_Qty(int arg1) {
        new GearPage().verifyQty3();

    }
    @And("^I verify product price \\$(\\d+)\\.(\\d+)$")
    public void iProductPrice$(int arg0, int arg1) {
        new GearPage().productPrice$135();
    }



    @Then("^I change Qty to (\\d+)$")
    public void i_change_Qty_to(int arg1) {
        new GearPage().changeQty5();

    }

    @Then("^I click on update shopping cart button$")
    public void i_click_on_update_shopping_cart_button() {
        new GearPage().updateShoppingCartButton();

    }

    @Then("^I verify the product price \\$(\\d+)\\.(\\d+)$")
    public void i_verify_the_product_price_$(int arg1, int arg2) {
        new GearPage().productPrice$225();

    }
}