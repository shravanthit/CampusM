package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.*;
import utils.DriverFactory;
import pages.CampusMLoginPage;

import java.util.concurrent.TimeUnit;

public class EnrollmentPage {
    WebDriver driver = DriverFactory.driver;
    DriverFactory dFactory = new DriverFactory();
    DriverFactory visible = new DriverFactory();

    @FindBy(css = "a[aria-label='Enrollment']")
    public WebElement Enrollment;

    @FindBy(xpath = "//*[@class='thumbnail medium']//*[contains(text(), 'Personal Details')]")
    public WebElement PersonalDetails;

    @FindBy(xpath = "//span[contains(text(),'Your Details')]")
    public WebElement yourDetails;

    @FindBy(id = "formField_1")
    public WebElement Name;

    @FindBy(id = "formField_2")
    public WebElement LastName;

    @FindBy(name = "email")
    public WebElement email;

    @FindBy(name = "dob")
    public WebElement dob;

    @FindBy(name = "pfirstname")
    public WebElement guardianFirstName;

    @FindBy(name = "plastname")
    public WebElement guardianLastName;

    @FindBy(css = "button.close")
    public WebElement closeButton;

    @FindBy(css = ".modal")
    public WebElement enrolmentModalBox;


    @FindBy(xpath = "//button[@class ='icon icon-angle-down']")
    public WebElement loggedin;

    @FindBy(xpath = "//*[@class ='content']//span[contains(text(), 'Personal Details')]")
    public WebElement PersonalDetailsheader;

    public EnrollmentPage() {
        PageFactory.initElements(driver, this);
    }


    public void navigatetoPersonalDetailspage() {
        dFactory.waitingforelement(Enrollment, driver);
        Enrollment.click();
        dFactory.verifyIsElementIsDisplayed(closeButton,driver);
        driver.switchTo().defaultContent();
        driver.switchTo().frame("web2AekFrame");
        dFactory.waitingforelement(yourDetails, driver);
        yourDetails.click();
        dFactory.waitingforelement(PersonalDetails, driver);
        PersonalDetails.click();
        dFactory.verifyIsElementIsDisplayed(PersonalDetailsheader, driver);
    }

    public void enterPersonalDetails(String Fname, String Lname, String emailid, String gender, String dateOfBirth) {
        dFactory.waitingforelement(guardianFirstName, driver);
        guardianFirstName.clear();
        guardianFirstName.sendKeys(Fname);
        guardianLastName.clear();
        guardianLastName.sendKeys(Lname);
        Select select = new Select(driver.findElement(By.xpath("//*[@class='ui input icon']//select")));
        select.selectByVisibleText(gender);
        email.sendKeys(emailid);
        //dob.clear();
        dob.sendKeys(dateOfBirth);
    }

    public void clickCLoseButton(){
        driver.switchTo().defaultContent();
        closeButton.click();
        dFactory.waitForInvisibility(enrolmentModalBox,10);

    }
    public void updPersonDetToDefaultValues(){
        guardianFirstName.clear();
        guardianLastName.clear();
        email.clear();
        Select select = new Select(driver.findElement(By.xpath("//*[@class='ui input icon']//select")));
        select.selectByVisibleText("Perfer not to say");
    }


}
