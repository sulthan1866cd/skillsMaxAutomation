Feature: login to skillsmax

  @login
  Scenario: user logged in successfully
    Given user is in login page
    When user enters correct email id
    And user enters correct password for the email id
    And user clicks login button
    Then user should be redirected to dashboard page

  @login
  Scenario Outline: user enters wrong credentials
    Given user is in login page
    When user enters <email> in "Email" field
    And user enters <password> in "Password" field
    And user clicks login button
    Then "Incorrect email or password" message should be shown -login

    Examples:
      | email             | password |
      | "wrong@mail.com"  | "pass"   |
      | "sulthn@gmail.in" | "qwerty" |

  @login
  Scenario Outline: user leaves password field empty
    Given user is in login page
    When user enters <value> in <field> field
    And user clicks login button
    Then "<other field> is required<dot>" message should be shown -login

    Examples:
      | value          | field      | other field | dot |
      | "wrongmail.in" | "Email"    | Password    | .   |
      | "sulthn@gmail" | "Email"    | Password    | .   |
      | "qwerty"       | "Password" | Email       |     |
      | "password"     | "Password" | Email       |     |
    # email is required message dosent end with dot

  @login
  Scenario Outline: user enters wrong email format
    Given user is in login page
    When user enters <email> in "Email" field
    And user enters <password> in "Password" field
    And user clicks login button
    Then "*Please enter a valid email address." message should be shown -login

    Examples:
      | email          | password              |
      | "wrongmail.in" | "pass"                |
      | "sulthn@gmail" | "qwerty"              |
      | "mail@.in"     | ""                    |
      | "my mail"      | "my secure password " |
