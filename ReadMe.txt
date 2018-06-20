This a Maven API Demo Test Project.  It uses Cucumber to run automated acceptance tests written in a behavior-driven development (BDD) style with Gherkin language parser.  Cucumber features and scenarios are scripted in the studentapipostrequest.feature file.

It uses "https://webapp.astadia-taas.com/api/student" API end points for the testing and configured in the file DemoStudentApiPostRequestSteps.java

Test Engineer can make changes  in the "studentapipostrequest.feature" file. 

Test Engineer can run the test, right click on pom.xml and do:
	- mvn clean
	  and then do
	- mvn test
	
	- The test result will be available in the following location: 
	  target/cucumber-report/json/student-screenfunctional-testreport/index.html
	  
Test Engineer can also run the maven test using CLI commands:
	- go to the directory contains the pom.xml file and run the following commands
	- mvn clean test
	OR
	- mvn clean test -Dcucumber.options="--tags @FUNCTIONAL --tags @REGRESSION"  
	  (This will run all the tests that tagged with @FUNCTIONAL and @REGRESSION)
	  
	- The test result will be available in the following location: 
	  target/cucumber-report/json/student-screenfunctional-testreport/index.html
	  
The latest version of this demo test project can be cloned from the github location: https://github.com/AWSMkt-TaaS/API-Cucumber
	  
	  
