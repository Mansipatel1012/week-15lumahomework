package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.MenPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MenTestSteps {

    @When("^I mouse hover on men menu$")
    public void i_mouse_hover_on_men_menu()  {
        new HomePage().mouseHoverOnMenMenu();
    }

    @Then("^I mouse hover on bottoms$")
    public void i_mouse_hover_on_bottoms()  {
    new HomePage().mouseHoverOnBottom();
    }

    @Then("^I click on pants$")
    public void i_click_on_pants()  {
        new MenPage().clickPants();

    }

    @Then("^I mouse hover on cronus yoga pant$")
    public void i_mouse_hover_on_cronus_yoga_pant() {
        new MenPage().mouseHoverOnCronusYogaPant();

    }

    @Then("^I click on size (\\d+)$")
    public void i_click_on_size(int arg1)  {
        new MenPage().productNameCronusYogaPantCLickOnSize32();

    }

    @Then("^I click on black colour$")
    public void i_click_on_black_colour()  {
        new MenPage().productNameCronusYogaPantClickOnColourBlack();

    }

    @Then("^I click on add to cart$")
    public void i_click_on_add_to_cart()  {
        new MenPage().CronusYogaPantClickAddToCartButton();

    }

    @Then("^I verify text You added Cronus Yoga Pant to your shopping cart$")
    public void i_verify_text_You_added_Cronus_Yoga_Pant_to_your_shopping_cart()  {
        new MenPage().verifyTextMessage();
    }

    @Then("^I click on shopping cart link$")
    public void i_click_on_shopping_cart_link()  {
       new MenPage().shoppingCartLink();
    }

    @Then("^I verify text Shopping cart$")
    public void i_verify_text_Shopping_cart()  {
        new MenPage().verifyShoppingCart();
    }

    @Then("^I verify product name cronus yoga pant$")
    public void i_verify_product_name_cronus_yoga_pant()  {
         new MenPage().verifyProductNameCronusYogaPant();
    }

    @Then("^I verify Product size (\\d+)$")
    public void i_verify_Product_size(int arg1)  {
       new MenPage().verifyProductSize32();
    }

    @Then("^I verify the product colour Black$")
    public void i_verify_the_product_colour_Black()  {
       new MenPage().verifyProductColourBlack();
    }

}
