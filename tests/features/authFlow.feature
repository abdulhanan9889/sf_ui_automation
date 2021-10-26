Feature: Authenticated Flow
              As an authenticated user
         User would like to browse through available series
              And is able to play selected episodes

        Scenario: user generates data for authenticated flows
            Given: user generates data for authenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
                  | 2              | 5                         | 0                      | 7              | 3                    | 22           |

        Scenario Outline: authenticated user plays the selected episode
            Given user is on salesforce plus
             When user tries to login with a dummy email
             When user signs up for the page with following details
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then user is able to play the video
        
       