package com.softwaretestingboard.magento.pages;

import com.softwaretestingboard.magento.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class GearPage extends Utility {
    private static final Logger log = LogManager.getLogger(GearPage.class.getName());

    public GearPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "#ui-id-25")
    WebElement clickOnBag;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Overnight Duffle']")
    WebElement overnightDuffle;

    @CacheLookup
    @FindBy(xpath = "//span[@class='base']")
    WebElement verifyOverNightDuffle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='qty']")
    WebElement changeQty;

    @CacheLookup
    @FindBy(xpath = "//button[@id='product-addtocart-button']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']")
    WebElement verifyShoppingCart;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='shopping cart']")
    WebElement shoppingCartMessage;

    @CacheLookup
    @FindBy(css = "#cart-147204-qty")
    WebElement verifyQty3;

    @CacheLookup
    @FindBy(css = "span[data-bind='text: getValue()']")
    WebElement productPrice$135;

    @CacheLookup
    @FindBy(css = "#cart-147221-qty")
    WebElement changeQty3to5;

    @CacheLookup
    @FindBy(css = "button[title='Update Shopping Cart'] span")
    WebElement updateShoppingCart;

    @CacheLookup
    @FindBy(css = "td[class='col subtotal'] span[class='price']")
    WebElement productPrice$225;

    @CacheLookup
    @FindBy(xpath = "//input[@id='qty']")
    WebElement clearQty;

    //Change Qty to ‘5’
    @CacheLookup
    @FindBy(css = "#cart-147221-qty")
    WebElement qty;

    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[3]/div[1]/div[1]/label[1]")
    WebElement click;

    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[3]/div[1]/div[1]/label[1]")
    WebElement clean;


    // Click on Bags
    public void clickOnBags() {
        clickOnElement(clickOnBag);
        log.info("Clicking on bags : " + clickOnBag.toString());

    }

    // Click on Product Name ‘Overnight Duffle’
    public void productNameOvernightDuffle() {
        clickOnElement(overnightDuffle);
        log.info("Product overnight duffle : " + overnightDuffle.toString());

    }

    // Verify the text ‘Overnight Duffle’
    public void verifyTextOvernightDuffle() {
        log.info("Clicking on login link : " + verifyOverNightDuffle.toString());
        String expectedMessage = "Overnight Duffle";
        String actualMessage = getTextFromElement(verifyOverNightDuffle);
        Assert.assertEquals(expectedMessage, actualMessage);

    }

    // Change Qty 3
    public void changeQty3() {
        clearTextFromField(By.xpath("//input[@id='qty']"));
        sendTextToElement(changeQty, "3");
        log.info("change qty 3 : " + changeQty.toString());

    }

    //Click on ‘Add to Cart’ Button.
    public void addToCart() {
        clickOnElement(addToCartButton);
        log.info("click on add to cart : " + addToCartButton.toString());

    }

    // Verify the text ‘You added Overnight Duffle to your shopping cart.’
    public void verifyTextShoppingCart() {
        log.info("Text shopping cart : " + verifyShoppingCart.toString());
        String expectedMessage = "You added Overnight Duffle to your shopping cart.";
        String actualMessage = getTextFromElement(verifyShoppingCart);
        Assert.assertEquals(expectedMessage, actualMessage);

    }

    //Click on ‘shopping cart’ Link into message
    public void shoppingCartLinkMessage() {
        clickOnElement(shoppingCartMessage);
        log.info("Shopping cart link message : " + shoppingCartMessage.toString());

    }

    //Verify the Qty is ‘3’
    public void verifyQty3() {
        log.info("Verify qty 3 : " + verifyQty3.toString());
        String expectedMessage = "3";
        String actualMessage = getTextFromElement(verifyQty3);
        Assert.assertEquals(expectedMessage, actualMessage);


    }

    // Verify the product price ‘$135.00’
    public void productPrice$135() {
        log.info("Product price  : " + productPrice$135.toString());
        String expectedMessage = "$135.00";
        String actualMessage = getTextFromElement(productPrice$135);
        Assert.assertEquals(expectedMessage, actualMessage);

    }

    public void changeQty5() {
        //Thread.sleep(3000);
       // mouseHoverToElement(qty);
        clearTextFromField(By.cssSelector("#cart-147221-qty"));
        sendTextToElement(changeQty3to5, "5");
        log.info("Clicking on register link : " + changeQty3to5.toString());

    }

    //Click on ‘Update Shopping Cart’ button
    public void updateShoppingCartButton() {
        clickOnElement(updateShoppingCart);
        log.info("Update shopping cart: " + updateShoppingCart.toString());

    }

    //Verify the product price ‘$225.00’
    public void productPrice$225() {
        log.info("product price : " + productPrice$225.toString());
        String expectedMessage = "$225.00";
        String actualMessage = getTextFromElement(productPrice$225);
        Assert.assertEquals(expectedMessage, actualMessage);

    }
}



