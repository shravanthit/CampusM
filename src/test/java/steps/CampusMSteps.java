package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.CampusMLoginPage;
import utils.DriverFactory;

public class CampusMSteps {

    CampusMLoginPage campusMLoginPage = new CampusMLoginPage();
    DriverFactory dFactory = new DriverFactory();

    @Given("I am on Campusm Home page")
    public void launch_browser() {
        campusMLoginPage.launchCampusmLoginPage();

    }

    @When("^I click on student/staff option$")
    public void iClickOnStudentStaffOption() throws Throwable {
        campusMLoginPage.selectStudentstaff();
    }

    @Then("login page Should be displayed")
    public void Iamonloginpage() throws Throwable {
        campusMLoginPage.Iamonloginpage();
    }


    @Given("I am on login page")
    public void iamonloginpage() {
        campusMLoginPage.launchCampusmLoginPage();
        campusMLoginPage.selectStudentstaff();
        campusMLoginPage.Iamonloginpage();

    }

    @When("I login with invalid (.*) or (.*)")
    public void iEnterUsernameAndPassword(String userName, String pwd) throws Throwable {
        campusMLoginPage.loginToApp(userName, pwd);

    }

    @Then("I should be notified with error message")
    public void showeerrormsg() throws Throwable {
        campusMLoginPage.Iamonloginpage();
        Assert.assertTrue("Error Message is Not Displayed", campusMLoginPage.Errormsg.isDisplayed());


    }


    @When("I login with valid (.*) or (.*)")
    public void validLogin(String userName, String passwrd) {
        campusMLoginPage.loginToApp(userName, passwrd);

    }

    @Then("I should be successfully logged in")
    public void Ishouldbesuccessfullyloggedin() throws Throwable {

        campusMLoginPage.verifylogged();
        Assert.assertTrue("Login was not successful", campusMLoginPage.loggedinMenu.isDisplayed());
    }
    @Given("I am logged in successfully with (.*) and (.*)")
    public void loggedinSuccesfully(String username, String pwd){
        campusMLoginPage.launchCampusmLoginPage();
        campusMLoginPage.selectStudentstaff();
        campusMLoginPage.Iamonloginpage();
        campusMLoginPage.loginToApp(username, pwd);
        campusMLoginPage.verifylogged();
    }
    @When("I click on logout")
    public void logoutFromApp() {
        campusMLoginPage.logout();

    }


    @When("I should be logged out successfully")
    public void logout_App_Success() {

        Assert.assertTrue("Logout was not successful", campusMLoginPage.launchTabHdr.isDisplayed());
    }

}


