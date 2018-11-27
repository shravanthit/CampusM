package pages;

import gherkin.lexer.Id;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.internal.FindsByCssSelector;
import org.openqa.selenium.remote.server.handler.SendKeys;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.DriverFactory;

public class CampusMLoginPage {

    WebDriver driver = DriverFactory.driver;
    DriverFactory dFactory = new DriverFactory();
    DriverFactory  visible = new DriverFactory();
    EnrollmentPage enrollmentPage = new EnrollmentPage();

    @FindBy(xpath = ("//h2[@class='lv-label'] [contains(text(),'Student / Staff')]"))
    public WebElement studentStaff;
    @FindBy(xpath = ("//h1[contains(text(),'Please select a profile')]"))
    public WebElement launchTabHdr;



    @FindBy(xpath = ("//button[@class='btn btn-success'] [contains(text(),'Accept')]"))
    public WebElement Accept;

    @FindBy(id = "mOdAl_4_title")
    public WebElement Logintitlepage;

    @FindBy(id = "username")
    public WebElement Username;

    @FindBy(id = "password")
    public WebElement Password;

    @FindBy(xpath = ("//*[@class='modal-footer'] //*[contains(text(), 'Login')]"))
    public WebElement Loginbtn;

    @FindBy(xpath = ("//div[@class ='alert alert-error'][contains(text(), 'Please try again')]"))
    public WebElement Errormsg;

    @FindBy(xpath = "//button[@class ='icon icon-angle-down']")
    public WebElement loggedinMenu;

    @FindBy(xpath = "//span[contains(text(), 'Log Out')]")
    public WebElement logoutLink;

    public CampusMLoginPage() {
        PageFactory.initElements(driver, this);
    }

    public void launchCampusmLoginPage() {
        driver.get("https://m.campusm.org/campusm/");
        dFactory.waitingforelement(studentStaff,driver);

    }

    public void selectStudentstaff() {
        studentStaff.click();
        dFactory.waitingforelement(Accept,driver);
        Accept.click();
    }

    public void Iamonloginpage(){
        dFactory.verifyIsElementIsDisplayed(Loginbtn,driver);

        }

    public void loginToApp(String username, String password){
        dFactory.waitingforelement(Username,driver);
        Username.click();
        Username.sendKeys(username);
        Password.sendKeys(password);
        Loginbtn.click();
        }

     public void verifylogged(){
         dFactory.verifyIsElementIsDisplayed(loggedinMenu,driver);

     }

     public void logout(){
        dFactory.waitingforelement(loggedinMenu,driver);
        dFactory.waitingforelement(enrollmentPage.Enrollment, driver);
         loggedinMenu.click();
         dFactory.verifyIsElementIsDisplayed(logoutLink,driver);
         logoutLink.click();
         dFactory.waitingforelement(studentStaff,driver);

     }
}
