Feature: Login flow
        
     #    Scenario: user generates data for authenticated flows
     #        Given user generates data for authenticated login flows
     #              | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
     #              | 2              | 5                         | 0                      | 7              | 3                    | 22           |


        Scenario Outline: user can login through clicking authorized episode button
            Given the user loads the salesforce plus platform
             When the user access authorized content and logs in through trailblazer id
             When the user fills out the sign up forms
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then the user is logged in

        Scenario Outline: user logs out by clicking cancel and logout button
            Given the user loads the salesforce plus platform
             When the user clicks on dreamforce button and access authorized content
             When the user fills out the sign up forms and clicks cancel and logout button
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then the user is logged out from the salesforce+ platform

        
        Scenario Outline: user logins through login button
            Given the user loads the salesforce plus platform
             When user tries to login with an email address
             Then user signs up for the page with the following details
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
     
        Scenario Outline: user logins using watch now button
            Given the user loads the salesforce plus platform
             When user tries to login with a dummy email address
             When user signs up with following details on salesforce platform
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
      
