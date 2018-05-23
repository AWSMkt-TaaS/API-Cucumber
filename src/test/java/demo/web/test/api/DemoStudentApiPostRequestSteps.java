package demo.web.test.api;


import java.awt.List;
import java.text.MessageFormat;

import org.testng.Assert;
import org.testng.annotations.*;
import cucumber.api.java.*;
import cucumber.api.java.en.*;
import gherkin.formatter.model.DataTableRow;

import java.util.*;
import com.smartbear.readyapi.client.execution.*;
import com.smartbear.readyapi.client.teststeps.TestSteps;
import com.smartbear.readyapi.client.*;
import com.smartbear.readyapi.client.assertions.Assertions;

public class DemoStudentApiPostRequestSteps {
	//tester can pass the url as a command line argument, if not passing then use the hardcoded url
	private String APIURL1=System.getProperty("apiurl");
	String tinid="",  tinname="",  tinage="",  tinstatus="",  tinstreet="",  tinzip="";
	String apiurl ="";
	
	
	@Given("^I use student api url$")
    public void i_use_student_api_url_something()  {
		
		if (APIURL1 == null){
			apiurl="https://webapp.astadia-taas.com/api/student"; // for testing local 
			System.out.println("ENVIRONMENT VARIABLE APIURL IS NOT AVAILABLE");
		}
		else{
			apiurl=APIURL1;
		}
		System.out.println("Currently using api url:" + apiurl);
    }
	
	
	@When("^I submit the API with the input attributes(.+),(.+),(.+),(.+),(.+),(.+)$")
    public void i_submit_the_api_with_the_input_attributes(String inid, String inname, String inage, String instatus, String instreet, String inzip)  {
		tinid=inid;  tinname=inname;  tinage=inage;  tinstatus=instatus;  tinstreet=instreet;  tinzip=inzip;
	   
	}

	@Then("^I validate the result against the output attributes(.+),(.+),(.+),(.+),(.+),(.+)$")
    public void i_validate_the_result_against_the_output_attributes(String outid, String outname, String outage, String outstatus, String outstreet, String outzip)  {
	    // Write code here that turns the phrase above into concrete actions
		String reportresult = "FINISHED";
        String msg = "";
        String studentInputJason="";
        //studentInputJason = MessageFormat.format("{'id':{0},'name':'{1}','age':{2},'status':{3},'stAddress':{'street':'{4}','zip':'{5}'}}", 
         
        String tmp ="{'Id':{0},'Name':'{1}','Age':{2},'Status':{3},'StAddress':{'Street':'{4}','Zip':'{5}'}}";
        studentInputJason = tmp.replace("{0}", tinid).replace("{1}", tinname).replace("{2}", tinage).replace("{3}", tinstatus).replace("{4}", tinstreet).replace("{5}", tinzip);
        
        System.out.println(studentInputJason);
       
    	TestRecipe recipe = TestRecipeBuilder.newTestRecipe() 
            .addStep(TestSteps.postRequest(apiurl)
                  .post(apiurl)
                  .addHeader("Content-Type", "application/json")
                  .withMediaType("application/json")
                  .withRequestBody(studentInputJason)
                  .addAssertion(Assertions.jsonPathContent("$['Id']", outid))
                  .addAssertion(Assertions.jsonPathContent("$['Name']",outname))
                  .addAssertion(Assertions.jsonPathContent("$['Age']", outage))
                  .addAssertion(Assertions.jsonPathContent("$['Status']", outstatus))
                  .addAssertion(Assertions.jsonPathContent("$['StAddress']['street']",outstreet))
                  .addAssertion(Assertions.jsonPathContent("$['StAddress']['Zip']", outzip))
            )
            .buildTestRecipe();  
             RecipeExecutor recipeExecutor = new RecipeExecutor(Scheme.HTTP, "testserver.readyapi.io", 8080);  
             recipeExecutor.addExecutionListener(new DemoAppExecutionListener()); 
             System.out.println("STARTING EXECUTION");
             recipeExecutor.setCredentials("demoUser", "demoPassword");  
             Execution execution = recipeExecutor.executeRecipe(recipe);
             if (execution != null)
             {
                 if (execution.getCurrentReport() != null && execution.getCurrentReport().getStatus().toString() == "FAILED")
                 {
                	
                	 reportresult = "FAILED";
                     msg = msg + " \n INPUT TABLE ROW ID: " + outid + ";" +  execution.getCurrentReport().getTestSuiteResultReports().get(0).getTestCaseResultReports().get(0).getTestStepResultReports().get(0).getMessages().toString();

                 }
             }
             else
             {
                 reportresult = "FAILED";
                 msg =  msg + " \n INPUT TABLE ROW ID: " + outid +  "System problem, execution failed";
                
             }
             System.out.println("STARTING EXECUTION");
             if (reportresult !="FINISHED"){
            	 Assert.assertFalse(true, msg);
             }
            
            // Assert.assertEquals("FINISHED", reportresult,msg); test
	}
	
}