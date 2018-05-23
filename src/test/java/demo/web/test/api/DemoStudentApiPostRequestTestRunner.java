package demo.web.test.api;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.junit.Cucumber;

/*@RunWith(Cucumber.class) 1*/
@CucumberOptions(
		features = "src/test/resources",
		 glue= {"demo.web.test.api"},		
		plugin = {"json:target/cucumber-report/json/student-screen-functional-testreport.json","html:target/cucumber-report/json/student-screen-functional-testreport"}
		,tags={"@FUNCTIONAL,@REGRESSION"}
		)
public class  DemoStudentApiPostRequestTestRunner extends AbstractTestNGCucumberTests{

}

/*
You can use tags in mvn test as shown below:
A AND B = mvn clean test -Dcucumber.options="--tags @FUNCTIONAL --tags @REGRESSION"  
A OR B = mvn clean test -Dcucumber.options="--tags @FUNCTIONAL,@REGRESSION"
mvn clean test -Dcucumber.options="--tags @FUNCTIONAL --tags ~@REGRESSION"
mvn clean test -Dcucumber.options="--tags @FUNCTIONAL,~@REGRESSION"
*/