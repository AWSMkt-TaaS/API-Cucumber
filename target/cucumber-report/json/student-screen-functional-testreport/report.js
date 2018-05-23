$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("studentapipostrequest.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the student api post request.",
  "description": "Use the student api.\r\nEnter the required input and submit the api using post.\r\nValidate the api response against the given parameters.\r\nRepeat the task for multiple inputs and output parameters.",
  "id": "validate-the-student-api-post-request.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Test Student Rest API Post Request",
  "description": "",
  "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@JIRA1"
    },
    {
      "line": 8,
      "name": "@FUNCTIONAL"
    },
    {
      "line": 8,
      "name": "@REGRESSION"
    },
    {
      "line": 8,
      "name": "@STAGE"
    },
    {
      "line": 8,
      "name": "@GROUP1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I use student api url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I submit the API with the input attributes\u003cin-id\u003e,\u003cin-name\u003e,\u003cin-age\u003e,\u003cin-status\u003e,\u003cin-street\u003e,\u003cin-zip\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I validate the result against the output attributes\u003cout-id\u003e,\u003cout-name\u003e,\u003cout-age\u003e,\u003cout-status\u003e,\u003cout-street\u003e,\u003cout-zip\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;",
  "rows": [
    {
      "cells": [
        "in-id",
        "in-name",
        "in-age",
        "in-status",
        "in-street",
        "in-zip",
        "out-id",
        "out-name",
        "out-age",
        "out-status",
        "out-street",
        "out-zip"
      ],
      "line": 15,
      "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;1"
    },
    {
      "cells": [
        "1",
        "aaa1",
        "11",
        "true",
        "st1",
        "4000",
        "1",
        "aaa1",
        "11",
        "true",
        "st1",
        "4000"
      ],
      "line": 16,
      "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;2"
    },
    {
      "cells": [
        "2",
        "aaa2",
        "11",
        "true",
        "st2",
        "5000",
        "2",
        "aaa2",
        "11",
        "true",
        "st2",
        "5000"
      ],
      "line": 17,
      "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;3"
    },
    {
      "cells": [
        "3",
        "aaa3",
        "11",
        "true",
        "st3",
        "6000",
        "3",
        "aaa3",
        "11",
        "true",
        "st3",
        "6000"
      ],
      "line": 18,
      "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Test Student Rest API Post Request",
  "description": "",
  "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@STAGE"
    },
    {
      "line": 8,
      "name": "@JIRA1"
    },
    {
      "line": 8,
      "name": "@FUNCTIONAL"
    },
    {
      "line": 8,
      "name": "@GROUP1"
    },
    {
      "line": 8,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I use student api url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I submit the API with the input attributes1,aaa1,11,true,st1,4000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I validate the result against the output attributes1,aaa1,11,true,st1,4000",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStudentApiPostRequestSteps.i_use_student_api_url_something()"
});
formatter.result({
  "duration": 128574571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    },
    {
      "val": "aaa1",
      "offset": 44
    },
    {
      "val": "11",
      "offset": 49
    },
    {
      "val": "true",
      "offset": 52
    },
    {
      "val": "st1",
      "offset": 57
    },
    {
      "val": "4000",
      "offset": 61
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_submit_the_api_with_the_input_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2616840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "aaa1",
      "offset": 53
    },
    {
      "val": "11",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "st1",
      "offset": 66
    },
    {
      "val": "4000",
      "offset": 70
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 128527681101,
  "error_message": "com.smartbear.readyapi.client.execution.ApiException{code\u003d0, message\u003dcom.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out), responseHeaders\u003dnull, responseBody\u003d\u0027null\u0027}\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:184)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat ✽.Then I validate the result against the output attributes1,aaa1,11,true,st1,4000(studentapipostrequest.feature:12)\nCaused by: com.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:155)\n\tat com.sun.jersey.api.client.Client.handle(Client.java:652)\n\tat com.sun.jersey.api.client.WebResource.handle(WebResource.java:682)\n\tat com.sun.jersey.api.client.WebResource.access$200(WebResource.java:74)\n\tat com.sun.jersey.api.client.WebResource$Builder.post(WebResource.java:570)\n\tat com.smartbear.readyapi.client.execution.ApiClientWrapper.invokeAPI(ApiClientWrapper.java:106)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.invokeAPI(CodegenBasedTestServerApi.java:264)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.postTestRecipe(CodegenBasedTestServerApi.java:78)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:174)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:177)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:92)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:105)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:103)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:74)\nCaused by: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat java.net.Socket.connect(Socket.java:538)\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:463)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:558)\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:242)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:339)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:357)\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1220)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1156)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1050)\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:984)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream0(HttpURLConnection.java:1334)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream(HttpURLConnection.java:1309)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler$1$1.getOutputStream(URLConnectionClientHandler.java:238)\n\tat com.sun.jersey.api.client.CommittingOutputStream.commitStream(CommittingOutputStream.java:117)\n\tat com.sun.jersey.api.client.CommittingOutputStream.write(CommittingOutputStream.java:89)\n\tat sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)\n\tat sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)\n\tat sun.nio.cs.StreamEncoder.implFlush(StreamEncoder.java:295)\n\tat sun.nio.cs.StreamEncoder.flush(StreamEncoder.java:141)\n\tat java.io.OutputStreamWriter.flush(OutputStreamWriter.java:229)\n\tat java.io.BufferedWriter.flush(BufferedWriter.java:254)\n\tat com.sun.jersey.core.util.ReaderWriter.writeToAsString(ReaderWriter.java:191)\n\tat com.sun.jersey.core.provider.AbstractMessageReaderWriterProvider.writeToAsString(AbstractMessageReaderWriterProvider.java:128)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:88)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:58)\n\tat com.sun.jersey.api.client.RequestWriter.writeRequestEntity(RequestWriter.java:300)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler._invoke(URLConnectionClientHandler.java:217)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:153)\n\t... 61 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Test Student Rest API Post Request",
  "description": "",
  "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@STAGE"
    },
    {
      "line": 8,
      "name": "@JIRA1"
    },
    {
      "line": 8,
      "name": "@FUNCTIONAL"
    },
    {
      "line": 8,
      "name": "@GROUP1"
    },
    {
      "line": 8,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I use student api url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I submit the API with the input attributes2,aaa2,11,true,st2,5000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I validate the result against the output attributes2,aaa2,11,true,st2,5000",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStudentApiPostRequestSteps.i_use_student_api_url_something()"
});
formatter.result({
  "duration": 160270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "aaa2",
      "offset": 44
    },
    {
      "val": "11",
      "offset": 49
    },
    {
      "val": "true",
      "offset": 52
    },
    {
      "val": "st2",
      "offset": 57
    },
    {
      "val": "5000",
      "offset": 61
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_submit_the_api_with_the_input_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 166326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 51
    },
    {
      "val": "aaa2",
      "offset": 53
    },
    {
      "val": "11",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "st2",
      "offset": 66
    },
    {
      "val": "5000",
      "offset": 70
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 127604274535,
  "error_message": "com.smartbear.readyapi.client.execution.ApiException{code\u003d0, message\u003dcom.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out), responseHeaders\u003dnull, responseBody\u003d\u0027null\u0027}\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:184)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat ✽.Then I validate the result against the output attributes2,aaa2,11,true,st2,5000(studentapipostrequest.feature:12)\nCaused by: com.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:155)\n\tat com.sun.jersey.api.client.Client.handle(Client.java:652)\n\tat com.sun.jersey.api.client.WebResource.handle(WebResource.java:682)\n\tat com.sun.jersey.api.client.WebResource.access$200(WebResource.java:74)\n\tat com.sun.jersey.api.client.WebResource$Builder.post(WebResource.java:570)\n\tat com.smartbear.readyapi.client.execution.ApiClientWrapper.invokeAPI(ApiClientWrapper.java:106)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.invokeAPI(CodegenBasedTestServerApi.java:264)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.postTestRecipe(CodegenBasedTestServerApi.java:78)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:174)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:177)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:92)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:105)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:103)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:74)\nCaused by: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat java.net.Socket.connect(Socket.java:538)\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:463)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:558)\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:242)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:339)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:357)\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1220)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1156)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1050)\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:984)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream0(HttpURLConnection.java:1334)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream(HttpURLConnection.java:1309)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler$1$1.getOutputStream(URLConnectionClientHandler.java:238)\n\tat com.sun.jersey.api.client.CommittingOutputStream.commitStream(CommittingOutputStream.java:117)\n\tat com.sun.jersey.api.client.CommittingOutputStream.write(CommittingOutputStream.java:89)\n\tat sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)\n\tat sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)\n\tat sun.nio.cs.StreamEncoder.implFlush(StreamEncoder.java:295)\n\tat sun.nio.cs.StreamEncoder.flush(StreamEncoder.java:141)\n\tat java.io.OutputStreamWriter.flush(OutputStreamWriter.java:229)\n\tat java.io.BufferedWriter.flush(BufferedWriter.java:254)\n\tat com.sun.jersey.core.util.ReaderWriter.writeToAsString(ReaderWriter.java:191)\n\tat com.sun.jersey.core.provider.AbstractMessageReaderWriterProvider.writeToAsString(AbstractMessageReaderWriterProvider.java:128)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:88)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:58)\n\tat com.sun.jersey.api.client.RequestWriter.writeRequestEntity(RequestWriter.java:300)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler._invoke(URLConnectionClientHandler.java:217)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:153)\n\t... 61 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "Test Student Rest API Post Request",
  "description": "",
  "id": "validate-the-student-api-post-request.;test-student-rest-api-post-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@STAGE"
    },
    {
      "line": 8,
      "name": "@JIRA1"
    },
    {
      "line": 8,
      "name": "@FUNCTIONAL"
    },
    {
      "line": 8,
      "name": "@GROUP1"
    },
    {
      "line": 8,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I use student api url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I submit the API with the input attributes3,aaa3,11,true,st3,6000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I validate the result against the output attributes3,aaa3,11,true,st3,6000",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStudentApiPostRequestSteps.i_use_student_api_url_something()"
});
formatter.result({
  "duration": 124892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 42
    },
    {
      "val": "aaa3",
      "offset": 44
    },
    {
      "val": "11",
      "offset": 49
    },
    {
      "val": "true",
      "offset": 52
    },
    {
      "val": "st3",
      "offset": 57
    },
    {
      "val": "6000",
      "offset": 61
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_submit_the_api_with_the_input_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2610495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 51
    },
    {
      "val": "aaa3",
      "offset": 53
    },
    {
      "val": "11",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "st3",
      "offset": 66
    },
    {
      "val": "6000",
      "offset": 70
    }
  ],
  "location": "DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 127720206776,
  "error_message": "com.smartbear.readyapi.client.execution.ApiException{code\u003d0, message\u003dcom.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out), responseHeaders\u003dnull, responseBody\u003d\u0027null\u0027}\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:184)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat ✽.Then I validate the result against the output attributes3,aaa3,11,true,st3,6000(studentapipostrequest.feature:12)\nCaused by: com.sun.jersey.api.client.ClientHandlerException: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:155)\n\tat com.sun.jersey.api.client.Client.handle(Client.java:652)\n\tat com.sun.jersey.api.client.WebResource.handle(WebResource.java:682)\n\tat com.sun.jersey.api.client.WebResource.access$200(WebResource.java:74)\n\tat com.sun.jersey.api.client.WebResource$Builder.post(WebResource.java:570)\n\tat com.smartbear.readyapi.client.execution.ApiClientWrapper.invokeAPI(ApiClientWrapper.java:106)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.invokeAPI(CodegenBasedTestServerApi.java:264)\n\tat com.smartbear.readyapi.client.execution.CodegenBasedTestServerApi.postTestRecipe(CodegenBasedTestServerApi.java:78)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.doExecuteTestCase(RecipeExecutor.java:174)\n\tat com.smartbear.readyapi.client.execution.RecipeExecutor.executeRecipe(RecipeExecutor.java:130)\n\tat demo.web.test.api.DemoStudentApiPostRequestSteps.i_validate_the_result_against_the_output_attributes(DemoStudentApiPostRequestSteps.java:77)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:177)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:92)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:105)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:103)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:74)\nCaused by: java.net.ConnectException: Connection timed out (Connection timed out)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat java.net.Socket.connect(Socket.java:538)\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:463)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:558)\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:242)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:339)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:357)\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1220)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1156)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1050)\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:984)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream0(HttpURLConnection.java:1334)\n\tat sun.net.www.protocol.http.HttpURLConnection.getOutputStream(HttpURLConnection.java:1309)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler$1$1.getOutputStream(URLConnectionClientHandler.java:238)\n\tat com.sun.jersey.api.client.CommittingOutputStream.commitStream(CommittingOutputStream.java:117)\n\tat com.sun.jersey.api.client.CommittingOutputStream.write(CommittingOutputStream.java:89)\n\tat sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)\n\tat sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)\n\tat sun.nio.cs.StreamEncoder.implFlush(StreamEncoder.java:295)\n\tat sun.nio.cs.StreamEncoder.flush(StreamEncoder.java:141)\n\tat java.io.OutputStreamWriter.flush(OutputStreamWriter.java:229)\n\tat java.io.BufferedWriter.flush(BufferedWriter.java:254)\n\tat com.sun.jersey.core.util.ReaderWriter.writeToAsString(ReaderWriter.java:191)\n\tat com.sun.jersey.core.provider.AbstractMessageReaderWriterProvider.writeToAsString(AbstractMessageReaderWriterProvider.java:128)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:88)\n\tat com.sun.jersey.core.impl.provider.entity.StringProvider.writeTo(StringProvider.java:58)\n\tat com.sun.jersey.api.client.RequestWriter.writeRequestEntity(RequestWriter.java:300)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler._invoke(URLConnectionClientHandler.java:217)\n\tat com.sun.jersey.client.urlconnection.URLConnectionClientHandler.handle(URLConnectionClientHandler.java:153)\n\t... 61 more\n",
  "status": "failed"
});
});