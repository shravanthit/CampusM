package steps;

import cucumber.api.java.en.*;

import org.junit.Assert;
import pages.CampusMLoginPage;
import pages.EnrollmentPage;

import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;


public class EnrollmentStepdef {
    private String gFName;
    private String gLastName;
    private String emailId;
    private String genderDetail;
    private String dob;
    private String defaultDob;

    EnrollmentPage enrollmentPage = new EnrollmentPage();


    @And("I navigate to personal details page")
    public void Navigate_to_personaldetails(){
       enrollmentPage.navigatetoPersonalDetailspage();
       this.defaultDob = enrollmentPage.dob.getAttribute("value");
    }

    @Then("details should be updated successfully")
    public void val_PersonDetails_Upd_Success(){
        enrollmentPage.navigatetoPersonalDetailspage();
        String updFName = enrollmentPage.guardianFirstName.getAttribute("value");
        String updLName = enrollmentPage.guardianLastName.getAttribute("value");
        String updEmail = enrollmentPage.email.getAttribute("value");
        String updDob = enrollmentPage.dob.getAttribute("value");
        //DateTimeFormatter.ofPattern("MM-dd-yyyy", Locale.ENGLISH).format(updDob));

        Assert.assertEquals("FirstName is not updated properly", gFName, updFName);
        Assert.assertEquals("LastNAme is not updated properly", gLastName, updLName);
        Assert.assertEquals("emailId is not updated properly", emailId, updEmail);
       // Assert.assertEquals("Dob is not updated properly", dob, updDob);


    }


    @When("I update personal details (.*) and (.*) and (.*) and (.*) and (.*)")
    public void updatevalues(String guardianFName,String guardianLastName, String email, String gender, String dateOfBirth){
        this.gFName = guardianFName;
        this.gLastName = guardianLastName;
        this.emailId = email;
        this.genderDetail = gender;
        this.dob = dateOfBirth;
        enrollmentPage.enterPersonalDetails(guardianFName,guardianLastName,email,gender,dateOfBirth);
        enrollmentPage.clickCLoseButton();

    }

    @And("I should be able to revert personal details to default values")
    public void revert_PersonalDet_DefaultValues(){
         enrollmentPage.updPersonDetToDefaultValues();

    }



}
