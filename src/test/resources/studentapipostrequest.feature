Feature: Validate the student api post request.
  Use the student api.
  Enter the required input and submit the api using post.
  Validate the api response against the given parameters.
  Repeat the task for multiple inputs and output parameters.


  @JIRA1 @FUNCTIONAL @REGRESSION @STAGE @GROUP1
  Scenario Outline: Test Student Rest API Post Request
    Given I use student api url
    When I submit the API with the input attributes<in-id>,<in-name>,<in-age>,<in-status>,<in-street>,<in-zip>
    Then I validate the result against the output attributes<out-id>,<out-name>,<out-age>,<out-status>,<out-street>,<out-zip>
    
    Examples: 
      | in-id | in-name | in-age | in-status | in-street | in-zip | out-id | out-name | out-age | out-status | out-street | out-zip |
      |     1 | aaa1    |     11 | true      | st1       |   4000 |      1 | aaa1     |      11 | true       | st1        |    4000 |
      |     2 | aaa2    |     11 | true      | st2       |   5000 |      2 | aaa2     |      11 | true       | st2        |    5000 |
      |     3 | aaa3    |     11 | true      | st3       |   6000 |      3 | aaa3     |      11 | true       | st3        |    6000 |
      
      